import 'package:country_code_picker/country_code_picker.dart';

import '../../../data/network/request/partner_login_request.dart';
import '../../../domain/repositories/auth_repository.dart';
import '../../../main.dart';
import '../../../presentation/bloc/base_bloc.dart';

class PartnerLoginBlock extends BaseBloc {
  final AuthRepository _authRepository = sl.get<AuthRepository>();
  final String num;
  CountryCode? countryCode;

  PartnerLoginBlock({required this.num});

  Future<void> partnerLogin(PartnerLoginReguest request) {
    return run(_authRepository.partnerLogin(request));
  }
}
