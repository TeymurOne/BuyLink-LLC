
import '../../../data/network/request/forgot_password_request.dart';
import '../../../domain/repositories/auth_repository.dart';
import '../../../main.dart';
import '../../../presentation/bloc/base_bloc.dart';

class ForgotPasswordBloc extends BaseBloc{
  final AuthRepository _authRepository = sl.get<AuthRepository>();

  Future<void> sendOtp(int phone) {
    return run(_authRepository.otpRegistration(phone));
  }


  Future<void> sendRegistrationOtp(int number, int otpCode) {
    return run(_authRepository.sendOtpLogin(number, otpCode));
  }

  Future<void> forgotPassword(
      String password,
      String password_confirmation,
      ) {
    return run(_authRepository.forgotPassword(ForgotPasswordrRequest(
        password: password,
        password_confirmation: password_confirmation)));
  }

}