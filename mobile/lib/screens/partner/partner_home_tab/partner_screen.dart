import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/screens/partner/partner_home_tab/partner_bottom_bar.dart';
import 'package:buylink_flutter/screens/partner/partner_home_tab/tabs/partner_scaner/partner_scaner.dart';
import 'package:buylink_flutter/screens/partner/partner_home_tab/tabs/profile/partner_profil_screen.dart';
import 'package:buylink_flutter/screens/partner/partner_home_tab/tabs/transaction_partner/transaction_partner_screen.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../home/tabs/home_tab/partner/partner_bloc.dart';
import '../../home/tabs/walet/wallets_screen.dart';

final GlobalKey<NavigatorState> navigatorKey = GlobalKey();

class PartnerHomeScreen extends BaseScreen {
  final int? initialTabIndex;

  const PartnerHomeScreen({super.key, this.initialTabIndex});

  @override
  _PartnerHomeScreenState createState() => _PartnerHomeScreenState();
}

class _PartnerHomeScreenState extends BaseState<PartnerHomeScreen,PartnerBloc> {
  final GlobalKey<ScaffoldState> scaffoldKey = GlobalKey<ScaffoldState>();
  final ValueNotifier<int> notifier = ValueNotifier(0);
  final ValueNotifier<bool> optionsNotifier = ValueNotifier(false);
  late int _selectedIndex = widget.initialTabIndex ?? 0;

  @override
  void dispose() {
    optionsNotifier.dispose();
    notifier.dispose();
    super.dispose();
  }



  @override
  Widget body() {
    return Stack(
      children: [
        _Tabs(
          selectedIndex: _selectedIndex,
        ),
        Positioned.fill(
          child: Align(
            alignment: Alignment.bottomCenter,
            child: PartnerBottomBar(
              onChanged: (index) async {
                setState(() {
                  _selectedIndex = index;
                });
              },
              selectedIndex: _selectedIndex,
            ),
          ),
        ),
      ],
    );
  }

  @override
  PartnerBloc provideBloc() {
    return PartnerBloc();
  }
}

class _Tabs extends StatefulWidget {
  final int selectedIndex;

  _Tabs({Key? key, required this.selectedIndex}) : super(key: key);

  @override
  __TabsState createState() => __TabsState();
}

class __TabsState extends State<_Tabs> {
  late List<Widget> _tabs;

  @override
  void initState() {
    super.initState();
    _tabs = <Widget>[
      PartnerHome(),
      TransactionPartnerScreen(),
      PartnerProfilScreen(),
    ];
  }

  @override
  Widget build(BuildContext context) {
    return IndexedStack(
      index: widget.selectedIndex,
      children: _tabs,
    );
  }
}
