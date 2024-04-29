import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

import '../data/network/response/most_recommended.dart';
import '../screens/home/tabs/home_tab/partner/partner_screen.dart';
import 'chip.dart';

class ShopPromo extends StatelessWidget {
  final MostRecommended recomended;
  final String image;

  const ShopPromo({super.key, required this.recomended, required this.image});

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () => Navigator.push(context,
          MaterialPageRoute(builder: (BuildContext context) {
        return PartnerScreen(
          partnerId: recomended.id.toString(),
        );
      })),
      child: Container(
        margin: EdgeInsets.only(right: 10),
        width: 260,
        decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(8),
            boxShadow: [
              BoxShadow(blurRadius: 10, spreadRadius: 1, color: Colors.black12)
            ]),
        clipBehavior: Clip.antiAlias,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              height: 127,
              width: 260,
              child: Image.network(
                image,
                fit: BoxFit.cover,
              ),
            ),
            Padding(
              padding:
                  const EdgeInsets.symmetric(horizontal: 12.0, vertical: 6),
              child: Row(
                children: [
                  Container(
                    width: MediaQuery.of(context).size.width * 0.35,
                    child: Text(
                      recomended.title,
                      style: TextStyle(fontWeight: FontWeight.w600),
                    ),
                  ),
                  Spacer(),
                  Text(
                    '${recomended.userDiscount}% Discount',
                    // '${recomended.userDiscount?.toStringAsFixed(0)}% Discount',
                    style: Theme.of(context).textTheme.labelMedium,
                  ),
                ],
              ),
            ),
            Padding(
              padding:
                  const EdgeInsets.symmetric(horizontal: 12.0, vertical: 6),
              child: Row(
                children: [
                  CustomChip(
                      child: Container(
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          recomended.rating.toString(),
                          style: TextStyle(fontSize: 12, color: Colors.white),
                        ),
                        Icon(
                          Icons.star_rounded,
                          size: 12,
                          color: Colors.white,
                        )
                      ],
                    ),
                  )),
                  Spacer(),
                  Text(
                    '${recomended.referrerCommission}% Ref. Cashback',
                    style: Theme.of(context).textTheme.labelMedium,
                  )
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
