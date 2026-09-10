import 'dart:async';

import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/presentation/resourses/app_colors.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/search/bonus_tab_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/see_all_partner/see_all_partner_most_rec_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/widget/category_selector.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/widget/home_banner_slider.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/widget/partner_slide_list.dart';
import 'package:flutter/material.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:flutter_svg/flutter_svg.dart';
import '../../../../app_bloc.dart';
import '../../../../components/shop_promo.dart';
import '../../../../data/network/response/category_response.dart';
import '../../../../data/network/response/most_recommended_response.dart';
import '../../../../data/network/response/user.dart';
import '../../../../generated/l10n.dart';
import '../../../../presentation/bloc/bloc_provider.dart';
import '../../../../utils/util.dart';
import 'home_tab_bloc.dart';
import 'notifications/notifications_screen.dart';

class HomePage extends BaseScreen {
  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends BaseState<HomePage, HomeTabBloc> {
  bool isDragStartFroRight = false;
  bool needToLoadNotifications = false;
  late StreamSubscription _messageSubscription;

  @override
  void initState() {
    super.initState();
    bloc.getUserDetails();
    FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin = FlutterLocalNotificationsPlugin();
    // flutterLocalNotificationsPlugin
    //     .resolvePlatformSpecificImplementation<
    //         AndroidFlutterLocalNotificationsPlugin>()
    //     ?.requestPermission();
    flutterLocalNotificationsPlugin
        .resolvePlatformSpecificImplementation<IOSFlutterLocalNotificationsPlugin>()
        ?.requestPermissions(
          alert: true,
          badge: true,
          sound: true,
        );

    final appBloc = BlocProvider.of<AppBloc>(context);
    _messageSubscription = appBloc.messages.listen((message)=> bloc.handlePushMessage(message,appBloc.currentChatId));
  }

  @override
  Widget body() {
    final screenWidth = MediaQuery.of(context).size.width;
    return GestureDetector(
      onHorizontalDragStart: (details) {
        print("position   " + details.localPosition.dx.toString());
        isDragStartFroRight = (screenWidth - details.localPosition.dx) < 120;
      },
      onHorizontalDragUpdate: (details) {
        if (details.delta.direction > 0 && isDragStartFroRight) {
          Navigator.of(context).pushNamed('/chats');
        }
      },
      child: Scaffold(
        backgroundColor: CustomColors.white,
        body: RefreshIndicator(
          onRefresh: bloc.reload,
          child: Padding(
            padding: const EdgeInsets.only(top: 40),
            child: Stack(
              children: [
                Positioned.fill(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      SizedBox(
                        height: 16,
                      ),
                      Row(
                        children: [
                          StreamBuilder<User>(
                            stream: bloc.userDetails,
                            builder: (context, snapshot) {
                              if (snapshot.hasData) {
                                return Padding(
                                  padding: const EdgeInsets.only(left: 20),
                                  child: Text(
                                    snapshot.requireData.username ?? "",
                                    style: TextStyle(fontSize: 24, fontWeight: FontWeight.w500),
                                  ),
                                );
                              }
                              return const SizedBox();
                            },
                          ),
                          Spacer(),
                          StreamBuilder<int>(
                            stream: bloc.unReadNotificationCount,
                            builder: (context, snapshot) {
                              if (snapshot.hasData) {
                                return GestureDetector(
                                  onTap: () {
                                    needToLoadNotifications = true;
                                    bloc.resetUnReadNotificationCount();
                                  },
                                  child: Stack(
                                    children: [
                                      GestureDetector(
                                        onTap: () {
                                          bloc.resetUnReadNotificationCount();
                                          Navigator.push(context,
                                              MaterialPageRoute(builder: (BuildContext context) => Notifications()));
                                        },
                                        child: Container(
                                          padding: EdgeInsets.all(8),
                                          decoration: BoxDecoration(
                                              borderRadius: BorderRadius.circular(52), color: AppColors.tabBarBagraund),
                                          child: SvgPicture.asset(
                                            'assets/vector/notification_icon.svg',
                                            color: Colors.black,
                                            height: 24,
                                          ),
                                        ),
                                      ),
                                      if (snapshot.data != null && snapshot.data! > 0)
                                        Container(
                                          padding: EdgeInsets.all(4),
                                          decoration: ShapeDecoration(
                                            shape: CircleBorder(),
                                            color: Colors.red,
                                          ),
                                          child: Text(
                                            snapshot.data.toString(),
                                            style: TextStyle(
                                                fontSize: 8, fontWeight: FontWeight.w700, color: Colors.white),
                                          ),
                                        )
                                    ],
                                  ),
                                );
                              }
                              return SizedBox();
                            },
                          ),
                          SizedBox(
                            width: 8,
                          ),
                          StreamBuilder<int>(
                            stream: bloc.unResetUnreadChatCount,
                            builder: (context, snap) {
                              if (snap.hasData) {
                                return Stack(
                                  children: [
                                    GestureDetector(
                                      onTap: () {
                                        bloc.resetUnreadChatCount();
                                        Navigator.of(context).pushNamed('/chats');
                                      },
                                      child: Container(
                                        padding: EdgeInsets.all(8),
                                        decoration: BoxDecoration(
                                            borderRadius: BorderRadius.circular(52), color: AppColors.tabBarBagraund),
                                        child: SvgPicture.asset(
                                          'assets/vector/chat_icon.svg',
                                          color: Colors.black,
                                          height: 24,
                                        ),
                                      ),
                                    ),
                                    if (snap.data != null && snap.data! > 0)
                                      Container(
                                        padding: EdgeInsets.all(4),
                                        decoration: ShapeDecoration(
                                          shape: CircleBorder(),
                                          color: Colors.red,
                                        ),
                                        child: Text(
                                          snap.data.toString(),
                                          style:
                                              TextStyle(fontSize: 8, fontWeight: FontWeight.w700, color: Colors.white),
                                        ),
                                      )
                                  ],
                                );
                              }
                              return SizedBox();
                            },
                          ),
                          SizedBox(
                            width: 20,
                          )
                        ],
                      ),
                      SizedBox(
                        height: 10,
                      ),
                      Expanded(
                        child: ListView(
                          padding: EdgeInsets.zero,
                          primary: true,
                          shrinkWrap: true,
                          children: [
                            GestureDetector(
                              onTap: () => Navigator.push(
                                  context, MaterialPageRoute(builder: (BuildContext context) => HomeSearchScreen())),
                              child: Container(
                                margin: EdgeInsets.only(left: 12, right: 12, top: 24),
                                height: 50,
                                decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(8), border: Border.all(color: Colors.grey)),
                                child: Row(
                                  children: [
                                    SizedBox(
                                      width: 12,
                                    ),
                                    SvgPicture.asset(
                                      'assets/vector/bi_search.svg',
                                      color: Colors.black,
                                      height: 16,
                                    ),
                                    SizedBox(
                                      width: 19,
                                    ),
                                    Text(
                                      S.of(context).search,
                                      style: TextStyle(fontSize: 18, fontWeight: FontWeight.w400, color: Colors.grey),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                            CategorySelector(
                              categories: bloc.categories,
                              onChanged: bloc.setCategory,
                            ),
                            FutureBuilder<List<CategoryResponse>>(
                                future: bloc.categories,
                                builder: (context, snapshot) {
                                  if (snapshot.hasData) {
                                    return HomeBannerSlider(
                                      categories: snapshot.requireData,
                                    );
                                  }
                                  return SizedBox();
                                }),
                            StreamBuilder<MostRecommendedResponse>(
                              stream: bloc.popularPartners,
                              builder: (_, snapshot) {
                                if (snapshot.hasData && snapshot.requireData.data.isNotEmpty) {
                                  return Padding(
                                    padding: const EdgeInsets.symmetric(horizontal: 12.0),
                                    child: Row(
                                      children: [
                                        Text(
                                          S.of(context).popularShops,
                                          style: TextStyle(fontWeight: FontWeight.w600, fontSize: 20),
                                        ),
                                        Spacer(),
                                        TextButton(
                                            onPressed: () => Navigator.push(
                                                  context,
                                                  MaterialPageRoute(
                                                    builder: (BuildContext context) => SeeAllPartnerMostRecScreen(
                                                      id: bloc.category?.id.toString() ?? "popular",
                                                      type: 'partners/popular',
                                                      title: S.of(context).popularShops,
                                                    ),
                                                  ),
                                                ),
                                            child: Text(S.of(context).seeAll)),
                                      ],
                                    ),
                                  );
                                }
                                return SizedBox();
                              },
                            ),
                            StreamBuilder<MostRecommendedResponse>(
                              stream: bloc.popularPartners,
                              builder: (_, snapshot) {
                                if (snapshot.hasData && snapshot.requireData.data.isNotEmpty) {
                                  return SizedBox(
                                    width: MediaQuery.of(context).size.width,
                                    height: 220,
                                    child: Padding(
                                      padding: const EdgeInsets.all(12.0),
                                      child: ListView.builder(
                                        itemCount: snapshot.requireData.data.length,
                                        clipBehavior: Clip.none,
                                        scrollDirection: Axis.horizontal,
                                        shrinkWrap: true,
                                        itemBuilder: (BuildContext context, int index) {
                                          return ShopPromo(
                                            recomended: snapshot.requireData.data[index],
                                            image: snapshot.requireData.data[index].cover,
                                          );
                                        },
                                      ),
                                    ),
                                  );
                                }
                                return SizedBox();
                              },
                            ),
                            StreamBuilder<MostRecommendedResponse>(
                              stream: bloc.topDiscount,
                              builder: (_, snapshot) {
                                if (snapshot.hasData && snapshot.requireData.data.isNotEmpty) {
                                  return Padding(
                                    padding: const EdgeInsets.symmetric(horizontal: 12.0),
                                    child: Row(
                                      children: [
                                        Text(
                                          S.of(context).topDiscounts,
                                          style: TextStyle(fontWeight: FontWeight.w600, fontSize: 20),
                                        ),
                                        Spacer(),
                                        TextButton(
                                            onPressed: () => Navigator.push(
                                                  context,
                                                  MaterialPageRoute(
                                                    builder: (BuildContext context) => SeeAllPartnerMostRecScreen(
                                                      id: bloc.category?.id.toString() ?? "top",
                                                      type: 'industry/top_discount',
                                                      title: S.of(context).topDiscounts,
                                                    ),
                                                  ),
                                                ),
                                            child: Text(S.of(context).seeAll)),
                                      ],
                                    ),
                                  );
                                }
                                return SizedBox();
                              },
                            ),
                            StreamBuilder<MostRecommendedResponse>(
                              stream: bloc.topDiscount,
                              builder: (_, snapshot) {
                                if (snapshot.hasData && snapshot.requireData.data.isNotEmpty) {
                                  return SizedBox(
                                    width: MediaQuery.of(context).size.width,
                                    height: 220,
                                    child: Padding(
                                      padding: const EdgeInsets.all(12.0),
                                      child: ListView.builder(
                                        itemCount: snapshot.requireData.data.length,
                                        clipBehavior: Clip.none,
                                        scrollDirection: Axis.horizontal,
                                        shrinkWrap: true,
                                        itemBuilder: (BuildContext context, int index) {
                                          return ShopPromo(
                                            recomended: snapshot.requireData.data[index],
                                            image: snapshot.requireData.data[index].cover,
                                          );
                                        },
                                      ),
                                    ),
                                  );
                                }
                                return SizedBox();
                              },
                            ),
                            StreamBuilder<MostRecommendedResponse>(
                              stream: bloc.mostRecommended,
                              builder: (_, snapshot) {
                                if (snapshot.hasData && snapshot.requireData.data.isNotEmpty) {
                                  return Padding(
                                    padding: const EdgeInsets.symmetric(horizontal: 12.0),
                                    child: Row(
                                      children: [
                                         Text(
                                          S.of(context).mostRecommended,
                                          style: TextStyle(fontWeight: FontWeight.w600, fontSize: 20),
                                        ),
                                        const Spacer(),
                                        TextButton(
                                            onPressed: () => Navigator.push(
                                                  context,
                                                  MaterialPageRoute(
                                                    builder: (BuildContext context) => SeeAllPartnerMostRecScreen(
                                                      id: bloc.category?.id.toString() ?? "most",
                                                      type: 'partners/most-recommended',
                                                      title: S.of(context).mostRecommended,
                                                    ),
                                                  ),
                                                ),
                                            child: Text(S.of(context).seeAll)),
                                      ],
                                    ),
                                  );
                                }
                                return SizedBox();
                              },
                            ),
                            StreamBuilder<MostRecommendedResponse>(
                              stream: bloc.mostRecommended,
                              builder: (_, snapshot) {
                                if (snapshot.hasData && snapshot.requireData.data.isNotEmpty) {
                                  return SizedBox(
                                    width: MediaQuery.of(context).size.width,
                                    height: 190,
                                    child: Padding(
                                      padding: const EdgeInsets.all(12.0),
                                      child: ListView.builder(
                                        itemCount: snapshot.requireData.data.length,
                                        clipBehavior: Clip.none,
                                        scrollDirection: Axis.horizontal,
                                        shrinkWrap: true,
                                        itemBuilder: (BuildContext context, int index) {
                                          return PartneSliderList(
                                            recomended: snapshot.requireData.data[index],
                                          );
                                        },
                                      ),
                                    ),
                                  );
                                }
                                return SizedBox();
                              },
                            ),
                            SizedBox(
                              height: 100,
                            )
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                // Positioned.fill(child: categoriesModal())
              ],
            ),
          ),
        ),
      ),
    );
  }

  @override
  void dispose() {
    _messageSubscription.cancel();
    super.dispose();
  }

  @override
  HomeTabBloc provideBloc() {
    return HomeTabBloc();
  }
}
