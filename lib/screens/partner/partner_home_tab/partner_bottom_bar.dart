import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';



class PartnerBottomBar extends StatelessWidget {
  final ValueChanged<int> onChanged;
  final int selectedIndex;

  const PartnerBottomBar({super.key, required this.onChanged, required this.selectedIndex});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      height: 75,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          IconButton(
            padding: EdgeInsets.all(0),
            onPressed: () {
              onChanged(0);
            },
            icon: SvgPicture.asset(
              'assets/vector/quar_code.svg',
              color: selectedIndex == 0 ? Colors.black : Colors.grey,
              height: 28,
            ),
          ),
          IconButton(
            padding: EdgeInsets.all(0),
            onPressed: () {
              onChanged(1);
            },
            icon: SvgPicture.asset(
              'assets/vector/transactio_ppartner.svg',
              color: selectedIndex == 1 ? Colors.black : Colors.grey,
              height: 28,
            ),
          ),
          IconButton(
            padding: EdgeInsets.all(0),
            onPressed: () {
              onChanged(2);
            },
            icon: SvgPicture.asset(
              'assets/vector/profil_icon.svg',
              color: selectedIndex == 2 ? Colors.black : Colors.grey,
              height: 28,
            ),
          ),

        ],
      ),
    );
  }
}
