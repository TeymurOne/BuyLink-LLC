import 'package:buylink_flutter/screens/home/tabs/home_tab/search/widget/search_widget.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../../../../../../data/network/response/network_user.dart';
import '../../../../../../data/network/response/partner.dart';
import '../../../../../../generated/l10n.dart';
import '../../../../../../presentation/bloc/base_screen.dart';
import '../../../../../../presentation/bloc/utils.dart';
import '../../../../../../presentation/resourses/app_colors.dart';
import '../../partner/partner_screen.dart';
import '../bonus_tab_tow_bloc.dart';

class BonusTabTwo extends BaseScreen {
  @override
  _BonusTabTwoState createState() => _BonusTabTwoState();
}

class _BonusTabTwoState extends BaseState<BonusTabTwo, BonusTabTowBloc> {
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
        StreamBuilder<List<Partner>>(
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
                                  builder: (BuildContext context) => PartnerScreen(
                                    partnerId: snapshot.requireData[index].id
                                        .toString(),
                                  ))),
                      child: Container(
                        height: 80,
                        child: Container(
                            margin: EdgeInsets.only(left: 16, right: 16, bottom: 9),
                            width: 268,
                            height: 92,
                            decoration: BoxDecoration(
                                color: Colors.white, borderRadius: BorderRadius.circular(15)),
                            child: Row(
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: [
                                Container(
                                    width: 54,
                                    height: 54,
                                    padding: EdgeInsets.all(8),
                                    margin: EdgeInsets.all(8),
                                    decoration: BoxDecoration(
                                        color: AppColors.appColor,
                                        borderRadius: BorderRadius.circular(15)),
                                    child: Image.network(
                                      snapshot.requireData[index].image ??
                                          "http://melarafon-001-site1.dtempurl.com/api/File?cyrptedPhoto=UORQWEfWHVACb3j%2b%2blKbcQ%3d%3d",
                                      width: 54,
                                      height: 54,
                                      fit: BoxFit.cover,
                                    )),
                                Column(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Container(
                                        width: 150,
                                        child: Text(
                                          snapshot.requireData[index].title ?? "",
                                          style:
                                          TextStyle(fontSize: 16, fontWeight: FontWeight.w500),
                                        )),

                                  ],
                                ),
                                Spacer(),
                                Padding(
                                  padding: const EdgeInsets.only(right: 15),
                                  child: Text(
                                   S.of(context).discount + " " + snapshot.requireData[index].referrerCommission.toString() + "%" ?? "",
                                    style:
                                    TextStyle(fontSize: 16, fontWeight: FontWeight.w500),
                                  ),
                                ),
                              ],
                            )),
                      ),
                    ),
                    childCount: snapshot.requireData.length,
                  ),
                );
              }
            }
            return SliverToBoxAdapter(
              child: Center(
                child: Text(S.of(context).notUser),
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
  BonusTabTowBloc provideBloc() {
    return BonusTabTowBloc();
  }

  @override
  bool get wantKeepAlive => true;




}
