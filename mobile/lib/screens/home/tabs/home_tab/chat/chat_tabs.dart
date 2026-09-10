import 'package:buylink_flutter/screens/home/tabs/home_tab/search/widget/bonus_tab_one.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/search/widget/bonus_tab_two.dart';
import 'package:flutter/material.dart';

import '../../../../../generated/l10n.dart';
import '../../../../../presentation/resourses/app_colors.dart';
import '../../profil_tab/network/network_screen.dart';
import '../../profil_tab/user_details_edit/widget/category_navigator_pop.dart';
import 'chat_screen.dart';
import 'chat_user_list/chat_user_list_screen.dart';

class ChatTab extends StatefulWidget {
  const ChatTab({Key? key}) : super(key: key);

  @override
  _ChatTabState createState() => _ChatTabState();
}

class _ChatTabState extends State<ChatTab> with SingleTickerProviderStateMixin {
  late final controller = TabController(length: 2, vsync: this);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: DefaultTabController(
          length: 2,
          child: Column(
            children: [

              Padding(
                padding: const EdgeInsets.all(20.0),
                child: CategoryNavigatorPop(title: S.of(context).direct,),
              ),

              Container(
                margin: EdgeInsets.only(left: 20,right: 20),
                padding: EdgeInsets.all(5),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(15),
                  color: Colors.grey.withOpacity(0.3),
                ),
                child: TabBar(
                    labelColor: Colors.white,
                    controller: controller,
                    dividerColor: Colors.grey.withOpacity(0.01),
                    unselectedLabelColor: Colors.black54,
                    indicatorSize: TabBarIndicatorSize.tab,
                    indicator: BoxDecoration(
                        borderRadius: BorderRadius.circular(15),
                        color: AppColors.appColor),
                    tabs: [
                      Tab(
                        child: Container(
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(15),
                          ),
                          child: Align(
                            alignment: Alignment.center,
                            child: Text(S.of(context).chat),
                          ),
                        ),
                      ),
                      Tab(
                        child: Container(
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(15),
                          ),
                          child: Align(
                            alignment: Alignment.center,
                            child: Text(S.of(context).network),
                          ),
                        ),
                      ),
                    ]),
              ),
              Expanded(
                child: TabBarView(
                  controller: controller,
                  children: [
                    ChatPage(),
                    ChatUserListScreen(),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
