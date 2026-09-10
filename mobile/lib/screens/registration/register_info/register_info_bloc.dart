import 'package:buylink_flutter/presentation/bloc/base_bloc.dart';

import '../../../data/network/request/verifay_request.dart';
import '../../../data/network/response/register_profile.dart';
import '../../../domain/repositories/auth_repository.dart';
import '../../../main.dart';

class RegisterInfoBloc extends BaseBloc {
  final AuthRepository _authRepository = sl.get<AuthRepository>();
  late DateTime date;

  Future<void> register(RegisterProfile negisterProfile) {
    return run(_authRepository.registerProfile(negisterProfile));
  }
}
