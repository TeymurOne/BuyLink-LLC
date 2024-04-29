import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/presentation/resourses/app_colors.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/home_tab_bloc.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/user_details_edit/widget/category_navigator_pop.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../../../../components/chip.dart';
import '../../../../../data/network/response/most_recommended_response.dart';
import '../../../../../generated/l10n.dart';
import '../partner/partner_screen.dart';

class PartnerList extends BaseScreen {
  final String id;
  final String title;

  const PartnerList({
    super.key,
    required this.id,
    required this.title,
  });

  @override
  State<PartnerList> createState() => _PartnerListState();
}

class _PartnerListState extends BaseState<PartnerList, HomeTabBloc> {
  @override
  Widget body() {
    return Padding(
      padding: const EdgeInsets.only(left: 20, right: 20),
      child: Column(
        children: [
          SizedBox(
            height: 40,
          ),
          CategoryNavigatorPop(
            title: widget.title,
          ),
          Expanded(
            child: FutureBuilder<MostRecommendedResponse>(
              future: bloc.industry(widget.id),
              builder: (BuildContext context, snapshot) {
                if (snapshot.hasData && snapshot.requireData.data.isNotEmpty) {
                  return ListView.builder(
                    itemCount: snapshot.requireData.data.length,
                    itemBuilder: (BuildContext context, int index) {
                      return GestureDetector(
                        onTap: () => Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (BuildContext context) {
                              return PartnerScreen(
                                partnerId: snapshot.requireData.data[index].id
                                    .toString(),
                              );
                            },
                          ),
                        ),
                        child: Container(
                          margin: EdgeInsets.only(bottom: 10),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(10),
                            color: AppColors.appColor.withOpacity(0.1),
                          ),
                          child: ListTile(
                            leading: AspectRatio(
                              aspectRatio: 1,
                              child: ClipRRect(
                                borderRadius: BorderRadius.circular(8),
                                child: CachedNetworkImage(
                                  imageUrl:
                                      snapshot.requireData.data[index].image,
                                  fit: BoxFit.cover,
                                ),
                              ),
                            ),
                            title: Padding(
                              padding: EdgeInsets.only(top: 10),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Row(
                                    children: [
                                      Container(
                                        padding: EdgeInsets.only(right: 10),
                                        child: Text(
                                          snapshot
                                              .requireData.data[index].title,
                                          style: TextStyle(
                                              fontWeight: FontWeight.w600),
                                        ),
                                      ),
                                      CustomChip(
                                          child: Container(
                                        child: Row(
                                          crossAxisAlignment:
                                              CrossAxisAlignment.start,
                                          children: [
                                            Text(
                                              snapshot.requireData.data[index]
                                                  .rating
                                                  .toString(),
                                              style: TextStyle(
                                                  fontSize: 12,
                                                  color: Colors.white),
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
                                    padding: EdgeInsets.only(top: 3, bottom: 3),
                                    child: Row(
                                      children: [
                                        Text(
                                          '${snapshot.requireData.data[index].userDiscount}' + S.of(context).discount,
                                          style: Theme.of(context)
                                              .textTheme
                                              .labelMedium,
                                        ),
                                        Text(
                                          '  •   ${snapshot.requireData.data[index].referrerCommission}' + S.of(context).refCashback,
                                          style: Theme.of(context)
                                              .textTheme
                                              .labelMedium,
                                        )
                                      ],
                                    ),
                                  ),
                                  Text(
                                    '${snapshot.requireData.data[index].userDiscount} ' + S.of(context).recommends,
                                    style:
                                        Theme.of(context).textTheme.labelMedium,
                                  ),
                                ],
                              ),
                            ),
                            subtitle:
                                // Text(snapshot.requireData[index].id.toString()),
                                Text(""),
                          ),
                        ),
                      );
                    },
                  );
                }
                return SizedBox();
              },
            ),
          ),
        ],
      ),
    );
  }

  @override
  HomeTabBloc provideBloc() {
    return HomeTabBloc();
  }
}
