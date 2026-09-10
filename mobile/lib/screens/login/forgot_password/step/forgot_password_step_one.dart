import 'package:flutter/material.dart';

import '../../../../domain/entities/patterns.dart';
import '../../../../generated/l10n.dart';
import '../../../../presentation/bloc/base_screen.dart';
import '../../../../presentation/common/input_number.dart';
import '../../../../presentation/resourses/app_colors.dart';
import '../../../registration/navigator_pop.dart';
import '../forgot_password_bloc.dart';
import 'otp_forgot_password.dart';

class ForgotPasswordStepOne extends BaseScreen {
  @override
  _ForgotPasswordStepOneState createState() => _ForgotPasswordStepOneState();
}

class _ForgotPasswordStepOneState extends BaseState<ForgotPasswordStepOne, ForgotPasswordBloc> {
  final TextEditingController _phoneController = TextEditingController();
  final ValueNotifier<bool> _valueNotifier = ValueNotifier(false);

  @override
  void initState() {
    super.initState();
    _phoneController.addListener(_validate);
  }

  @override
  Widget body() {
    return Scaffold(
      backgroundColor: AppColors.bgColor,
      body: ListView(
        children: [
          NavigatorPop(),
          SizedBox(
            height: 40,
          ),
          Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Padding(
                padding: const EdgeInsets.only(bottom: 15),
                child: Text(
                  S.of(context).ifrniziBrpaEdin,
                  style: TextStyle(
                      color: AppColors.textColor, fontSize: 30, fontWeight: FontWeight.w500),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(bottom: 28, left: 35, right: 35),
                child: Text(
                  S.of(context).qeydiyyatdanKediyinizMobilNmrniziDaxilEdin,
                  style:
                      TextStyle(color: Colors.black54, fontSize: 22, fontWeight: FontWeight.w400),
                  textAlign: TextAlign.center,
                ),
              ),
            ],
          ),
          Padding(
            padding: EdgeInsets.only(top: 20, bottom: MediaQuery.of(context).size.height * 0.35),
            child: NumberFild(
              labelText: S.of(context).mobilNmr,
              controller: _phoneController,
            ),
          ),
          Container(
            height: 60,
            width: double.infinity,
            margin: EdgeInsets.only(top: 20, bottom: 5, left: 18, right: 18),
            decoration: BoxDecoration(
                border: Border.all(
                  color: Colors.white,
                ),
                borderRadius: BorderRadius.circular(10)),
            child: ValueListenableBuilder<bool>(
              valueListenable: _valueNotifier,
              builder: (_, value, __) {
                return ElevatedButton(
                  style: ElevatedButton.styleFrom(
                      disabledBackgroundColor: AppColors.appColor.withOpacity(0.3),
                      padding: EdgeInsets.only(bottom: 15, top: 15),
                      backgroundColor: AppColors.appColor,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10.0),
                      ),
                      textStyle: const TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      )),
                  onPressed: value ? _stepOne : null,
                  child: Text(
                    S.of(context).daxilOl,
                    style: TextStyle(
                        color: value ? Colors.white : Colors.white,
                        fontWeight: FontWeight.w600,
                        fontSize: 22),
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }

  @override
  ForgotPasswordBloc provideBloc() {
    return ForgotPasswordBloc();
  }

  @override
  void dispose() {
    _phoneController.dispose();
    super.dispose();
  }

  void _validate() {
    var isValid = Patterns.phone.hasMatch(_phoneController.text.trim());
    _valueNotifier.value = isValid;
  }

  _stepOne() {
    final phone = _phoneController.text;

    bloc.sendOtp(int.tryParse(phone)!).then((value) => Navigator.pushReplacement(
        context,
        MaterialPageRoute(
            builder: (BuildContext context) => OtpForgotPassword(
                  number: phone,
                ))));
  }
}
