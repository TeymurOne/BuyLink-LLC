import 'package:buylink_flutter/presentation/bloc/base_bloc.dart';
import 'package:rxdart/rxdart.dart';

import '../../../../../data/network/response/transactions_data.dart';
import '../../../../../domain/repositories/auth_repository.dart';
import '../../../../../main.dart';



class RewardsBloc extends BaseBloc{
  final authRepository = sl.get<AuthRepository>();


  late final Future<TransactionsData> transactions = authRepository.transactions();

}