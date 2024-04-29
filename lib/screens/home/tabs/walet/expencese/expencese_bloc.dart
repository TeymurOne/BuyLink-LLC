import 'package:buylink_flutter/presentation/bloc/base_bloc.dart';
import '../../../../../data/network/response/transactions_data.dart';
import '../../../../../domain/repositories/auth_repository.dart';
import '../../../../../main.dart';

class ExpenceseBloc extends BaseBloc {
  final authRepository = sl.get<AuthRepository>();

  late final Future<TransactionsData> selfTransactions = authRepository.selfTransactions();
}
