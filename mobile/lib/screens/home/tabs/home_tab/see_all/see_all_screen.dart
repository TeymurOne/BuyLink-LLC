import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/see_all/see_all_bloc.dart';
import 'package:flutter/material.dart';

class SeeallScreen extends BaseScreen {
  const SeeallScreen({Key? key}) : super(key: key);

  @override
  State<SeeallScreen> createState() => _SeeallScreenState();
}

class _SeeallScreenState extends BaseState<SeeallScreen,SeeAllBloc> {
  @override
  Widget body() {
    return Container();

  }

  @override
  SeeAllBloc provideBloc() {
    return SeeAllBloc();
  }

}
