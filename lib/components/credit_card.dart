import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:flutter_svg/svg.dart';

import '../data/network/response/user.dart';
import '../presentation/resourses/app_colors.dart';
import '../utils/util.dart';

class CreditCard extends StatelessWidget {
  final User user;
  const CreditCard({super.key, required this.user});

  @override
  Widget build(BuildContext context) {
    return AspectRatio(
      aspectRatio: 1.59,
      child: Stack(children: [
        Positioned.fill(
          child: ClipRRect(
            borderRadius: BorderRadius.circular(12),
            child: Image.asset('assets/raster/promo/card.jpg'),

    ),
        ),
        Padding(
          padding: const EdgeInsets.all(36.0),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Flexible(
                flex: 2,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      'BUYLINK WALLET',
                      style: TextStyle(color: CustomColors.white),
                    ),
                    Row(
                      children: [
                        Text(
                            (user.balance ?? "0"),
                          style: TextStyle(
                              color: CustomColors.white,
                              fontSize: 40,
                              fontWeight: FontWeight.bold),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(left: 5,top: 5),
                          child: Image.asset(
                            "assets/vector/azn.png",
                            color: Colors.white,
                            width: 30,
                          ),
                        ),
                      ],
                    ),
                    Row(
                      children: [
                        Padding(
                          padding: const EdgeInsets.only(right: 5,top: 3),
                          child: Image.asset(
                            "assets/vector/azn.png",
                            color: Colors.white,
                            width: 15,
                          ),
                        ),
                        Text(
                          '${user.pendingBalance} pending',
                          style: TextStyle(
                            color: CustomColors.white,
                            fontSize: 20,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ],
                    ),
                    Text(
                      '% income from recommendations',
                      style: TextStyle(color: CustomColors.white),
                    ),
                  ],
                ),
              ),

            ],
          ),
        )
      ]),
    );
  }
}
