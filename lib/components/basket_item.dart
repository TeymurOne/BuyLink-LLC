import 'package:buylink_flutter/components/qr_generators.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:flutter_svg/svg.dart';
import 'package:qr_flutter/qr_flutter.dart';

import '../data/network/response/basket.dart';
import '../screens/home/tabs/home_tab/partner/partner_screen.dart';
import '../screens/home/tabs/profil_tab/network/user_details/user_details_screen.dart';
import '../utils/util.dart';
import 'avatar.dart';

class BasketItem extends StatefulWidget {
  final ValueChanged<String> onQrReflash;

  final Basket basket;

  const BasketItem({super.key, required this.basket, required this.onQrReflash});

  @override
  State<BasketItem> createState() => _BasketItemState();
}

class _BasketItemState extends State<BasketItem> {
  bool isExpanded = false;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(bottom: 25),
      padding: EdgeInsets.only(left: 15, right: 15, top: 12),
      decoration: BoxDecoration(
        color: CustomColors.white,
        borderRadius: BorderRadius.circular(8),
        boxShadow: [BoxShadow(blurRadius: 3, color: CustomColors.black.withOpacity(0.2))],
      ),
      child: Column(
        children: [
          Row(
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      widget.basket.partner.title ?? "",
                      style: TextStyle(fontWeight: FontWeight.w600, fontSize: 17),
                    ),
                    SizedBox(
                      height: 15,
                    ),
                    Text('${widget.basket.partner.userDiscount}% discount'),
                    SizedBox(
                      height: 15,
                    ),
                    GestureDetector(
                      onTap: () => Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (BuildContext context) => UserDetailsScreen(
                            user: widget.basket.referer,
                          ),
                        ),
                      ),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          SizedBox(
                            width: 30,
                            child: Avatar(
                              widget.basket.referer.image,
                              online: false,
                            ),
                          ),
                          SizedBox(
                            width: 10,
                          ),
                          Text(
                            widget.basket.referer.name ?? "",
                            style: TextStyle(fontWeight: FontWeight.w600, fontSize: 15),
                          )
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              Column(
                children: [
                  GestureDetector(
                    onTap: () => Navigator.push(context, MaterialPageRoute(builder: (BuildContext context) {
                      return PartnerScreen(
                        partnerId: widget.basket.partner.id.toString(),
                      );
                    })),
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(8),
                      child: Image.network(
                        widget.basket.partner.image ?? "",
                        fit: BoxFit.cover,
                        width: 80,
                        height: 80,
                      ),
                    ),
                  ),
                  TextButton(
                    style: ButtonStyle(
                      padding: MaterialStatePropertyAll<EdgeInsets>(EdgeInsets.all(3)),
                      foregroundColor: MaterialStatePropertyAll<Color>(
                        CustomColors.black.withOpacity(0.7),
                      ),
                    ),
                    onPressed: () {
                      setState(() {
                        isExpanded = !isExpanded;
                      });
                    },
                    child: Row(
                      children: [
                        Text(isExpanded ? 'Hide QR' : 'Show QR'),
                        Icon(isExpanded ? Icons.keyboard_arrow_up_rounded : Icons.keyboard_arrow_down_rounded)
                      ],
                    ),
                  ),
                ],
              )
            ],
          ),
          isExpanded
              ? Padding(
                  padding: const EdgeInsets.all(5.0),
                  child: QrGeneratord(
                    basket: widget.basket,
                    onReflesh: widget.onQrReflash,
                  ))
              : SizedBox.shrink(),
        ],
      ),
    );
  }
}
