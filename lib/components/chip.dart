import 'package:buylink_flutter/presentation/resourses/app_colors.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

import '../utils/util.dart';

class CustomChip extends StatelessWidget {
  Widget child;
  CustomChip({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: AppColors.appColorYello,
        borderRadius: BorderRadius.circular(20),
      ),
      // foregroundDecoration: BoxDecoration(color: Colors.white),
      padding: EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      child: child,
    );
  }
}
