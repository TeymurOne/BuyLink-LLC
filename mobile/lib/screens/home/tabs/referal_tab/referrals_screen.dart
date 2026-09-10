import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:flutter/material.dart';

import '../../../../components/action_buttons.dart';
import '../../../../generated/l10n.dart';
import '../../../../utils/util.dart';
import 'my_referrals/my_referrals_screen.dart';
import 'network_referrals/networkreferrals_screen.dart';

class ReferralsScreen extends BaseScreen {
  const ReferralsScreen({super.key});

  @override
  State<ReferralsScreen> createState() => _ReferralsScreenState();
}

class _ReferralsScreenState extends State<ReferralsScreen> {

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Padding(
              padding: const EdgeInsets.only(top: 16, left: 20, bottom: 15),
              child: Text(
                S.of(context).referrals,
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.w500),
              ),
            ),
            TabBar(
              indicatorColor: CustomColors.blue,
              labelColor: CustomColors.black,
              tabs: [
                Tab(text: S.of(context).networkRecomendation),
                Tab(text: S.of(context).myRecomendation),
              ],
            ),
            Expanded(
              child: TabBarView(
                children: [NetworkReferralsScreen(), MyReferralsScreen()],
              ),
            ),
          ],
        ),
      ),
    );
  }


}
