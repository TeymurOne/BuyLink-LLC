import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/user_details_edit/widget/category_navigator_pop.dart';
import 'package:buylink_flutter/screens/home/tabs/walet/rewards/rewards_bloc.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../../../../data/network/response/transactions_data.dart';
import '../../../../../generated/l10n.dart';
import '../../../../../presentation/resourses/app_colors.dart';
import '../wallets_screen.dart';

class RewardsScreen extends BaseScreen {
  const RewardsScreen({super.key});

  @override
  State<RewardsScreen> createState() => _RewardsState();
}

class _RewardsState extends BaseState<RewardsScreen, RewardsBloc> {
  @override
  Widget body() {
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.only(bottom: 20),
              child: CategoryNavigatorPop(title: S.of(context).rewards,),
            ),
            FutureBuilder<TransactionsData>(
              future: bloc.transactions,
              builder: (BuildContext context, snapshot) {
                if (snapshot.hasData) {
                  if (snapshot.requireData.data.isNotEmpty) {
                    return Expanded(
                      child: ListView.builder(
                        itemCount: snapshot.requireData.data.length,
                        itemBuilder: (BuildContext context, int index) {
                          var snap = snapshot.requireData.data[index];
                          return Container(
                            margin: const EdgeInsets.only(bottom: 20),
                            width: double.infinity,
                            height: 90,
                            decoration: BoxDecoration(
                                color: AppColors.appColor.withOpacity(0.3), borderRadius: BorderRadius.circular(18)),
                            child: Row(
                              children: [
                                Container(
                                  margin: EdgeInsets.all(10),
                                  height: 150,
                                  child: AspectRatio(
                                    aspectRatio: 1,
                                    child: ClipRRect(
                                      borderRadius: BorderRadius.circular(100),
                                      child: Image.network(
                                        snap.user?.image ?? 'assets/vector/logo.jpg',
                                        fit: BoxFit.cover,
                                        width: 50,
                                      ),
                                    ),
                                  ),
                                ),
                                Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Text(
                                      snap.user?.name ?? "",
                                      style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
                                    ),
                                    Padding(
                                      padding: EdgeInsets.only(top: 5, bottom: 5),
                                      child: Text(S.of(context).purchasedFrom + " " + (snap.partner?.title ?? ""),
                                          style: TextStyle(
                                              fontSize: 12, fontWeight: FontWeight.w500, color: Colors.black45)),
                                    ),
                                    Text(
                                        snap.amount.toString() +
                                            " AZN (" +
                                            (snap.partner?.referrerCommission.toString() ?? "") +
                                            S.of(context).froamDeal,
                                        style: TextStyle(
                                            fontSize: 12, fontWeight: FontWeight.w500, color: Colors.black45)),
                                  ],
                                ),
                                Spacer(),
                                Container(
                                  padding: EdgeInsets.all(15),
                                  child: Column(
                                    crossAxisAlignment: CrossAxisAlignment.end,
                                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                    children: [
                                      Row(
                                        children: [
                                          Text(
                                            snap.profit.toString(),
                                            style: TextStyle(
                                              fontSize: 17,
                                              fontWeight: FontWeight.w600,
                                            ),
                                          ),
                                          Padding(
                                            padding: const EdgeInsets.only(left: 2, top: 1),
                                            child: Image.asset(
                                              "assets/vector/azn.png",
                                              width: 15,
                                            ),
                                          ),
                                        ],
                                      ),
                                      Text(dateFormat.format(snap.createdAt),
                                          style: TextStyle(fontSize: 11, fontWeight: FontWeight.w400)),
                                    ],
                                  ),
                                )
                              ],
                            ),
                          );
                        },
                      ),
                    );
                  }
                  return Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        S.of(context).gainsFromReference,
                        style: TextStyle(fontSize: 20, fontWeight: FontWeight.w500),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(top: 20, bottom: 20),
                        child: Text(S.of(context).hereYouCanSeeHowMuchCashbackYouReceivedFrom),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(top: 10, bottom: 20),
                        child: Text(
                          S.of(context).example,
                          style: TextStyle(fontSize: 20, fontWeight: FontWeight.w500),
                        ),
                      ),
                      Container(
                        padding: EdgeInsets.all(10),
                        width: double.infinity,
                        decoration:
                        BoxDecoration(color: Colors.grey.withOpacity(0.2), borderRadius: BorderRadius.circular(10)),
                        child: Row(
                          children: [
                            Image.asset(
                              "assets/vector/bgwolet.png",
                              height: 70,
                            ),
                            SizedBox(
                              width: 10,
                            ),
                            Column(
                              mainAxisAlignment: MainAxisAlignment.start,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  S.of(context).referalCashback55Azn,
                                  style: TextStyle(
                                    color: AppColors.appColor,
                                    fontWeight: FontWeight.w500,
                                    fontSize: 14,
                                  ),
                                ),
                                SizedBox(
                                  height: 2,
                                ),
                                Text(
                                  S.of(context).networkPurchases,
                                  style: TextStyle(fontWeight: FontWeight.w500, fontSize: 12),
                                ),
                                SizedBox(
                                  height: 5,
                                ),
                                Text(
                                  S.of(context).AznFromDeal,
                                  style: TextStyle(fontWeight: FontWeight.w400, fontSize: 12, color: Colors.black87),
                                ),
                              ],
                            )
                          ],
                        ),
                      ),
                    ],
                  );
                }
                return SizedBox();
              },
            )
          ],
        ),
      ),
    );
  }

  @override
  RewardsBloc provideBloc() {
    return RewardsBloc();
  }
}
