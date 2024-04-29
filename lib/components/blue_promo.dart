import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:flutter_svg/svg.dart';

import '../utils/util.dart';

class BluePromo extends StatelessWidget {
  final String title;
  final String desc;
  final String image;
  const BluePromo({super.key, required this.title, required this.desc, required this.image});

  @override
  Widget build(BuildContext context) {
    return Container(
        width: MediaQuery.of(context).size.width * 0.8,
        padding: EdgeInsets.symmetric(vertical: 30, horizontal: 20),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: CustomColors.blue,
        ),
        child: Row(
          children: [
            Expanded(
                child: Column(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: TextStyle(color: Colors.white, fontSize: 12),
                ),
                Text(
                  desc,
                  style: TextStyle(color: Colors.white, fontSize: 16),
                ),
                Row(
                  children: [
                    Text(
                      'Recommend it',
                      style: TextStyle(color: Colors.white, fontSize: 12),
                    ),
                    Icon(
                      Icons.keyboard_arrow_right_rounded,
                      color: Colors.white,
                    )
                  ],
                ),
              ],
            )),
            AspectRatio(
              aspectRatio: 1,
              child: Container(
                decoration:
                    BoxDecoration(borderRadius: BorderRadius.circular(1000)),
                clipBehavior: Clip.antiAlias,
                child: Image.network(
                  image,
                  fit: BoxFit.cover,
                ),
              ),
            )
          ],
        ));
  }
}
