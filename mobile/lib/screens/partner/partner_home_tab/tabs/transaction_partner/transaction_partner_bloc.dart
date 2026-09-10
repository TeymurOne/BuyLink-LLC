import 'package:buylink_flutter/presentation/bloc/base_bloc.dart';

import '../../../../../data/network/response/transaction_partnr.dart';
import '../../../../../domain/repositories/auth_repository.dart';
import '../../../../../main.dart';

class TransactionPartnerBloc extends BaseBloc {
  final authRepository = sl.get<AuthRepository>();

  late final Future<List<TransactionPartner>> partnerTransactions = authRepository.partnerTransactions();
}
