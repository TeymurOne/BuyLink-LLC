import 'package:country_code_picker/country_code_picker.dart';

import '../../data/network/request/loqin_request.dart';
import '../../data/network/request/verifay_request.dart';
import '../../domain/repositories/auth_repository.dart';
import '../../main.dart';
import '../../presentation/bloc/base_bloc.dart';

class LoginBlock extends BaseBloc {
  final AuthRepository _authRepository = sl.get<AuthRepository>();
  final String num;
  CountryCode? countryCode;

  LoginBlock({required this.num});

  Future<void> verify(VerifayRequest request) {
    return run(_authRepository.verify(request));
  }
}
