import 'package:flutter/material.dart';

import '../../../../../presentation/resourses/app_colors.dart';

class MenuElement extends StatelessWidget {
  final String image;
  final String title;
  final bool? language;
  final Color color;
  final VoidCallback onTap;

  const MenuElement(
      {super.key,
      required this.image,
      required this.title,
      this.language = false,
      required this.onTap,
      this.color = AppColors.textColor});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      behavior: HitTestBehavior.translucent,
      onTap: onTap,
      child: Padding(
        padding: const EdgeInsets.all(15.0),
        child: Row(
          children: [
            Padding(
              padding: language == false
                  ? EdgeInsets.all(0.0)
                  : EdgeInsets.only(left: 5),
              child: Image.asset(
                image,
                width: language == false ? 30 : 25,
                color: color,
              ),
            ),
            SizedBox(
              width: 15,
            ),
            Text(
              title,
              style: TextStyle(
                  color: color,
                  fontSize: 18,
                  fontWeight: FontWeight.w400),
            ),
            Spacer(),
            Icon(
              Icons.arrow_forward_ios_rounded,
              size: 20,
              color: Colors.grey,
            )
          ],
        ),
      ),
    );
  }
}
