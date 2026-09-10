import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/presentation/resourses/app_colors.dart';
import 'package:buylink_flutter/screens/home/tabs/referal_tab/network_referrals/recomend_filter.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:rxdart/rxdart.dart';

import '../../../../../app_bloc.dart';
import '../../../../../components/recommendation.dart';
import '../../../../../data/network/response/recommendation_response.dart';
import '../../../../../generated/l10n.dart';
import '../../../../../presentation/bloc/bloc_provider.dart';
import '../../../../../presentation/bloc/utils.dart';
import '../../home_tab/search/bonus_tab_screen.dart';
import '../../profil_tab/network/user_details/user_details_screen.dart';
import 'network_referals_bloc.dart';
import 'order_status_selector.dart';

class NetworkReferralsScreen extends BaseScreen {
  const  NetworkReferralsScreen({Key? key}) : super(key: key);

  @override
  State<NetworkReferralsScreen> createState() => _NetworkReferralsScreenState();
}

class _NetworkReferralsScreenState
    extends BaseState<NetworkReferralsScreen, NetworkReferralsBloc> {
  final ScrollController _scrollController = ScrollController();
  final PublishSubject<void> onPacketsAdded = PublishSubject();

  @override
  void initState() {
    super.initState();
    bloc.load();
    _scrollController.addListener(() {
      hideKeyboardOnScroll(context, _scrollController);
      if (_scrollController.position.extentAfter <=
          MediaQuery.of(context).size.height) {
        bloc.load();
      }
    });
  }

  @override
  Widget body() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.only(top: 70, left: 20),
          child: Text(
            S.of(context).referrals,
            style: TextStyle(fontSize: 24, fontWeight: FontWeight.w500),
          ),
        ),
        Container(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Padding(
                  padding: const EdgeInsets.only(
                    left: 16,
                  ),
                  child: Text(
                    S.of(context).balamalarm,
                  ),
                ),
                Container(
                  margin: const EdgeInsets.all(18),
                  height: 50,
                  width: MediaQuery.of(context).size.width,
                  decoration: BoxDecoration(
                      color: bloc.status == RecomendFilter.used ? Colors.red :bloc.status == RecomendFilter.in_basket ? Colors.green.withOpacity(0.5) :  AppColors.appColor,
                      borderRadius: BorderRadius.circular(10)),
                  child: Padding(
                      padding: const EdgeInsets.only(
                          left: 15, top: 14, bottom: 14, right: 21),
                      child: OrderStatusSelectorDeclaration()),
                )
              ],
            )),
        Expanded(
          child: RefreshIndicator(
            onRefresh: () => bloc.load(refresh: true),
            child: CustomScrollView(
              controller: _scrollController,
              slivers: [

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
                                    recommendationResponse: snapshot.requireData[index],
                                  ),
                                ),
                              ),
                              childCount: snapshot.requireData.length,
                            ),
                          ),
                          padding: EdgeInsets.only(left: 10,right: 10),
                        );
                      }
                      return SliverToBoxAdapter(
                        child: Center(
                          child: Column(
                            children: [
                              Image.asset("assets/raster/referal_not.png"),
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
                                padding:
                                    const EdgeInsets.only(left: 20, right: 20, top: 30),
                                child: Text(
                                  S.of(context).addToNetworkThousandOfYourFriendsToSeeTheir,
                                  style: TextStyle(
                                    fontSize: 14,
                                    fontWeight: FontWeight.w500,
                                  ),
                                ),
                              ),
                              GestureDetector(
                                onTap: () => Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                    builder: (BuildContext context) =>
                                        HomeSearchScreen(),
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
                                      S.of(context).startToSearch,
                                      style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.w500,
                                          color: Colors.white),
                                    ),
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
                SliverToBoxAdapter(
                  child: SizedBox(
                    height: 90,
                  ),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }

  @override
  NetworkReferralsBloc provideBloc() {
    return NetworkReferralsBloc(onPacketsAdded);
  }
}
