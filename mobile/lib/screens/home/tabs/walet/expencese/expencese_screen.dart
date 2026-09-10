import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/user_details_edit/widget/category_navigator_pop.dart';
import 'package:buylink_flutter/screens/home/tabs/walet/rewards/rewards_bloc.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../../../../data/network/response/transactions_data.dart';
import '../../../../../generated/l10n.dart';
import '../../../../../presentation/resourses/app_colors.dart';
import '../wallets_screen.dart';
import 'expencese_bloc.dart';

class ExpenceseScreen extends BaseScreen {
  const ExpenceseScreen({super.key});

  @override
  State<ExpenceseScreen> createState() => _RewardsState();
}

class _RewardsState extends BaseState<ExpenceseScreen, ExpenceseBloc> {
  @override
  Widget body() {
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.only(bottom: 20),
              child: CategoryNavigatorPop(
                title: S.of(context).expencese,
              ),
            ),
            FutureBuilder<TransactionsData>(
              future: bloc.selfTransactions,
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
                                        snap.partner?.image ?? 'assets/vector/logo.jpg',
                                        fit: BoxFit.fitWidth,
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
                                      snap.partner?.title ?? "",
                                      style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
                                    ),
                                    Padding(
                                      padding: EdgeInsets.only(top: 5, bottom: 5),
                                      child: Text(S.of(context).from + " " + (snap.referer?.username ?? ""),
                                          style: TextStyle(
                                            fontSize: 12,
                                            fontWeight: FontWeight.w400,
                                          )),
                                    ),
                                    Text(dateFormat.format(snap.createdAt),
                                        style: TextStyle(fontSize: 11, fontWeight: FontWeight.w400)),
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
                                            snap.discountedAmount.toString(),
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
                                      Text(snap.discountedPercent.toString() + "% discount",
                                          style: TextStyle(
                                              fontSize: 13, fontWeight: FontWeight.w500, color: Colors.black45)),
                                      Text(snap.amount.toString() + " AZN",
                                          style: TextStyle(
                                              decoration: TextDecoration.lineThrough,
                                              fontSize: 12,
                                              fontWeight: FontWeight.w500,
                                              color: Colors.black45)),
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
                  return Center(
                    child: Column(
                      children: [
                        Padding(
                          padding: const EdgeInsets.only(left: 40, right: 40, top: 10),
                          child: Image.asset("assets/vector/expencive.png"),
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
  ExpenceseBloc provideBloc() {
    return ExpenceseBloc();
  }
}
