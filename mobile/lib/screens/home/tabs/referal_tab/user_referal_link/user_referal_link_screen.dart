import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/screens/home/home_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/user_details_edit/widget/category_navigator_pop.dart';
import 'package:buylink_flutter/screens/home/tabs/referal_tab/user_referal_link/user_referal_link_bloc.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../../../../data/network/request/add_basket_request.dart';
import '../../../../../generated/l10n.dart';
import '../../../../../presentation/resourses/app_colors.dart';

class UserReferalLinkScreen extends BaseScreen {
  final String discount;
  final int postId;
  final int? messageId;

  const UserReferalLinkScreen({super.key, this.messageId, required this.postId, required this.discount});

  @override
  State<UserReferalLinkScreen> createState() => _UserReferalLinkState();
}

class _UserReferalLinkState extends BaseState<UserReferalLinkScreen, UserReferalLinkBloc> {
  @override
  Widget body() {
    return ListView(
      padding: EdgeInsets.only(top: 50, left: 20, right: 20),
      children: [
        CategoryNavigatorPop(
          title: S.of(context).qrCode,
        ),
        Padding(
          padding: const EdgeInsets.only(top: 30, bottom: 20),
          child: Text(
            S.of(context).scanQrCode,
            style: TextStyle(fontSize: 24, fontWeight: FontWeight.w500),
          ),
        ),
        Text(
          S.of(context).scanQrCodeToGet + " " + widget.discount + " " + S.of(context).discount,
          style: TextStyle(fontSize: 16, fontWeight: FontWeight.w400),
        ),
        Padding(
          padding: const EdgeInsets.only(top: 30, bottom: 60),
          child: Text(
            S.of(context).ifYouChooseThisMethodThenYouCannotMakeA,
            style: TextStyle(fontSize: 16, fontWeight: FontWeight.w400, color: Colors.grey),
          ),
        ),
        Image.asset("assets/vector/static_quarcode.png"),
        GestureDetector(
          onTap: _addBasket,
          child: Container(
              height: 50,
              width: 150,
              decoration: BoxDecoration(color: AppColors.appColor, borderRadius: BorderRadius.circular(10)),
              child: Center(
                  child: Text(
                S.of(context).addToBasket,
                style: TextStyle(color: Colors.white),
              ))),
        ),
      ],
    );
  }

  @override
  UserReferalLinkBloc provideBloc() {
    return UserReferalLinkBloc();
  }

  _addBasket() {
    bloc
        .addBasket(AddBasketRequest(postId: widget.postId, messageId: widget.messageId))
        .then((value) => Navigator.pushAndRemoveUntil(
            context,
            MaterialPageRoute(
                builder: (BuildContext context) => HomeScreen(
                      initialTabIndex: 2,
                    )),
            (_) => false));
  }
}
