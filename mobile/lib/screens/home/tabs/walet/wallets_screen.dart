import 'package:buylink_flutter/data/network/response/transactions_data.dart';
import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/presentation/resourses/app_colors.dart';
import 'package:buylink_flutter/screens/home/tabs/walet/rewards/rewards_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/walet/wolet_bloc.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter_svg/svg.dart';
import 'package:intl/intl.dart';

import '../../../../components/credit_card.dart';
import '../../../../data/network/response/user.dart';
import '../../../../generated/l10n.dart';
import 'expencese/expencese_screen.dart';

final dateFormat = DateFormat('dd-MM-yyyy');

class WalletsScreen extends BaseScreen {
  const WalletsScreen({super.key});

  @override
  State<WalletsScreen> createState() => _WalletsScreenState();
}

class _WalletsScreenState extends BaseState<WalletsScreen, WletBloc> {
  late double side;

  @override
  Widget body() {
    side = MediaQuery.of(context).size.width * 0.15;
    return SafeArea(
      child: Container(
        padding: const EdgeInsets.only(left: 20, right: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: EdgeInsets.only(top: 16),
              child: Text(
                'Wallet',
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.w500),
              ),
            ),
            SizedBox(
              height: 20,
            ),
            StreamBuilder<User>(
              stream: bloc.userDetails,
              builder: (context, snapshot) {
                if (snapshot.hasData) {
                  return CreditCard(
                    user: snapshot.requireData,
                  );
                }
                return const SizedBox();
              },
            ),
            SizedBox(
              height: 30,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                InkWell(
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (BuildContext context) => RewardsScreen()),
                    );
                  },
                  child: Column(
                    children: [
                      SizedBox(
                        width: side,
                        child: AspectRatio(
                          aspectRatio: 1,
                          child: Container(
                            padding: EdgeInsets.all(15.0),
                            decoration:
                                BoxDecoration(color: Colors.black87, borderRadius: BorderRadius.circular(side / 2)),
                            child: Image.asset(
                              'assets/vector/wolet_list.png',
                            ),
                          ),
                        ),
                      ),
                      SizedBox(
                        height: 10,
                      ),
                      Text("Rewards")
                    ],
                  ),
                ),
                SizedBox(
                  width: 30,
                ),
                InkWell(
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (BuildContext context) => ExpenceseScreen()),
                    );
                  },
                  child: Column(
                    children: [
                      SizedBox(
                          width: side,
                          child: AspectRatio(
                            aspectRatio: 1,
                            child: Container(
                              padding: EdgeInsets.all(15.0),
                              decoration:
                                  BoxDecoration(color: Colors.black87, borderRadius: BorderRadius.circular(side / 2)),
                              child: SvgPicture.asset(
                                'assets/vector/wolett.svg',
                              ),
                            ),
                          )),
                      SizedBox(
                        height: 10,
                      ),
                      Text(S.of(context).expencese)
                    ],
                  ),
                ),
                // InkWell(
                //   onTap: () {
                //     Navigator.of(context).pushNamed('/withdrawal');
                //   },
                //   child: getActionButton('transfere', 'Withraws'),
                // ),
              ],
            ),
            SizedBox(
              height: 20,
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
                                  S.of(context).AznFromDealvfw,
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
  WletBloc provideBloc() {
    return WletBloc();
  }
}
