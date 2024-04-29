import 'package:buylink_flutter/presentation/bloc/base_bloc.dart';

import '../../../../../../data/network/request/scan_qr_code.dart';
import '../../../../../../data/network/response/can_qr_code_response.dart';
import '../../../../../../data/network/response/user_details_response.dart';
import '../../../../../../domain/repositories/auth_repository.dart';
import '../../../../../../main.dart';

class ScanerBloc extends BaseBloc {
  final _authRepository = sl.get<AuthRepository>();

  Future<ScanQRCodeResponse> scanQRCode(String uuid, String amount) {
    return run(_authRepository.scanQRCode(ScanQRCodeRequest(uuid: uuid, amount: amount)));
  }

  Future<UserDetailsResponse> getUserDetails() {
    return _authRepository.getUserDetails();
  }

}
