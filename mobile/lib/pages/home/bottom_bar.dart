import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '../../generated/l10n.dart';
import '../../presentation/resourses/app_colors.dart';


class BottomBar extends StatelessWidget {
  final ValueChanged<int> onChanged;
  final int selectedIndex;

  const BottomBar({super.key, required this.onChanged, required this.selectedIndex});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
      decoration:
          BoxDecoration(borderRadius: BorderRadius.circular(100), color: AppColors.tabBarBagraund),
      height: 75,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              IconButton(
                padding: EdgeInsets.all(0),
                onPressed: () {
                  onChanged(0);
                },
                icon: Column(
                  children: [
                    SvgPicture.asset(
                      'asset/home.svg',
                      color: selectedIndex == 0 ? AppColors.appColor : Colors.white,
                      height: 28,
                    ),
                    Text(
                      S.of(context).sas,
                      style: TextStyle(
                          color: selectedIndex == 0 ? AppColors.appColor : Colors.white,
                          fontSize: 11),
                    ),
                  ],
                ),
              ),
            ],
          ),
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              IconButton(
                padding: EdgeInsets.all(0),
                onPressed: () {
                  onChanged(1);
                },
                icon: Column(
                  children: [
                    SvgPicture.asset(
                      'asset/lib.svg',
                      color: selectedIndex == 1 ? AppColors.appColor : Colors.white,
                      height: 28,
                    ),
                    Text(
                      S.of(context).seilmi,
                      style: TextStyle(
                          color: selectedIndex == 1 ? AppColors.appColor : Colors.white,
                          fontSize: 11),
                    ),
                  ],
                ),
              ),
            ],
          ),
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              IconButton(
                padding: EdgeInsets.all(0),
                onPressed: () {
                  onChanged(5);
                },
                icon: Column(
                  children: [
                    SvgPicture.asset(
                      'asset/plus_circle.svg',
                      color: Colors.white,
                      height: 35,
                    ),
                    Text(
                      S.of(context).kabinet,
                      style: TextStyle(color: Colors.white, fontSize: 11),
                    ),
                  ],
                ),
              ),
            ],
          ),
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              IconButton(
                padding: EdgeInsets.all(0),
                onPressed: () {
                  onChanged(2);
                },
                icon: Column(
                  children: [
                    SvgPicture.asset(
                      'asset/user.svg',
                      color: selectedIndex == 2 ? AppColors.appColor : Colors.white,
                      height: 28,
                    ),
                    Text(
                      S.of(context).kabinet,
                      style: TextStyle(
                          color: selectedIndex == 2 ? AppColors.appColor : Colors.white,
                          fontSize: 11),
                    ),
                  ],
                ),
              ),
            ],
          ),
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              IconButton(
                padding: EdgeInsets.all(0),
                onPressed: () {
                  onChanged(3);
                },
                icon: Column(
                  children: [
                    SvgPicture.asset(
                      'asset/setting.svg',
                      color: selectedIndex == 3 ? AppColors.appColor : Colors.white,
                      height: 28,
                    ),
                    Text(
                      S.of(context).dahaOx,
                      style: TextStyle(
                          color: selectedIndex == 3 ? AppColors.appColor : Colors.white,
                          fontSize: 11),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
