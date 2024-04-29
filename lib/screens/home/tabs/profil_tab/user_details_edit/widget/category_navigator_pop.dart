import 'package:flutter/material.dart';

class CategoryNavigatorPop extends StatelessWidget {
  final String? title;

  const CategoryNavigatorPop({super.key, this.title});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Container(
          child: GestureDetector(
            behavior: HitTestBehavior.translucent,
            onTap: () => Navigator.pop(context),
            child: Container(
              width: 35,
              height: 35,
              child: const Padding(
                padding: EdgeInsets.only(left: 8),
                child: Icon(
                  Icons.arrow_back_ios,
                  size: 22,
                  color: Colors.grey,
                ),
              ),
            ),
          ),
        ),
        Spacer(),
        Text(
          title ?? "",
          style: TextStyle(fontSize: 22, fontWeight: FontWeight.w500),
        ),
        SizedBox(
          width: 40,
        ),
        Spacer(),

      ],
    );
  }
}
