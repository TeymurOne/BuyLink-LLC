import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/partner/product_details/product_details_bloc.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/partner/product_details/widget/recomended_list.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/user_details_edit/widget/category_navigator_pop.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:top_snackbar_flutter/custom_snack_bar.dart';
import 'package:top_snackbar_flutter/top_snack_bar.dart';

import '../../../../../../components/photo_carousel.dart';
import '../../../../../../data/network/request/post_create_request.dart';
import '../../../../../../data/network/request/send_recomended.dart';
import '../../../../../../data/network/response/network.dart';
import '../../../../../../data/network/response/partner_details_response.dart';
import '../../../../../../data/network/response/products.dart';
import '../../../../../../generated/l10n.dart';
import '../../../../../../presentation/resourses/app_colors.dart';
import '../../../../../../utils/util.dart';
import '../../../../home_screen.dart';

class ProductDetailsScreen extends BaseScreen {
  final Products products;
  final PartnerDetailsResponse partner;

  final String partnerId;

  const ProductDetailsScreen({super.key, required this.partnerId, required this.partner, required this.products});

  @override
  State<ProductDetailsScreen> createState() => _ProductDetailsScreenState();
}

class _ProductDetailsScreenState extends BaseState<ProductDetailsScreen, ProductDetailsBloc> {
  @override
  Widget body() {
    double number = widget.products.price;
    String parsedNumber = number.toString();
    if (parsedNumber.endsWith('.0')) {
      parsedNumber = parsedNumber.replaceAll('.0', '');
    }
    return SafeArea(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Padding(
            padding: const EdgeInsets.all(10.0),
            child: CategoryNavigatorPop(),
          ),
          Expanded(
            child: ListView(
              padding: EdgeInsets.symmetric(horizontal: 20),
              children: [
                AspectRatio(
                    aspectRatio: 1.2,
                    child: PhotoCarousel(
                      image: widget.products.image,
                    )),
                SizedBox(
                  height: 10,
                ),
                Text(
                  widget.products.title,
                  style: TextStyle(fontWeight: FontWeight.w600, fontSize: 22),
                ),

                // RecommendationsBrief(),
                SizedBox(
                  height: 20,
                ),
                Row(
                  children: [
                    Text(
                      "${parsedNumber} AZN",
                      style: TextStyle(fontWeight: FontWeight.w600, fontSize: 18),
                    ),
                    SizedBox(
                      width: 20,
                    ),
                    // Text(
                    //   "125  AZN",
                    //   style: TextStyle(
                    //       color: CustomColors.gray,
                    //       fontWeight: FontWeight.w600,
                    //       fontSize: 13,
                    //       decoration: TextDecoration.lineThrough),
                    // ),
                  ],
                ),
                SizedBox(
                  height: 20,
                ),
                Text(
                    widget.products.description ?? (widget.partner.description ?? "null")),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Align(
              alignment: Alignment.bottomCenter,
              child: GestureDetector(
                onTap: () => showCategoriesModal(widget.partner),
                child: Container(
                  width: double.infinity,
                  height: 48,
                  decoration: BoxDecoration(color: AppColors.appColor, borderRadius: BorderRadius.circular(8)),
                  child: Center(
                    child: Text(
                      S.of(context).recommend,
                      style: TextStyle(color: Colors.white, fontWeight: FontWeight.w500),
                    ),
                  ),
                ),
              ),
            ),
          )
        ],
      ),
    );
  }

  @override
  ProductDetailsBloc provideBloc() {
    return ProductDetailsBloc();
  }

  void showCategoriesModal(PartnerDetailsResponse partner) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(20))),
      builder: (context) => RecomendedList(
        getMyNetwork: bloc.getMyNetwork,
        postCreate: (PostCreateRequest value) => bloc.postCreate(value).then((value) {
          Navigator.pop(context);
          Navigator.pushReplacement(
            context,
            MaterialPageRoute(
              builder: (BuildContext context) => HomeScreen(
                initialTabIndex: 4,
              ),
            ),
          );
        }),
        sendRecomended: (SendRecomended value) => bloc.sendRecomended(value).then((value) => Navigator.pop(context)),
        partnetId: int.tryParse(widget.partnerId) ?? 0,
        onSearchChanged: (String value) => bloc.onSearchChanged(value),
        shareOnPost: (PostCreateRequest value) => bloc.postCreate(value),
        partner: partner,
      ),
    );
  }
}
