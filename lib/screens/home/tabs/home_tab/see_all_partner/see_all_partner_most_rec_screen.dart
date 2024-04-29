import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/see_all_partner/see_all_partner_bloc.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:rxdart/rxdart.dart';

import '../../../../../components/chip.dart';
import '../../../../../components/shop_promo.dart';
import '../../../../../data/network/response/most_recommended.dart';
import '../../../../../data/network/response/most_recommended_response.dart';
import '../../../../../generated/l10n.dart';
import '../../../../../presentation/bloc/utils.dart';
import '../../../../../presentation/resourses/app_colors.dart';
import '../../profil_tab/user_details_edit/widget/category_navigator_pop.dart';
import '../partner/partner_screen.dart';

class SeeAllPartnerMostRecScreen extends BaseScreen {
  final String id;
  final String type;
  final String title;

  const SeeAllPartnerMostRecScreen({
    super.key,
    required this.id,
    required this.type,
    required this.title,
  });

  @override
  State<SeeAllPartnerMostRecScreen> createState() =>
      _SeeAllPartnerScreenState();
}

class _SeeAllPartnerScreenState
    extends BaseState<SeeAllPartnerMostRecScreen, SeeAllPartnerBloc> {
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
    return SafeArea(
      child: RefreshIndicator(
          child: CustomScrollView(
            controller: _scrollController,
            slivers: [
              SliverToBoxAdapter(
                child: Container(
                  margin: const EdgeInsets.only(
                      top: 20, bottom: 20, left: 20, right: 20),
                  child: CategoryNavigatorPop(
                    title: widget.title,
                  ),
                ),
              ),
              StreamBuilder<List<MostRecommended>>(
                  stream: bloc.paginableList,
                  builder: (context, snapshot) {
                    if (snapshot.hasData) {
                      if (snapshot.requireData.isNotEmpty) {
                        return SliverPadding(
                          sliver: SliverGrid(
                            delegate: SliverChildBuilderDelegate(
                              (_, index) => Padding(
                                padding: const EdgeInsets.only(right: 10),
                                child: GestureDetector(
                                  onTap: () => Navigator.push(
                                    context,
                                    MaterialPageRoute(
                                      builder: (BuildContext context) {
                                        return PartnerScreen(
                                          partnerId: snapshot
                                              .requireData[index].id
                                              .toString(),
                                        );
                                      },
                                    ),
                                  ),
                                  child: Container(
                                    margin: EdgeInsets.only(bottom: 10),
                                    decoration: BoxDecoration(
                                      borderRadius: BorderRadius.circular(10),
                                      color:
                                          AppColors.appColor.withOpacity(0.1),
                                    ),
                                    child: Row(
                                      children: [
                                        Container(
                                          width: 60,
                                          height: 60,
                                          margin: EdgeInsets.all(20),
                                          child: AspectRatio(
                                            aspectRatio: 1,
                                            child: ClipRRect(
                                              borderRadius:
                                              BorderRadius.circular(8),
                                              child: CachedNetworkImage(
                                                imageUrl: snapshot
                                                    .requireData[index].image,
                                                fit: BoxFit.cover,
                                                width: 20,
                                                height: 20,
                                              ),
                                            ),
                                          ),
                                        ),
                                        Padding(
                                          padding: EdgeInsets.only(top: 10),
                                          child: Column(
                                            crossAxisAlignment:
                                            CrossAxisAlignment.start,
                                            children: [
                                              Row(
                                                children: [
                                                  Container(
                                                    padding: EdgeInsets.only(
                                                        right: 10),
                                                    child: Text(
                                                      snapshot.requireData[index]
                                                          .title,
                                                      style: TextStyle(
                                                          fontWeight:
                                                          FontWeight.w600),
                                                    ),
                                                  ),
                                                  CustomChip(
                                                      child: Container(
                                                        child: Row(
                                                          crossAxisAlignment:
                                                          CrossAxisAlignment
                                                              .start,
                                                          children: [
                                                            Text(
                                                              snapshot
                                                                  .requireData[index]
                                                                  .rating
                                                                  .toString(),
                                                              style: TextStyle(
                                                                  fontSize: 12,
                                                                  color:
                                                                  Colors.white),
                                                            ),
                                                            Icon(
                                                              Icons.star_rounded,
                                                              size: 12,
                                                              color: Colors.white,
                                                            )
                                                          ],
                                                        ),
                                                      )),
                                                ],
                                              ),
                                              Padding(
                                                padding: EdgeInsets.only(
                                                    top: 3, bottom: 3),
                                                child: Row(
                                                  children: [
                                                    Text(
                                                      '${snapshot.requireData[index].userDiscount}' + S.of(context).discount,
                                                      style: Theme.of(context)
                                                          .textTheme
                                                          .labelMedium,
                                                    ),
                                                    Text(
                                                      '  •   ${snapshot.requireData[index].referrerCommission}'+S.of(context).refCashback,
                                                      style: Theme.of(context)
                                                          .textTheme
                                                          .labelMedium,
                                                    )
                                                  ],
                                                ),
                                              ),
                                              Text(
                                                '${snapshot.requireData[index].userDiscount} ' + S.of(context).recommends,
                                                style: Theme.of(context)
                                                    .textTheme
                                                    .labelMedium,
                                              ),
                                            ],
                                          ),
                                        ),
                                      ],
                                    )
                                  ),
                                ),
                              ),
                              childCount: snapshot.requireData.length,
                            ),
                            gridDelegate:
                                SliverGridDelegateWithFixedCrossAxisCount(
                                    mainAxisExtent: 110,
                                    crossAxisCount: 1,
                                    crossAxisSpacing: 10,
                                    mainAxisSpacing: 10),
                          ),
                          padding:
                              EdgeInsets.only(top: 15, left: 20, right: 20),
                        );
                      }
                      return SliverToBoxAdapter(
                        child: Center(
                          child: Column(
                            children: [
                              Image.asset(
                                "asset/not_product.png",
                              ),
                              Padding(
                                padding: EdgeInsets.symmetric(vertical: 15),
                                child: Text(
                                  S.of(context).sofcontextmhsultaplmad,
                                  style: TextStyle(
                                      fontWeight: FontWeight.w600,
                                      fontSize: 25),
                                ),
                              ),
                            ],
                          ),
                        ),
                      );
                    }
                    return SliverToBoxAdapter();
                  })
            ],
          ),
          onRefresh: () => bloc.load(refresh: true)),
    );
  }

  @override
  SeeAllPartnerBloc provideBloc() {
    return SeeAllPartnerBloc(onPacketsAdded, widget.id, widget.type,);
  }
}
