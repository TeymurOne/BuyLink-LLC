import 'package:buylink_flutter/data/network/response/network.dart';
import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/network/network_bloc.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/network/throttler.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/network/user_details/user_details_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/user_details_edit/widget/category_navigator_pop.dart';
import 'package:flutter/material.dart';
import '../../../../../data/network/response/user.dart';
import '../../../../../generated/l10n.dart';
import '../../../../../presentation/bloc/utils.dart';
import '../../../../../presentation/common/input_text.dart';

class NetworkScreen extends BaseScreen {
  @override
  State<NetworkScreen> createState() => _NetworkScreenState();
}

class _NetworkScreenState extends BaseState<NetworkScreen, NetworkBloc> {
  final ScrollController _scrollController = ScrollController();
  final TextEditingController _searchTextController = TextEditingController();
  final Throttler searchThrottler = Throttler();

  @override
  void initState() {
    super.initState();
    _scrollController.addListener(() {
      hideKeyboardOnScroll(context, _scrollController);
      if (_scrollController.position.extentAfter <= MediaQuery.of(context).size.height) {}
    });
    _searchTextController.addListener(
      () {
        searchThrottler.run(() {
          bloc.onSearchChanged(_searchTextController.text.trim());
        });
      },
    );
  }

  @override
  Widget body() {
    return CustomScrollView(
      physics: AlwaysScrollableScrollPhysics(),
      controller: _scrollController,
      slivers: [
         SliverToBoxAdapter(
            child: Padding(
          padding: EdgeInsets.only(top: 50, left: 25),
          child: CategoryNavigatorPop(
            title: S.of(context).network,
          ),
        )),
        SliverToBoxAdapter(
            child: Padding(
          padding: const EdgeInsets.only(left: 20, right: 20),
          child: TextFildd(
            labelText: S.of(context).search,
            controller: _searchTextController,
          ),
        )),
        StreamBuilder<List<Network>>(
          stream: bloc.getMyNetwork,
          builder: (BuildContext context, span) {
            if (span.hasData) {
              if (span.requireData.isNotEmpty) {
                return SliverList(
                    delegate: SliverChildBuilderDelegate(
                  (_, index) => GestureDetector(
                    onTap: () => Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (BuildContext context) => UserDetailsScreen(
                                  user: span.requireData[index].user,
                                ))),
                    child: Padding(
                      padding: const EdgeInsets.only(left: 25),
                      child: ListTile(
                        leading: AspectRatio(
                          aspectRatio: 1,
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(100),
                            child: Image.network(
                              span.requireData[index].user.image,
                              fit: BoxFit.cover,
                            ),
                          ),
                        ),
                        contentPadding: EdgeInsets.symmetric(vertical: 12),
                        title: Text(
                          span.requireData[index].user.name,
                          style: TextStyle(fontWeight: FontWeight.w500),
                        ),
                      ),
                    ),
                  ),
                  childCount: span.requireData.length,
                ));
              }
              return const SliverToBoxAdapter();
            }
            return const SliverToBoxAdapter();
          },
        ),
      ],
    );
  }

  @override
  NetworkBloc provideBloc() {
    return NetworkBloc();
  }
}
