import 'package:buylink_flutter/presentation/bloc/base_bloc.dart';
import 'package:rxdart/rxdart.dart';

import '../../../../data/network/response/transactions_data.dart';
import '../../../../data/network/response/user.dart';
import '../../../../domain/repositories/auth_repository.dart';
import '../../../../main.dart';

class WletBloc extends BaseBloc{
  final authRepository = sl.get<AuthRepository>();

  late final Stream<User> userDetails =
  ValueConnectableStream(authRepository.userDetails).autoConnect();

  late final Future<TransactionsData> transactions = authRepository.transactions();

}