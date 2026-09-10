import 'dart:ffi';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../../../../../data/network/response/transaction_partnr.dart';
import '../../../../../../generated/l10n.dart';
import '../../../../../../presentation/resourses/app_colors.dart';
import '../../partner_scaner/scaner/widget/scaner_true.dart';

class TransactionItemOpen extends StatelessWidget {
  final TransactionPartner transaction;

  const TransactionItemOpen({super.key, required this.transaction});

  @override
  Widget build(BuildContext context) {
    final response = transaction;
    return Container(
      width: double.infinity,
      child: Column(
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              Container(
                width: 60,
                height: 60,
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(50),
                  child: AspectRatio(
                    aspectRatio: 0.89,
                    child: Image.network(
                      response.user.image ??
                          "https://yt3.ggpht.com/f5tZFBCVg3AzgtXQY3Y-1YxgH7TZPgKfAn6E7TgeAkiuxZqkRQeZsCKlr7iGM5BI48VE_Vz3Ww=s88-c-k-c0x00ffffff-no-rj",
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(left: 10),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      response.user.name,
                      style: TextStyle(
                        fontWeight: FontWeight.w700,
                        fontSize: 14,
                      ),
                    ),
                    Text(S.of(context).fromManzarMehdiyeva,
                        style: TextStyle(
                          fontWeight: FontWeight.w400,
                          fontSize: 11,
                          color: Colors.grey,
                        )),
                    Text(formatter.format(response.createdAt),
                        style: TextStyle(
                          fontWeight: FontWeight.w400,
                          fontSize: 10,
                          color: Colors.grey,
                        )),
                  ],
                ),
              ),
              Spacer(),
              Column(
                crossAxisAlignment: CrossAxisAlignment.end,
                mainAxisAlignment: MainAxisAlignment.end,
                children: [
                  Text(response.discountedAmount.toString() + " ₼",
                      style: TextStyle(
                        fontWeight: FontWeight.w500,
                        fontSize: 16,
                      )),
                  SizedBox(
                    height: 13,
                  ),
                  Row(
                    children: [Text(S.of(context).seeLess), Icon(Icons.keyboard_arrow_up_outlined)],
                  ),
                ],
              )
            ],
          ),
          Padding(
            padding: const EdgeInsets.only(left: 5, right: 5),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                SizedBox(
                  height: 20,
                ),
                Container(
                  padding: EdgeInsets.only(),
                  width: double.infinity,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                  ),
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
                                  borderRadius: BorderRadius.circular(8), color: Colors.grey.withOpacity(0.3)),
                              child: Text(formatter.format(response.createdAt))),
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
                                    borderRadius: BorderRadius.circular(8), color: Colors.grey.withOpacity(0.3)),
                                child: Text("${response.amount} AZN")),
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
                                    borderRadius: BorderRadius.circular(8), color: Colors.grey.withOpacity(0.3)),
                                child: Text("${response.discountedPercent} %")),
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
                                decoration:
                                    BoxDecoration(borderRadius: BorderRadius.circular(8), color: AppColors.appColor),
                                child: Text(
                                  "${response.discountedAmount} AZN",
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
        ],
      ),
    );
  }
}
