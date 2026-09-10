import 'dart:async';

import 'package:buylink_flutter/screens/home/tabs/basket/basket_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/home.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/network/user_details/user_details_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/profile_tab_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/referal_tab/network_referrals/networkreferrals_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/referal_tab/referrals_screen.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'tabs/walet/wallets_screen.dart';
import 'bottom_bar.dart';

final GlobalKey<NavigatorState> navigatorKey = GlobalKey();

class HomeScreen extends StatefulWidget {
  final int? initialTabIndex;

  const HomeScreen({super.key, this.initialTabIndex});

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final GlobalKey<ScaffoldState> scaffoldKey = GlobalKey<ScaffoldState>();
  final ValueNotifier<int> notifier = ValueNotifier(0);
  final ValueNotifier<bool> optionsNotifier = ValueNotifier(false);
  final ValueNotifier<bool> optionsUser = ValueNotifier(false);
  late int _selectedIndex = widget.initialTabIndex ?? 0;
  bool needToLoadNotifications = false;
  bool needToLoadUserDetails = false;

  @override
  void dispose() {
    optionsNotifier.dispose();
    optionsUser.dispose();
    notifier.dispose();
    super.dispose();
  }

  late final Timer _timer;

  @override
  void initState() {
    super.initState();
    _timer = Timer.periodic(
      Duration(seconds: 1),
      (timer) {
        needToLoadNotifications = false;
        needToLoadUserDetails = false;
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          _Tabs(
            selectedIndex: _selectedIndex,
            needToLoadNotifications: needToLoadNotifications,
            needToLoadUserDetails: needToLoadUserDetails,
          ),
          Positioned.fill(
            child: Align(
              alignment: Alignment.bottomCenter,
              child: BottomBar(
                onChanged: (index) async {
                  setState(() {
                    _selectedIndex = index;
                  });
                  if (index == 1) {
                    needToLoadNotifications = true;
                  }
                  if (index == 4) {
                    needToLoadUserDetails = true;
                  }
                },
                selectedIndex: _selectedIndex,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _Tabs extends StatefulWidget {
  final int selectedIndex;
  final bool needToLoadNotifications;
  final bool needToLoadUserDetails;

  _Tabs(
      {Key? key,
      required this.selectedIndex,
      required this.needToLoadNotifications,
      required this.needToLoadUserDetails})
      : super(key: key);

  @override
  __TabsState createState() => __TabsState();
}

class __TabsState extends State<_Tabs> {
  late List<Widget> _tabs;

  @override
  void initState() {
    super.initState();
    _tabs = <Widget>[
      HomePage(),
      // ReferralsScreen(),
      widget.needToLoadNotifications ? NetworkReferralsScreen() : SizedBox(),
      BasketScreen(),
      WalletsScreen(),
      // ProfileScreen()
      widget.needToLoadUserDetails ?       ProfileTabScreen() : SizedBox(),


    ];
  }

  @override
  Widget build(BuildContext context) {
    return IndexedStack(
      index: widget.selectedIndex,
      children: _tabs,
    );
  }

  @override
  void didUpdateWidget(covariant _Tabs oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.needToLoadNotifications != oldWidget.needToLoadNotifications) {
      if (widget.needToLoadNotifications) {
        _tabs[1] = NetworkReferralsScreen();
      } else {
        _tabs[1] = SizedBox();
      }
    };
    if (widget.needToLoadUserDetails != oldWidget.needToLoadUserDetails) {
      if (widget.needToLoadUserDetails) {
        _tabs[4] = ProfileTabScreen();
      } else {
        _tabs[4] = SizedBox();
      }
    };
  }
}
