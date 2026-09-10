import 'package:buylink_flutter/presentation/bloc/base_bloc.dart';
import 'package:rxdart/rxdart.dart';

import '../../../../../data/network/response/partner_details.dart';
import '../../../../../data/network/response/partner_profil_data.dart';
import '../../../../../data/network/response/user.dart';
import '../../../../../domain/repositories/auth_repository.dart';
import '../../../../../main.dart';

class PartnerProfilBloc extends BaseBloc{
  final authRepository = sl.get<AuthRepository>();


  Future<PartnerProdileData> partnerDetails(String data) {
    return authRepository.partnerDetailsInfo(data);
  }

  late final Stream<User> userDetails =
  ValueConnectableStream(authRepository.userDetails).autoConnect();

  late final Future<void> logout = authRepository.logout();


  Future<PartnerDetails> partnerDetailsById(String data) {
    return authRepository.partnerDetails(data);
  }
}