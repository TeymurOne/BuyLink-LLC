import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/presentation/resourses/app_colors.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/network/user_details/user_detals_bloc.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/network/user_details/widget/folowing_item.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/profile_tab_bloc.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/settings/settings_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/user_details_edit/user_details_screen.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../../../../../../components/recommendation.dart';
import '../../../../../../data/network/response/recommendation_response.dart';
import '../../../../../../data/network/response/user.dart';
import '../../../../../../presentation/bloc/utils.dart';
import '../../../../generated/l10n.dart';
import 'network/network_screen.dart';
import 'network/user_details/user_details_screen.dart';

class ProfileTabScreen extends BaseScreen {

  const ProfileTabScreen({super.key});

  @override
  State<ProfileTabScreen> createState() => _UserDetailsScreenState();
}

class _UserDetailsScreenState extends BaseState<ProfileTabScreen, ProfileTabBloc> {
  final ScrollController _scrollController = ScrollController();

  @override
  void initState() {
    super.initState();
    Future.delayed(Duration(milliseconds: 100)).then((value) => bloc.userDetails);
    bloc.load();
    _scrollController.addListener(() {
      hideKeyboardOnScroll(context, _scrollController);
      if (_scrollController.position.extentAfter <= MediaQuery.of(context).size.height) {
        bloc.load();
      }
    });
    bloc.getUserDetails();
  }

  @override
  Widget body() {
    return CustomScrollView(
      slivers: [
        SliverToBoxAdapter(
          child: StreamBuilder<User>(
            stream: bloc.userDetails,
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                return Stack(
                  children: [
                    Row(
                      children: [
                        Spacer(),
                        Padding(
                          padding: EdgeInsets.only(top: 60, left: 20, right: 20),
                          child: GestureDetector(
                            onTap: () => Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (BuildContext context) => SettingsScreen(
                                  user: snapshot.requireData,
                                ),
                              ),
                            ),
                            child: Icon(
                              Icons.settings,
                              color: Colors.grey,
                            ),
                          ),
                        ),
                      ],
                    ),
                    Padding(
                      padding: const EdgeInsets.only(top: 100, left: 20, right: 20),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Stack(
                                children: [
                                  Container(
                                    height: 80,
                                    width: 80,
                                    child: AspectRatio(
                                      aspectRatio: 1,
                                      child: ClipRRect(
                                        borderRadius: BorderRadius.circular(100),
                                        child: Image.network(
                                         snapshot.requireData.image ?? "",
                                          fit: BoxFit.cover,
                                        ),
                                      ),
                                    ),
                                  ),
                                  Positioned(
                                    right: 0,
                                    bottom: 0,
                                    child: GestureDetector(
                                      onTap: () => Navigator.push(
                                        context,
                                        MaterialPageRoute(
                                          builder: (BuildContext context) => UserDetailsEditScreen(
                                            user: snapshot.requireData,
                                            isRegistered: true,
                                          ),
                                        ),
                                      ),
                                      child: Container(
                                          width: 22,
                                          height: 22,
                                          decoration: BoxDecoration(
                                              color: AppColors.appColor, borderRadius: BorderRadius.circular(50)),
                                          child: Icon(
                                            Icons.edit,
                                            color: Colors.white,
                                            size: 12,
                                          )),
                                    ),
                                  )
                                ],
                              ),
                              Spacer(),
                              FolowingItem(
                                count:  snapshot.requireData.refererCount ?? 0,
                                title: S.of(context).refers,
                              ),
                              GestureDetector(
                                onTap: () => Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                    builder: (BuildContext context) => NetworkScreen(),
                                  ),
                                ),
                                child: FolowingItem(
                                  count: snapshot.requireData.fiendsCount ?? 0,
                                  title: S.of(context).network,
                                ),
                              ),
                              FolowingItem(
                                count:snapshot.requireData.transactionCount ?? 0,
                                title: S.of(context).deals,
                              ),
                              Spacer(),
                            ],
                          ),
                          Padding(
                            padding: const EdgeInsets.only(top: 15, bottom: 10),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                 snapshot.requireData.name,
                                  style: TextStyle(fontWeight: FontWeight.w500, fontSize: 16),
                                ),
                                Text(
                                  S.of(context).ff + (snapshot.requireData.username ?? "null"),
                                  style: TextStyle(fontWeight: FontWeight.w400, fontSize: 14, color: Colors.grey),
                                ),
                              ],
                            ),
                          )
                        ],
                      ),
                    ),
                  ],
                );
              }
              return const SizedBox();
            },
          ),
        ),
        StreamBuilder<List<RecommendationResponse>>(
          stream: bloc.paginableList,
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              if (snapshot.requireData.isNotEmpty) {
                return SliverPadding(
                  sliver: SliverList(
                    delegate: SliverChildBuilderDelegate(
                          (_, index) => GestureDetector(
                        onTap: () => Navigator.push(
                            context,
                            CupertinoPageRoute(
                                builder: (BuildContext context) =>
                                    UserDetailsScreen(
                                      user: snapshot.requireData[index].user,
                                    ))),
                        child: Padding(
                          padding: const EdgeInsets.symmetric(vertical: 10.0),
                          child: Recommendation(
                            isUserRecommendationLinks: false,
                            recommendationResponse: snapshot.requireData[index],
                          ),
                        ),
                      ),
                      childCount: snapshot.requireData.length,
                    ),
                  ),
                  padding: EdgeInsets.only(bottom: 100,left: 10,right: 10),
                );
              }
              return SliverToBoxAdapter(
                child: Center(
                  child: Column(
                    children: [
                      Padding(
                        padding: const EdgeInsets.only(left: 40,right: 40,top: 10),
                        child: Image.asset("assets/raster/referal_not_myn.png"),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(left: 20, right: 20),
                        child: Text(
                          S.of(context).youHaveNoPostYetStartToShareReferalPosts,
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.w700,
                          ),
                        ),
                      ),

                    ],
                  ),
                ),
              );

            }
            return SliverToBoxAdapter();
          },
        ),
      ],
    );
  }

  @override
  ProfileTabBloc provideBloc() {
    return ProfileTabBloc( );
  }
}
