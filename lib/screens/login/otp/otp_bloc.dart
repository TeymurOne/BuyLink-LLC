import 'package:buylink_flutter/data/network/request/loqin_request.dart';
import 'package:buylink_flutter/presentation/bloc/base_bloc.dart';

import '../../../data/network/request/verifay_request.dart';
import '../../../domain/repositories/auth_repository.dart';
import '../../../main.dart';

class OtpBloc extends BaseBloc {
  final AuthRepository _authRepository = sl.get<AuthRepository>();

  Future<void> login(LoqinRequest request) {
    return run(_authRepository.login(request));
  }
}
