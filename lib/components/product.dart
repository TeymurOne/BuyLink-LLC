import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

import '../data/network/response/catalogue.dart';
import '../data/network/response/partner_details_response.dart';
import '../data/network/response/products.dart';
import '../screens/home/tabs/home_tab/partner/product_details/product_details_screen.dart';
import '../utils/util.dart';
import 'chip.dart';

class Product extends StatelessWidget {
  final Catalogue? catalogue;
  final String partnerId;
  final PartnerDetailsResponse partner;

  const Product({super.key, required this.catalogue, required this.partner, required this.partnerId,});

  @override
  Widget build(BuildContext context) {

    return ListView.builder(
      itemCount: catalogue?.products.length ?? 0,
      clipBehavior: Clip.none,
      scrollDirection: Axis.horizontal,
      itemBuilder: (BuildContext context, int index) {
        double number = catalogue?.products[index].price ?? 0.0;
        String parsedNumber = number.toString();
        if (parsedNumber.endsWith('.0')) {
          parsedNumber = parsedNumber.replaceAll('.0', '');
        }
        return Padding(
          padding: const EdgeInsets.only(right: 20),
          child: InkWell(
            onTap: () =>
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (BuildContext context) {
                      return ProductDetailsScreen(
                        products: catalogue!.products[index], partnerId: partnerId, partner: partner,);
                    },
                  ),
                ),
            child: SizedBox(
              width: 130,
              // height: 210,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  // Stack(
                  //   children: [
                  //     // ClipRRect(
                  //     //   borderRadius: BorderRadius.circular(8),
                  //     //   child: AspectRatio(
                  //     //     aspectRatio: 0.89,
                  //     //     child: Image.asset(
                  //     //       catalogue[index].image,
                  //     //       fit: BoxFit.cover,
                  //     //     ),
                  //     //   ),
                  //     // ),
                  //     Positioned(
                  //       top: 5,
                  //       right: 5,
                  //       child: CustomChip(
                  //         child: Text(
                  //           catalogue[index].totalDiscount.toString(),
                  //           style: TextStyle(color: Colors.white),
                  //         ),
                  //       ),
                  //     )
                  //   ],
                  // ),
                  Container(
                    width: 130,
                    height: 130,
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(8),
                      child: AspectRatio(
                        aspectRatio: 0.89,
                        child: Image.network(
                          catalogue?.products[index].image ?? "",
                          fit: BoxFit.cover,
                        ),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        Text(
                          catalogue?.products[index].title ?? "",
                          style: TextStyle(fontSize: 14, fontWeight: FontWeight.w400),
                          maxLines: 1,
                        ),
                        Text(
                          '${ parsedNumber } azn',
                          style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600),
                          maxLines: 1,
                        )
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}
