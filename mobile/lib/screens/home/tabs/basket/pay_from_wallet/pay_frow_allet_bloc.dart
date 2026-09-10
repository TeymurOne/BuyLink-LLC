import 'package:buylink_flutter/presentation/bloc/base_bloc.dart';
import 'package:rxdart/rxdart.dart';

import '../../../../../data/network/request/pay_from_wallet_request.dart';
import '../../../../../data/network/request/raiting_request.dart';
import '../../../../../data/network/request/transaction_claim.dart';
import '../../../../../data/network/response/user.dart';
import '../../../../../domain/repositories/auth_repository.dart';
import '../../../../../main.dart';

class PayFromWalletBloc extends BaseBloc {
  final userRepository = sl.get<AuthRepository>();

  late final Stream<User> userDetails = ValueConnectableStream(userRepository.userDetails).autoConnect();

  Future<TransactionClaim> refererDetail(String uuid) => userRepository.refererDetail(uuid);

  Future<void> payFromWallet(PayFromWalletRequest request) => userRepository.payFromWallet(request);

  Future<void> rating(String id, RaitingRequest request) => userRepository.rating(id, request);
}
