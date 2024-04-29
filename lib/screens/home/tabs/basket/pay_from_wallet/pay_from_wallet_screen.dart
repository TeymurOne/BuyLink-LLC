import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/presentation/common/input_number.dart';
import 'package:buylink_flutter/presentation/common/input_text.dart';
import 'package:buylink_flutter/presentation/resourses/app_colors.dart';
import 'package:buylink_flutter/screens/home/home_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/basket/pay_from_wallet/pay_frow_allet_bloc.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/user_details_edit/widget/category_navigator_pop.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../../../../data/network/request/pay_from_wallet_request.dart';
import '../../../../../data/network/request/raiting_request.dart';
import '../../../../../data/network/request/transaction_claim.dart';
import '../../../../../data/network/response/user.dart';
import '../../../../../domain/entities/patterns.dart';
import '../../../../../generated/l10n.dart';
import '../../../../login/login_screen.dart';
import '../../../../partner/partner_home_tab/tabs/partner_scaner/scaner/widget/scaner_true.dart';
import '../../home_tab/widget/rate_alert.dart';
import '../../home_tab/widget/rate_true.dart';

class PayFromWalletScreen extends BaseScreen {
  final BuildContext context;
  final String id;
  final int partnerId;

  const PayFromWalletScreen({
    super.key,
    required this.context,
    required this.id,
    required this.partnerId,
  });

  @override
  State<PayFromWalletScreen> createState() => _PayFromWalletScreenState();
}

class _PayFromWalletScreenState extends BaseState<PayFromWalletScreen, PayFromWalletBloc> {
  final TextEditingController _amountController = TextEditingController();
  final ValueNotifier<bool> _valueNotifier = ValueNotifier(false);
  bool isHidden = true;
  var _focusNode = new FocusNode();

  _focusListener() {
    setState(() {});
  }

  @override
  void dispose() {
    _focusNode.removeListener(_focusListener);
    super.dispose();
  }

  @override
  void initState() {
    super.initState();
    _focusNode.addListener(_focusListener);
    _amountController.addListener(_validate);
  }

  @override
  Widget body() {
    return StreamBuilder<User>(
      stream: bloc.userDetails,
      builder: (context, user) {
        if (user.hasData) {
          return FutureBuilder<TransactionClaim>(
            future: bloc.refererDetail(widget.id),
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                return ListView(
                  children: [
                    Padding(
                      padding: const EdgeInsets.only(left: 20, right: 20, top: 20),
                      child: CategoryNavigatorPop(
                        title: S.of(context).payFromWallet,
                      ),
                    ),
                    Container(
                      height: 86,
                      margin: EdgeInsets.all(20),
                      padding: EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        color: Colors.grey.withOpacity(0.1),
                        borderRadius: BorderRadius.circular(15),
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Text(
                            S.of(context).buylinkWallet,
                            style: TextStyle(
                              fontSize: 15,
                              fontWeight: FontWeight.w500,
                              color: AppColors.appColor,
                            ),
                          ),
                          Spacer(),
                          Row(
                            children: [
                              Image.asset(
                                "assets/vector/logo_white.png",
                                width: 20,
                              ),
                              Text(
                                user.requireData.balance.toString() + " AZN",
                                style: TextStyle(fontSize: 22, fontWeight: FontWeight.w400),
                              )
                            ],
                          )
                        ],
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(left: 20, right: 20),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            S.of(context).check,
                            style: TextStyle(fontSize: 20, fontWeight: FontWeight.w500),
                          ),
                          SizedBox(
                            height: 20,
                          ),
                          Container(
                            padding: EdgeInsets.all(16),
                            width: double.infinity,
                            decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(10), color: Colors.grey.withOpacity(0.2)),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Row(
                                  children: [
                                    Text(S.of(context).datess),
                                    Spacer(),
                                    Container(
                                        padding: EdgeInsets.all(5),
                                        decoration: BoxDecoration(
                                            borderRadius: BorderRadius.circular(8),
                                            color: Colors.grey.withOpacity(0.3)),
                                        child: Text(formatter.format(snapshot.requireData.createdAt))),
                                  ],
                                ),
                                Padding(
                                  padding: const EdgeInsets.only(top: 15),
                                  child: Row(
                                    children: [
                                      Text(S.of(context).initialPrice),
                                      Spacer(),
                                      Container(
                                          padding: EdgeInsets.all(5),
                                          decoration: BoxDecoration(
                                              borderRadius: BorderRadius.circular(8),
                                              color: Colors.grey.withOpacity(0.3)),
                                          child: Text("${snapshot.requireData.amount} AZN")),
                                    ],
                                  ),
                                ),
                                Padding(
                                  padding: const EdgeInsets.only(top: 15),
                                  child: Row(
                                    children: [
                                      Text(S.of(context).discount),
                                      Spacer(),
                                      Container(
                                          padding: EdgeInsets.all(5),
                                          decoration: BoxDecoration(
                                              borderRadius: BorderRadius.circular(8),
                                              color: Colors.grey.withOpacity(0.3)),
                                          child: Text("${snapshot.requireData.discountedPercent} %")),
                                    ],
                                  ),
                                ),
                                Padding(
                                  padding: const EdgeInsets.only(top: 15),
                                  child: Row(
                                    children: [
                                      Text(S.of(context).finalPrice),
                                      Spacer(),
                                      Container(
                                          padding: EdgeInsets.all(5),
                                          decoration: BoxDecoration(
                                              borderRadius: BorderRadius.circular(8), color: AppColors.appColor),
                                          child: Text(
                                            "${snapshot.requireData.discountedAmount} AZN",
                                            style: TextStyle(color: Colors.white),
                                          )),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                          )
                        ],
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(20.0),
                      child: Text(
                        S.of(context).loremIpsumDolorSitAmetConsecteturMolestieEgetACursus,
                        style: TextStyle(fontSize: 16, fontWeight: FontWeight.w400),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(left: 20, right: 20, bottom: 20),
                      child: Container(
                          padding: EdgeInsets.only(top: 5, left: 0, right: 10),
                          height: 60,
                          decoration: BoxDecoration(
                              color: Colors.white,
                              borderRadius: new BorderRadius.circular(8.0),
                              border: Border.all(color: Colors.grey)),
                          child: Focus(
                            onFocusChange: (hasFocus) {
                              setState(() {
                                finKodNumberFocus = hasFocus;
                              });
                            },
                            child: TextFormField(
                                controller: _amountController,
                                maxLines: 1,
                                keyboardType: TextInputType.phone,
                                focusNode: _focusNode,
                                cursorColor: AppColors.appColor,
                                style: TextStyle(color: AppColors.darkBlue, fontSize: 20),
                                decoration: InputDecoration(
                                  contentPadding: EdgeInsets.only(bottom: 20, left: 20, top: 0, right: 0),
                                  suffixIconConstraints: BoxConstraints(maxHeight: 50, maxWidth: 50),
                                  border: InputBorder.none,
                                  labelStyle: TextStyle(
                                      color: finKodNumberFocus || _amountController.text.trim().isEmpty
                                          ? Colors.black54
                                          : Colors.transparent,
                                      fontSize: 18),
                                  labelText: S.of(context).amount,
                                )),
                          )),
                    ),
                    Container(
                      height: 50,
                      margin: const EdgeInsets.only(left: 20, right: 20, bottom: 20),
                      width: double.infinity,
                      decoration: BoxDecoration(
                          border: Border.all(
                            color: Colors.white,
                          ),
                          borderRadius: BorderRadius.circular(10)),
                      child: ValueListenableBuilder<bool>(
                        valueListenable: _valueNotifier,
                        builder: (_, value, __) {
                          return ElevatedButton(
                            style: ElevatedButton.styleFrom(
                              disabledBackgroundColor: AppColors.appColor.withOpacity(0.3),
                              backgroundColor: AppColors.appColor,
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(5.0),
                              ),
                              textStyle: const TextStyle(
                                fontSize: 18,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            onPressed: value ? _login : null,
                            child: Text(
                              S.of(context).payFromWallet,
                              style: TextStyle(
                                color: value ? Colors.white : Colors.white,
                                fontWeight: FontWeight.w600,
                                fontSize: 15,
                              ),
                            ),
                          );
                        },
                      ),
                    ),
                  ],
                );
              }
              return SizedBox();
            },
          );
        }
        return const SizedBox();
      },
    );
  }

  @override
  PayFromWalletBloc provideBloc() {
    return PayFromWalletBloc();
  }

  void _validate() {
    final isValid = _amountController.text.isNotEmpty;
    _valueNotifier.value = isValid;
  }

  _login() {
    final amount = _amountController.text.trim();
    bloc
        .payFromWallet(
      PayFromWalletRequest(
        amount: int.tryParse(amount) ?? 0,
        id: widget.id,
      ),
    )
        .then((value) {
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(
          builder: (BuildContext context) => HomeScreen(
            initialTabIndex: 3,
          ),
        ),
      );
      showDialog(
        context: context,
        builder: (_) {
          return RateDialog(
            onchanged: (request) async {
              bloc.rating(
                widget.partnerId.toString(),
                request,
              ).then((value) => Navigator.pop(widget.context));
            },
          );
        },
      );
    });
  }
}
