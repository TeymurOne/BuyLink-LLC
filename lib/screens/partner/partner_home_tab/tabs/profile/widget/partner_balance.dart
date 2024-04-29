import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:flutter_svg/svg.dart';

import '../../../../../../data/network/response/user.dart';
import '../../../../../../generated/l10n.dart';
import '../../../../../../utils/util.dart';

class PartnerBalance extends StatelessWidget {
  final User user;

  const PartnerBalance({super.key, required this.user});

  @override
  Widget build(BuildContext context) {
    return AspectRatio(
      aspectRatio: 1.59,
      child: Stack(children: [
        Positioned.fill(
          child: ClipRRect(
            borderRadius: BorderRadius.circular(12),
            child: CachedNetworkImage(
              imageUrl:
                  'https://images.unsplash.com/photo-1543053976-5fd9336b6de0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=adrien-olichon-wI96vLftzkE-unsplash.jpg&w=640',
              fit: BoxFit.cover,
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(35.0),
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
                      S.of(context).buylinkWallet,
                      style: TextStyle(color: CustomColors.white),
                    ),
                    Text(
                      '\$' + (user.balance ?? "0"),
                      style: TextStyle(
                          color: CustomColors.white, fontSize: 40, fontWeight: FontWeight.bold),
                    ),
                    Text(
                      S.of(context).payablesToAppFromReferalsPurchases,
                      style: TextStyle(color: CustomColors.white),
                    ),
                  ],
                ),
              ),
              Flexible(
                flex: 1,
                child: SvgPicture.asset('assets/vector/bitcoin.svg'),
              ),
            ],
          ),
        )
      ]),
    );
  }
}
