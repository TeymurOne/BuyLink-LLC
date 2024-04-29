import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../../../../components/recommendation.dart';
import '../../../../../components/switch.dart';
import '../../../../../data/network/response/recommendation_response.dart';
import '../../../../../generated/l10n.dart';
import '../../../../../presentation/bloc/utils.dart';
import '../../../../../presentation/resourses/app_colors.dart';
import '../../home_tab/search/bonus_tab_screen.dart';
import '../../profil_tab/network/user_details/user_details_screen.dart';
import 'my_referrals_bloc.dart';

class MyReferralsScreen extends BaseScreen {
  const MyReferralsScreen({Key? key}) : super(key: key);

  @override
  State<MyReferralsScreen> createState() => _MyReferralsScreenState();
}

class _MyReferralsScreenState
    extends BaseState<MyReferralsScreen, MyReferralsBloc> {
  final ScrollController _scrollController = ScrollController();

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
    return CustomScrollView(
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
                            isUserRecommendationLinks: false,
                            recommendationResponse: snapshot.requireData[index],
                          ),
                        ),
                      ),
                      childCount: snapshot.requireData.length,
                    ),
                  ),
                  padding: EdgeInsets.all(20),
                );
              }
              return SliverToBoxAdapter(
                child: Center(
                  child: Column(
                    children: [
                      Padding(
                        padding: const EdgeInsets.all(40.0),
                        child: Image.asset("assets/raster/referal_not_myn.png"),
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
    );
  }

  @override
  MyReferralsBloc provideBloc() {
    return MyReferralsBloc();
  }
}
