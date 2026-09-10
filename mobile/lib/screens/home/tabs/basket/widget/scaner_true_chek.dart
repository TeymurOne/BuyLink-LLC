import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/basket/widget/scaner_true_bloc.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../../../../../data/network/request/raiting_request.dart';
import '../../../../../data/network/request/transaction_claim.dart';
import '../../../../../data/network/response/user.dart';
import '../../../../../generated/l10n.dart';
import '../../../../../presentation/resourses/app_colors.dart';
import '../../../../partner/partner_home_tab/tabs/partner_scaner/scaner/widget/scaner_true.dart';
import '../../home_tab/widget/rate_alert.dart';
import '../../home_tab/widget/rate_true.dart';
import '../pay_from_wallet/pay_from_wallet_screen.dart';

class ScanerTrueCheck extends BaseScreen {
  final String id;

  const ScanerTrueCheck( {super.key, required this.id});

  @override
  State<ScanerTrueCheck> createState() => _ScanerTrueCheckState();
}

class _ScanerTrueCheckState extends BaseState<ScanerTrueCheck, ScanerTrueBloc> {
  @override
  Widget body() {
    return StreamBuilder<User>(
      stream: bloc.userDetails,
      builder: (context, user) {
        if (user.hasData) {
          return FutureBuilder<TransactionClaim>(
              future: bloc.refererDetail(widget.id),
              builder: (context, snapshot) {
                if(snapshot.hasData){
                  return ListView(
                    children: [
                      Stack(
                        children: [
                          Center(
                            child: Padding(
                              padding: const EdgeInsets.only(top: 60, bottom: 60),
                              child: Image.asset(
                                "assets/raster/pana.png",
                                height: 200,
                              ),
                            ),
                          ),
                          Positioned(
                              right: 0,
                              child: GestureDetector(
                                onTap: () async {
                                  Navigator.pop(context);
                                  showDialog(
                                    context: context,
                                    builder: (_) {
                                      return RateDialog(
                                        onchanged: (request) async {
                                          bloc.rating(
                                            snapshot.requireData.partner.id.toString(),
                                            request,
                                          ).then((value) => Navigator.pop(context));
                                        },
                                      );
                                    },
                                  );
                                },
                                child: Padding(
                                  padding: const EdgeInsets.all(20.0),
                                  child: Icon(Icons.close),
                                ),
                              ))
                        ],
                      ),
                      Padding(
                        padding: const EdgeInsets.only(left: 20, right: 20),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              S.of(context).codeIsValid,
                              style: TextStyle(fontSize: 24, fontWeight: FontWeight.w500),
                            ),
                            SizedBox(
                              height: 20,
                            ),
                            Text(
                              S.of(context).loremIpsumDolorSitAmetConsecteturMolestieEgetACursus,
                              style: TextStyle(fontSize: 16, fontWeight: FontWeight.w400),
                            ),
                            SizedBox(
                              height: 20,
                            ),
                            Container(
                              padding: EdgeInsets.all(16),
                              width: double.infinity,
                              decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(10), color: Colors.grey.withOpacity(0.2)),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Row(
                                    children: [
                                      Text(S.of(context).date),
                                      Spacer(),
                                      Container(
                                          padding: EdgeInsets.all(5),
                                          decoration: BoxDecoration(
                                              borderRadius: BorderRadius.circular(8),
                                              color: Colors.grey.withOpacity(0.3)),
                                          child: Text(formatter.format(snapshot.requireData.createdAt))),
                                    ],
                                  ),
                                  Padding(
                                    padding: const EdgeInsets.only(top: 15),
                                    child: Row(
                                      children: [
                                        Text(S.of(context).initialPrice),
                                        Spacer(),
                                        Container(
                                            padding: EdgeInsets.all(5),
                                            decoration: BoxDecoration(
                                                borderRadius: BorderRadius.circular(8),
                                                color: Colors.grey.withOpacity(0.3)),
                                            child: Text("${snapshot.requireData.amount} AZN")),
                                      ],
                                    ),
                                  ),
                                  Padding(
                                    padding: const EdgeInsets.only(top: 15),
                                    child: Row(
                                      children: [
                                        Text(S.of(context).discount),
                                        Spacer(),
                                        Container(
                                            padding: EdgeInsets.all(5),
                                            decoration: BoxDecoration(
                                                borderRadius: BorderRadius.circular(8),
                                                color: Colors.grey.withOpacity(0.3)),
                                            child: Text("${snapshot.requireData.discountedPercent} %")),
                                      ],
                                    ),
                                  ),
                                  Padding(
                                    padding: const EdgeInsets.only(top: 15),
                                    child: Row(
                                      children: [
                                        Text(S.of(context).finalPrice),
                                        Spacer(),
                                        Container(
                                            padding: EdgeInsets.all(5),
                                            decoration: BoxDecoration(
                                                borderRadius: BorderRadius.circular(8), color: AppColors.appColor),
                                            child: Text(
                                              "${snapshot.requireData.discountedAmount} AZN",
                                              style: TextStyle(color: Colors.white),
                                            )),
                                      ],
                                    ),
                                  ),
                                ],
                              ),
                            )
                          ],
                        ),
                      ),
                      if ((int.tryParse(user.data?.balance ?? "0") ?? 0) > 1)
                        Padding(
                          padding: const EdgeInsets.only(left: 20, right: 20, top: 40),
                          child: ElevatedButton(
                            style: ElevatedButton.styleFrom(
                                disabledBackgroundColor: AppColors.appColor.withOpacity(0.3),
                                backgroundColor: AppColors.appColor,
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(5.0),
                                ),
                                textStyle: const TextStyle(
                                  fontSize: 18,
                                  fontWeight: FontWeight.bold,
                                )),
                            onPressed: () => Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (BuildContext context) => PayFromWalletScreen(
                                  partnerId:snapshot.requireData.partner.id,
                                  context:context,
                                  id: widget.id,
                                ),
                              ),
                            ),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Container(
                                  height: 50,
                                  child: Center(
                                    child: Text(
                                      S.of(context).payFromWallet,
                                      style: TextStyle(
                                        color: Colors.white,
                                        fontWeight: FontWeight.w600,
                                        fontSize: 18,
                                      ),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        )
                    ],
                  );
                }
                return SizedBox();
              });
        }
        return const SizedBox();
      },
    );
  }

  @override
  ScanerTrueBloc provideBloc() {
    return ScanerTrueBloc();
  }
}
