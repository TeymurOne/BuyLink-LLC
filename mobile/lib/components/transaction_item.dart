import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:flutter_svg/svg.dart';

import '../utils/util.dart';

class TransactionItem extends StatefulWidget {
  const TransactionItem({super.key});

  @override
  State<TransactionItem> createState() => _TransactionItemState();
}

class _TransactionItemState extends State<TransactionItem> {
  bool isExpanded = false;
  @override
  Widget build(BuildContext context) {
    return AnimatedContainer(
      duration: Duration(milliseconds: 200),
      padding: EdgeInsets.all(12),
      // height: isE,
      decoration: BoxDecoration(
          color: CustomColors.lightGray3,
          borderRadius: BorderRadius.circular(8)),
      child: Column(
        children: [
          Row(
            children: [
              SvgPicture.asset('assets/vector/dollar.svg'),
              SizedBox(
                width: 20,
              ),
              Expanded(
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('24-Dec-2022'),
                    SizedBox(
                      height: 10,
                    ),
                    Text(
                      '\$50',
                      style:
                          TextStyle(fontWeight: FontWeight.w600, fontSize: 18),
                    ),
                  ],
                ),
              ),
              TextButton(
                  style: ButtonStyle(
                      foregroundColor: MaterialStatePropertyAll<Color>(
                          CustomColors.black.withOpacity(0.7))),
                  onPressed: () {
                    setState(() {
                      isExpanded = !isExpanded;
                    });
                  },
                  child: Row(
                    children: [
                      Text(isExpanded ? 'See less' : 'See details'),
                      Icon(isExpanded
                          ? Icons.keyboard_arrow_up_rounded
                          : Icons.keyboard_arrow_down_rounded)
                    ],
                  ))
            ],
          ),
        ]..addAll(isExpanded
            ? [
                getDetailsRow('Bank Account Number', 'TMh456773YH'),
                getDetailsRow('Transfer date', '10-Dec-2022'),
                getDetailsRow('Amount', '\$89.890'),
              ]
            : []),
      ),
    );
  }

  Widget getDetailsRow(String left, String right) {
    return Padding(
      padding: const EdgeInsets.all(5.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(left),
          DecoratedBox(
            decoration: BoxDecoration(
                color: CustomColors.lightGray2,
                borderRadius: BorderRadius.circular(100)),
            child: Padding(
              padding: EdgeInsets.symmetric(vertical: 5, horizontal: 12),
              child: Text(right),
            ),
          )
        ],
      ),
    );
  }
}
