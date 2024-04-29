import 'package:buylink_flutter/screens/home/tabs/home_tab/search/widget/search_widget.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../../../../../data/network/response/network.dart';
import '../../../../../../data/network/response/network_user.dart';
import '../../../../../../generated/l10n.dart';
import '../../../../../../presentation/bloc/base_screen.dart';
import '../../../../../../presentation/bloc/utils.dart';
import '../../../../../../presentation/resourses/app_colors.dart';
import '../../../profil_tab/network/user_details/user_details_screen.dart';
import '../bonus_tab_bloc.dart';

class BonusTabOne extends BaseScreen {
  @override
  State<BonusTabOne> createState() => _BonusTabOneState();
}

class _BonusTabOneState extends BaseState<BonusTabOne,BonusTabBloc> {

  final ScrollController _scrollController = ScrollController();

  final TextEditingController _searchController = TextEditingController();

  @override
  void initState() {
    super.initState();
    bloc.load();
    _scrollController.addListener(() {
      hideKeyboardOnScroll(context, _scrollController);
      if (_scrollController.position.extentAfter <= MediaQuery.of(context).size.height) {
        bloc.load();
      }
    });
    _searchController.addListener(() {
      bloc.onSearch(_searchController.text.trim());
    });
  }

  @override
  Widget body() {
    return CustomScrollView(
      controller: _scrollController,
      slivers: [
        SliverToBoxAdapter(
          child: SizedBox(
            height: 25,
          ),
        ),
        SliverToBoxAdapter(
            child: SearchWidget(
              searchController: _searchController,
            )),
        StreamBuilder<List<NetworkUser>>(
          stream: bloc.paginableList,
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              if (snapshot.requireData.isNotEmpty) {
                return SliverList(
                    delegate: SliverChildBuilderDelegate(
                          (_, index) => GestureDetector(
                        onTap: () => Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (BuildContext context) => UserDetailsScreen(
                                  user: snapshot.requireData[index],
                                ))),
                        child: Padding(
                          padding: const EdgeInsets.only(left: 25),
                          child: ListTile(
                            leading: AspectRatio(
                              aspectRatio: 1,
                              child: ClipRRect(
                                borderRadius: BorderRadius.circular(100),
                                child: Image.network(
                                  snapshot.requireData[index].image,
                                  fit: BoxFit.cover,
                                ),
                              ),
                            ),
                            contentPadding: EdgeInsets.symmetric(vertical: 12),
                            title: Text(
                              snapshot.requireData[index].name,
                              style: TextStyle(fontWeight: FontWeight.w500),
                            ),
                          ),
                        ),
                      ),
                      childCount: snapshot.requireData.length,
                    ));
              }
            }
            return SliverToBoxAdapter(
              child: Center(
                child: Column(
                  children: [
                    Padding(
                      padding: const EdgeInsets.only(left: 40,right: 40,top: 10),
                      child: Image.asset("assets/raster/referal_not_myn.png"),
                    ),
                    // Padding(
                    //   padding: const EdgeInsets.only(left: 20, right: 20),
                    //   child: Text(
                    //     S.of(context).youHaveNoPostYetStartToShareReferalPosts,
                    //     style: TextStyle(
                    //       fontSize: 20,
                    //       fontWeight: FontWeight.w700,
                    //     ),
                    //   ),
                    // ),

                  ],
                ),
              ),
            );
          },
        ),
        SliverToBoxAdapter(
          child: SizedBox(
            height: 65,
          ),
        ),
      ],
    );
  }


  @override
  BonusTabBloc provideBloc() {
   return BonusTabBloc();
  }

  @override
  bool get wantKeepAlive => true;


}
