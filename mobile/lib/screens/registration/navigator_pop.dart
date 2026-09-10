import 'package:flutter/material.dart';

class NavigatorPop extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return  Row(
      children: [
        GestureDetector(
          onTap: ()=> Navigator.pop(context),
          child: Container(
            width: 40,
            height: 40,

            child: Padding(
              padding: const EdgeInsets.only(left: 8),
              child: Icon(Icons.arrow_back_ios,size: 18,),
            ),
          ),
        ),
      ],
    );
  }
}
