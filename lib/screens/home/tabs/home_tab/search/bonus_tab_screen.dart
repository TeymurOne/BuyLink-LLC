import 'package:buylink_flutter/screens/home/tabs/home_tab/search/widget/bonus_tab_one.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/search/widget/bonus_tab_two.dart';
import 'package:flutter/material.dart';

import '../../../../../generated/l10n.dart';
import '../../../../../presentation/resourses/app_colors.dart';


class HomeSearchScreen extends StatefulWidget {
  const HomeSearchScreen({Key? key}) : super(key: key);

  @override
  _HomeSearchScreenState createState() => _HomeSearchScreenState();
}

class _HomeSearchScreenState extends State<HomeSearchScreen> with SingleTickerProviderStateMixin{
  late final controller = TabController(length: 2, vsync: this);

  @override
  Widget build(BuildContext context) {
    return   Scaffold(
      body: SafeArea(
        child: DefaultTabController(
            length: 2,
            child: Column(
              children: [
                SizedBox(
                  height: 20,
                ),
                TabBar(
                    labelColor: Colors.white,
                    controller: controller,
                    dividerColor: Colors.white,
                    unselectedLabelColor: AppColors.appColor,
                    indicatorSize: TabBarIndicatorSize.label,
                    indicator: BoxDecoration(
                        borderRadius: BorderRadius.circular(15), color: AppColors.appColor),
                    tabs: [
                      Tab(
                        child: Container(
                          decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(15),
                              border: Border.all(color: AppColors.appColor, width: 1)),
                          child: Align(
                            alignment: Alignment.center,
                            child: Text(S.of(context).network),
                          ),
                        ),
                      ),
                      Tab(
                        child: Container(
                          decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(15),
                              border: Border.all(color: AppColors.appColor, width: 1)),
                          child: Align(
                            alignment: Alignment.center,
                            child: Text(S.of(context).partner),
                          ),
                        ),
                      ),
                    ]),
                Expanded(
                  child: TabBarView(
                    controller: controller,
                    children: [
                      BonusTabOne(),
                      BonusTabTwo(),
                    ],
                  ),
                ),
              ],
            )),
      ),
    );
  }
}
