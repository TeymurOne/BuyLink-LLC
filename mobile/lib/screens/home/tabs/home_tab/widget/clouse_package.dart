import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:intl/intl.dart';

import '../../../../../data/network/response/all_request_response.dart';
import '../../../../../data/network/response/branches.dart';
import '../../../../../data/network/response/package.dart';
import '../../../../../presentation/resourses/app_colors.dart';

class ClousePackage extends StatelessWidget {
  final Branches package;
  final bool opened;

  const ClousePackage({Key? key, required this.package, this.opened = true})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    final dateFormat = DateFormat('d MMMM, y, hh:mm');

    return Padding(
      padding: const EdgeInsets.only(top: 10, bottom: 10),
      child: Row(
        children: [
          SvgPicture.asset("assets/vector/home_icon.svg"),
          SizedBox(
            width: 10,
          ),
          Text(
            package.address,
            style: TextStyle(
                color: AppColors.textColor,
                fontSize: 20,
                fontWeight: FontWeight.w400),
          ),
          Spacer(),
          SizedBox(
            width: 15,
          ),
          SvgPicture.asset(opened == false
              ? "assets/vector/clousedd.svg"
              : "assets/vector/opens.svg"),
        ],
      ),
    );
    ;
  }
}
