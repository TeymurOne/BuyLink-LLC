import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/presentation/bloc/error_dispatcher.dart';
import 'package:buylink_flutter/screens/partner/partner_home_tab/tabs/transaction_partner/transaction_partner_bloc.dart';
import 'package:buylink_flutter/screens/partner/partner_home_tab/tabs/transaction_partner/widget/transaction_item_closed.dart';
import 'package:buylink_flutter/screens/partner/partner_home_tab/tabs/transaction_partner/widget/transaction_item_open.dart';
import 'package:expandable/expandable.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../../../../data/network/response/transaction_partnr.dart';
import '../../../../../generated/l10n.dart';

class TransactionPartnerScreen extends BaseScreen {
  const TransactionPartnerScreen({super.key});

  @override
  State<TransactionPartnerScreen> createState() => _TransactionPartnerScreenState();
}

class _TransactionPartnerScreenState extends BaseState<TransactionPartnerScreen, TransactionPartnerBloc> with ErrorDispatcher{
  @override
  Widget body() {
    return SafeArea(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.only(top: 16, bottom: 15, left: 20, right: 20),
            child: Text(
              S.of(context).transactionsList,
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.w500),
            ),
          ),
          Expanded(
            child: FutureBuilder<List<TransactionPartner>>(
              future: bloc.partnerTransactions,
              builder: (BuildContext context, snapshot) {
                if (snapshot.hasData) {
                  return ListView.builder(
                    itemCount: snapshot.requireData.length,
                    itemBuilder: (BuildContext context, int index) {
                      return ExpandableNotifier(
                        child: Column(
                          children: [
                            Expandable(
                              collapsed: ExpandableButton(
                                child: _BorderItem(
                                  widget: TransactionItemClosed(
                                    transaction: snapshot.requireData[index],
                                  ),
                                ),
                              ),
                              expanded: ExpandableButton(
                                child: _BorderItem(
                                  widget: TransactionItemOpen(
                                    transaction: snapshot.requireData[index],
                                  ),
                                ),
                              ),
                            ),
                          ],
                        ),
                      );
                    },
                  );
                }
                return Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Padding(
                      padding: const EdgeInsets.all(60.0),
                      child: Image.asset("assets/vector/cuate.png"),
                    ),
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(
                          S.of(context).noTransactionsToShow,
                          style: TextStyle(fontSize: 18, fontWeight: FontWeight.w500),
                        ),
                      ],
                    )
                  ],
                );
              },
            ),
          ),
          SizedBox(
            height: 70,
          )
        ],
      ),
    );
  }

  @override
  TransactionPartnerBloc provideBloc() {
    return TransactionPartnerBloc();
  }
}

class _BorderItem extends StatelessWidget {
  final Widget widget;

  const _BorderItem({Key? key, required this.widget}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          margin: const EdgeInsets.only(left: 20, right: 20, bottom: 20),
          padding: const EdgeInsets.only(left: 15, right: 15, top: 10, bottom: 10),
          decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(10),
              border: Border.all(color: Colors.grey.withOpacity(0.1))),
          child: widget,
        ),
      ],
    );
  }
}
