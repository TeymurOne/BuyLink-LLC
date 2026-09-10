import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../../../../../data/network/response/transaction_partnr.dart';
import '../../../../../../generated/l10n.dart';
import '../../partner_scaner/scaner/widget/scaner_true.dart';

class TransactionItemClosed extends StatelessWidget {
  final TransactionPartner transaction;
  const TransactionItemClosed({super.key, required this.transaction});

  @override
  Widget build(BuildContext context) {
    final response = transaction;
    return Container(
      width: double.infinity,
      height: 60,
      child:    Row(
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
    );
  }
}
