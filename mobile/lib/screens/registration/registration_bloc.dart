import 'package:country_code_picker/country_code_picker.dart';

import '../../data/network/request/registration_request.dart';
import '../../data/network/request/verifay_request.dart';
import '../../data/network/response/register_profile.dart';
import '../../domain/repositories/auth_repository.dart';
import '../../main.dart';
import '../../presentation/bloc/base_bloc.dart';

class RegistrationBloc extends BaseBloc {
  final AuthRepository _authRepository = sl.get<AuthRepository>();
  final String num;
  CountryCode? countryCode;
  String dialCode = '55';

  RegistrationBloc({required this.num});



  Future<void> verify(String number) {
    return run(_authRepository.verify(VerifayRequest(
      phone: "+994" + dialCode + number,
    )));
  }

  Future<bool> userExists(String number) {
    return run(
      _authRepository.userExists(
        "+994" + dialCode + number,
      ),
    );
  }

}
