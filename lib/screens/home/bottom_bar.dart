import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import '../../presentation/resourses/app_colors.dart';

const double iconWidth = 48;
const double iconHorizontalPadding = 22;

class BottomBar extends StatelessWidget {
  final ValueChanged<int> onChanged;
  final int selectedIndex;

  const BottomBar({super.key, required this.onChanged, required this.selectedIndex});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 20, vertical: 20),
      decoration: BoxDecoration(borderRadius: BorderRadius.circular(40), color: AppColors.tabBarBagraund),
      height: 72,
      child: LayoutBuilder(
        builder: (_, boxConstraints) {
          final itemWidth = ((boxConstraints.maxWidth - iconHorizontalPadding * 2 - iconWidth * 5) / 4) + iconWidth;
          print(boxConstraints.maxWidth);
          return Stack(
            children: [
              AnimatedPositioned(
                top: 12.5,
                left: 22 + selectedIndex * itemWidth,
                duration: const Duration(milliseconds: 500),
                curve: Curves.fastOutSlowIn,
                child: Container(
                  height: 48,
                  width: 48,
                  decoration: BoxDecoration(
                    color: AppColors.appColor,
                    borderRadius: BorderRadius.circular(50),
                  ),
                ),
              ),
              Center(
                child: Padding(
                  padding: EdgeInsets.symmetric(horizontal: iconHorizontalPadding),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      IconButton(
                        padding: EdgeInsets.all(0),
                        onPressed: () {
                          onChanged(0);
                        },
                        icon: SvgPicture.asset(
                          'assets/vector/home_page.svg',
                          color: selectedIndex == 0 ? Colors.white : Colors.black,
                          height: 24,
                        ),
                      ),
                      IconButton(
                        padding: EdgeInsets.all(0),
                        onPressed: () {
                          onChanged(1);
                        },
                        icon: SvgPicture.asset(
                          'assets/vector/users_icon.svg',
                          color: selectedIndex == 1 ? Colors.white : Colors.black,
                          height: 24,
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(bottom: 5),
                        child: IconButton(
                          padding: EdgeInsets.all(0),
                          onPressed: () {
                            onChanged(2);
                          },
                          icon: SvgPicture.asset(
                            'assets/vector/qr_basket.svg',
                            color: selectedIndex == 2 ? Colors.white : Colors.black,
                            height: 30,
                          ),
                        ),
                      ),
                      IconButton(
                        padding: EdgeInsets.all(0),
                        onPressed: () {
                          onChanged(3);
                        },
                        icon: SvgPicture.asset(
                          'assets/vector/payment_icon.svg',
                          color: selectedIndex == 3 ? Colors.white : Colors.black,
                          height: 24,
                        ),
                      ),
                      IconButton(
                        padding: EdgeInsets.all(0),
                        onPressed: () {
                          onChanged(4);
                        },
                        icon: SvgPicture.asset(
                          'assets/vector/profil_icon.svg',
                          color: selectedIndex == 4 ? Colors.white : Colors.black,
                          height: 24,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          );
        },
      ),
    );
  }
}
