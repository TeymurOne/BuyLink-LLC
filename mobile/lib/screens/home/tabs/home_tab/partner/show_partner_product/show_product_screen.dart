import 'package:buylink_flutter/screens/home/tabs/home_tab/partner/show_partner_product/show_more_bloc.dart';
import 'package:flutter/material.dart';
import 'package:rxdart/rxdart.dart';
import '../../../../../../data/network/response/partner_details_response.dart';
import '../../../../../../data/network/response/products.dart';
import '../../../../../../generated/l10n.dart';
import '../../../../../../presentation/bloc/base_screen.dart';
import '../../../../../../presentation/bloc/utils.dart';
import '../../../../../../utils/util.dart';
import '../../../profil_tab/user_details_edit/widget/category_navigator_pop.dart';
import '../product_details/product_details_screen.dart';

class ShowProductScreen extends BaseScreen {
  final String partnerId;
  final String categoryId;
  final String categoryName;
  final PartnerDetailsResponse partner;

  const ShowProductScreen({
    Key? key,
    required this.partnerId,
    required this.categoryId,
    required this.partner,
    required this.categoryName,
  }) : super(key: key);

  @override
  State<ShowProductScreen> createState() => _ShowProductScreenState();
}

class _ShowProductScreenState extends BaseState<ShowProductScreen, ShowMoreBloc> {
  final ScrollController _scrollController = ScrollController();
  final PublishSubject<void> onPacketsAdded = PublishSubject();

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
  }

  @override
  Widget body() {
    return SafeArea(
      child: RefreshIndicator(
          child: CustomScrollView(
            controller: _scrollController,
            slivers: [
              SliverToBoxAdapter(
                child: Container(
                  margin: const EdgeInsets.only(
                    top: 20,
                    bottom: 20,
                    left: 20,
                    right: 20,
                  ),
                  child: CategoryNavigatorPop(
                    title: widget.categoryName,
                  ),
                ),
              ),
              StreamBuilder<List<Products>>(

                  stream: bloc.paginableList,
                  builder: (context, snapshot) {
                    if (snapshot.hasData) {
                      if (snapshot.requireData.isNotEmpty) {
                        return SliverPadding(
                          sliver: SliverGrid(
                            delegate: SliverChildBuilderDelegate(
                              (_, index) {
                                double number = snapshot.requireData[index].price ?? 0.0;
                                String parsedNumber = number.toString();
                                if (parsedNumber.endsWith('.0')) {
                                  parsedNumber = parsedNumber.replaceAll('.0', '');
                                }
                                return Padding(
                                padding: const EdgeInsets.only(right: 10),
                                child: InkWell(
                                  onTap: () => Navigator.push(
                                    context,
                                    MaterialPageRoute(
                                      builder: (BuildContext context) {
                                        return ProductDetailsScreen(
                                          products: snapshot.requireData[index],
                                          partnerId: widget.partnerId,
                                          partner: widget.partner,
                                        );
                                      },
                                    ),
                                  ),
                                  child: SizedBox(
                                    width: 180,
                                    child: Column(
                                      mainAxisSize: MainAxisSize.min,
                                      crossAxisAlignment: CrossAxisAlignment.stretch,
                                      children: [
                                        // Stack(
                                        //   children: [
                                        //     // ClipRRect(
                                        //     //   borderRadius: BorderRadius.circular(8),
                                        //     //   child: AspectRatio(
                                        //     //     aspectRatio: 0.89,
                                        //     //     child: Image.asset(
                                        //     //       catalogue[index].image,
                                        //     //       fit: BoxFit.cover,
                                        //     //     ),
                                        //     //   ),
                                        //     // ),
                                        //     Positioned(
                                        //       top: 5,
                                        //       right: 5,
                                        //       child: CustomChip(
                                        //         child: Text(
                                        //           catalogue[index].totalDiscount.toString(),
                                        //           style: TextStyle(color: Colors.white),
                                        //         ),
                                        //       ),
                                        //     )
                                        //   ],
                                        // ),
                                        ClipRRect(
                                          borderRadius: BorderRadius.circular(8),
                                          child: AspectRatio(
                                            aspectRatio: 0.89,
                                            child: Image.network(
                                              snapshot.requireData[index].image ?? "",
                                              fit: BoxFit.cover,
                                            ),
                                          ),
                                        ),
                                        Padding(
                                          padding: const EdgeInsets.all(8.0),
                                          child: Column(

                                            crossAxisAlignment: CrossAxisAlignment.stretch,
                                            children: [
                                              Row(
                                                children: [
                                                  Text(
                                                    snapshot.requireData[index].title ?? "",
                                                    style: TextStyle(fontSize: 14, fontWeight: FontWeight.w400),
                                                  ),
                                                ],
                                              ),
                                              Text(
                                                '${parsedNumber} AZN',
                                                style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600),
                                              )
                                            ],
                                          ),
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                              );
                              },
                              childCount: snapshot.requireData.length,
                            ),
                            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                                crossAxisCount: 2, crossAxisSpacing: 10, mainAxisSpacing: 10, mainAxisExtent: 250),
                          ),
                          padding: EdgeInsets.only(top: 15, left: 20, right: 20),
                        );
                      }
                      return SliverToBoxAdapter(
                        child: Center(
                          child: Column(
                            children: [
                              Image.asset(
                                "asset/not_product.png",
                              ),
                              Padding(
                                padding: EdgeInsets.symmetric(vertical: 15),
                                child: Text(
                                  S.of(context).sofcontextmhsultaplmad,
                                  style: TextStyle(fontWeight: FontWeight.w600, fontSize: 25),
                                ),
                              ),
                            ],
                          ),
                        ),
                      );
                    }
                    return SliverToBoxAdapter();
                  })
            ],
          ),
          onRefresh: () => bloc.load(refresh: true)),
    );
  }

  @override
  ShowMoreBloc provideBloc() {
    return ShowMoreBloc(onPacketsAdded, widget.partnerId, widget.categoryId);
  }
}
