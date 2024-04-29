import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:flutter_svg/svg.dart';

import '../utils/util.dart';

class ActionButtons extends StatelessWidget {
  ActionButtons({super.key, this.selected});
  int? selected;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        InkWell(
          onTap: () {
            Navigator.of(context).pushNamed('/basket');
          },
          child: Container(
            width: 35,
            height: 35,
            padding: EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: CustomColors.blue.withOpacity(selected == 0 ? 1 : 0.1),
              borderRadius: BorderRadius.circular(
                100,
              ),
            ),
            child: SvgPicture.asset(
              'assets/vector/cart.svg',
              color: selected == 0 ? CustomColors.white : CustomColors.blue,
            ),
          ),
        ),
        const SizedBox(
          width: 15,
        ),
        InkWell(
          child: Container(
            width: 35,
            height: 35,
            padding: EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: CustomColors.blue.withOpacity(selected == 1 ? 1 : 0.1),
              borderRadius: BorderRadius.circular(
                100,
              ),
            ),
            child: SvgPicture.asset(
              'assets/vector/search.svg',
              color: selected == 1 ? CustomColors.white : CustomColors.blue,
            ),
          ),
        ),
        const SizedBox(
          width: 15,
        ),
        InkWell(
          onTap: () {
            Navigator.of(context).pushNamed('/chats');
          },
          child: Container(
            width: 35,
            height: 35,
            padding: EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: CustomColors.blue.withOpacity(selected == 2 ? 1 : 0.1),
              borderRadius: BorderRadius.circular(
                100,
              ),
            ),
            child: SvgPicture.asset(
              'assets/vector/chat.svg',
              color: selected == 2 ? CustomColors.white : CustomColors.blue,
            ),
          ),
        ),
      ],
    );
  }
}
