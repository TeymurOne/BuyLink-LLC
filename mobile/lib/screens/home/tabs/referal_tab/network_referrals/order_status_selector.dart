import 'package:buylink_flutter/screens/home/tabs/referal_tab/network_referrals/recomend_filter.dart';
import 'package:flutter/material.dart';
import '../../../../../generated/l10n.dart';
import '../../../../../presentation/bloc/bloc_provider.dart';
import '../../../../../presentation/resourses/app_colors.dart';
import 'network_referals_bloc.dart';

class OrderStatusSelectorDeclaration extends StatefulWidget {
  @override
  _OrderStatusSelectorDeclarationState createState() => _OrderStatusSelectorDeclarationState();
}

class _OrderStatusSelectorDeclarationState extends State<OrderStatusSelectorDeclaration> {
  late final NetworkReferralsBloc bloc = BlocProvider.of<NetworkReferralsBloc>(context);

  @override
  Widget build(BuildContext context) {
    return DropdownButtonHideUnderline(
      child: DropdownButton<RecomendFilter>(
        borderRadius: BorderRadius.circular(10),
        style: TextStyle(color: Colors.white),
        selectedItemBuilder: (_) {
          return RecomendFilter.values
              .map<DropdownMenuItem<RecomendFilter>>(
                (e) => DropdownMenuItem(
                  child: Text(
                    e.getTitile(context),
                    style: TextStyle(color: Colors.white, fontWeight: FontWeight.w600),
                  ),
                  value: e,
                ),
              )
              .toList();
        },
        icon: Icon(Icons.filter_alt,color: Colors.white,),
        itemHeight: 50.0,
        value: bloc.status,
        items: RecomendFilter.values
            .map<DropdownMenuItem<RecomendFilter>>(
              (e) => DropdownMenuItem(
                child: Text(
                  e.getTitile(context),
                  style: e == bloc.status
                      ? TextStyle(color: AppColors.appColor, fontWeight: FontWeight.w600)
                      : TextStyle(color: Colors.black87, fontWeight: FontWeight.w600),
                ),
                value: e,
              ),
            )
            .toList(),
        onChanged: (value) {
          setState(() {
            bloc.status = value;
            bloc.load(refresh: true);
          });
        },
        hint: Text(
          S.of(context).filtration,
          style: const TextStyle(
            color: Colors.white,
            fontWeight: FontWeight.w600,
          ),
        ),
      ),
    );
  }
}
