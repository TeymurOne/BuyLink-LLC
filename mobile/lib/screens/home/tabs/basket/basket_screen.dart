import 'dart:async';
import 'dart:convert';

import 'package:buylink_flutter/data/network/response/basket.dart';
import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/screens/home/home_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/basket/basket_bloc.dart';
import 'package:buylink_flutter/screens/home/tabs/basket/widget/scaner_true_chek.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:pusher_channels_flutter/pusher_channels_flutter.dart';
import 'package:rxdart/rxdart.dart';
import '../../../../.env.dart';
import '../../../../components/basket_item.dart';
import '../../../../generated/l10n.dart';
import '../../../../presentation/bloc/utils.dart';
import '../../../../presentation/resourses/app_colors.dart';

class BasketScreen extends BaseScreen {
  const BasketScreen({super.key});

  @override
  State<BasketScreen> createState() => _BasketScreenState();
}

class _BasketScreenState extends BaseState<BasketScreen, BasketBloc> {
  final ScrollController _scrollController = ScrollController();
  final PublishSubject<void> onPacketsAdded = PublishSubject();
  final PublishSubject<void> onDeclarationAdded = PublishSubject();
  PusherChannel? pusherChannel;

  @override
  void initState() {
    super.initState();
    initPusher();
    bloc.load();
    _scrollController.addListener(() {
      hideKeyboardOnScroll(context, _scrollController);
      if (_scrollController.position.extentAfter <= MediaQuery.of(context).size.height) {
        bloc.load();
      }
    });
  }

  Timer? timer;

  Future<void> initPusher() async {
    PusherChannelsFlutter pusher = PusherChannelsFlutter.getInstance();
    try {
      await pusher.init(
        apiKey: PUSHER_APP_KEY,
        cluster: PUSHER_APP_CLUSTER,
        onEvent: (event) {
          print("OnEvent " + event.toString());
          var id;
          try {
            final map = jsonDecode(event.data);
            id = map["data"]["id"];
            print("aaa" + id);
          } catch (e) {
            print(e);
          }
          if (id != null) {
            final item = bloc.onItemScan(id);
            if (item != null) {
              Future.delayed(Duration(seconds: 2)).then(
                (value) {
                  if (mounted) {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (BuildContext context) => ScanerTrueCheck(
                          id: id,
                        ),
                      ),
                    );
                  }
                },
              );
            }
          }
        },
        onError: (String message, int? code, dynamic error) {
          print("Erooooooooor onError " + message);
        },
        onSubscriptionError: (String message, dynamic error) {
          print("Erooooooooor onSubscriptionError " + message);
        },
        onSubscriptionSucceeded: (String channelName, dynamic data) {
          print("Erooooooooor onSubscriptionSucceeded " + channelName);
        },
      );
      // -${widget.basket.uuid}
      pusherChannel = await pusher.subscribe(channelName: 'referer-claim');
      await pusher.connect();
    } catch (e) {
      print("ERROR: $e");
    }
  }

  @override
  Widget body() {
    return SafeArea(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.only(top: 16, left: 20),
            child: Text(
              S.of(context).qrBascet,
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.w500),
            ),
          ),
          Expanded(
            child: RefreshIndicator(
              onRefresh: () => bloc.load(refresh: true),
              child: StreamBuilder<List<Basket>>(
                stream: bloc.paginableList,
                builder: (_, snapshot) {
                  if (snapshot.hasData) {
                    if (snapshot.requireData.isNotEmpty) {
                      return Padding(
                        padding: const EdgeInsets.all(20.0),
                        child: ListView.builder(
                          padding: EdgeInsets.only(bottom: 80),
                          itemCount: snapshot.requireData.length,
                          scrollDirection: Axis.vertical,
                          shrinkWrap: true,
                          itemBuilder: (BuildContext context, int index) {
                            return BasketItem(
                              key: ValueKey(snapshot.requireData[index]),
                              basket: snapshot.requireData[index],
                              onQrReflash: (uuid) => bloc.refreshBasket(uuid),
                            );
                          },
                        ),
                      );
                    }
                    return Center(
                      child: Column(
                        children: [
                          Padding(
                            padding: const EdgeInsets.all(40.0),
                            child: Image.asset("assets/raster/basket_not.png"),
                          ),
                          Padding(
                            padding: const EdgeInsets.only(left: 20, right: 20),
                            child: Text(
                              S.of(context).forNowYouDoNotHaveAnyNetworkOrThere,
                              style: TextStyle(
                                fontSize: 20,
                                fontWeight: FontWeight.w700,
                              ),
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.only(left: 20, right: 20, top: 30),
                            child: Text(
                              S.of(context).addToNetworkThousandOfYourFriendsToSeeTheir,
                              style: TextStyle(
                                fontSize: 14,
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                          ),
                          GestureDetector(
                            onTap: () => Navigator.pushReplacement(
                              context,
                              MaterialPageRoute(
                                builder: (BuildContext context) => HomeScreen(
                                  initialTabIndex: 1,
                                ),
                              ),
                            ),
                            child: Container(
                              margin: EdgeInsets.all(20),
                              height: 50,
                              width: double.infinity,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(8),
                                color: AppColors.appColor,
                              ),
                              child: Center(
                                child: Text(
                                  S.of(context).goToReferral,
                                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w500, color: Colors.white),
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    );
                  }
                  return SizedBox();
                },
              ),
            ),
          ),
        ],
      ),
    );
  }

  @override
  BasketBloc provideBloc() {
    return BasketBloc(onPacketsAdded);
  }

  @override
  void dispose() {
    onDeclarationAdded.close();
    onPacketsAdded.close();
    pusherChannel?.unsubscribe();
    super.dispose();
  }
}
