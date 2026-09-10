import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:sms_autofill/sms_autofill.dart';


import '../../../../generated/l10n.dart';
import '../../../../presentation/bloc/base_screen.dart';
import '../../../../presentation/bloc/error_dispatcher.dart';
import '../../../../presentation/resourses/app_colors.dart';
import '../../../registration/navigator_pop.dart';
import '../forgot_password_bloc.dart';
import 'forgotPassword.dart';



class OtpForgotPassword extends BaseScreen {
  final String number;

  OtpForgotPassword({Key? key, required this.number}) : super(key: key);

  @override
  _OtpForgotPasswordState createState() => _OtpForgotPasswordState();
}

class _OtpForgotPasswordState extends BaseState<OtpForgotPassword, ForgotPasswordBloc>
    with ErrorDispatcher {
  final TextEditingController _pinController = TextEditingController();


  @override
  Widget body() {
    return Scaffold(
        backgroundColor: AppColors.bgColor,
        body: ListView(
          children: [
            NavigatorPop(),
            SizedBox(
              height: 55,
            ),
            Padding(
              padding: const EdgeInsets.only(left: 40, right: 40),
              child: Text(
                S.of(context).otpniTsdiql,
                style: TextStyle(fontSize: 30, fontWeight: FontWeight.w500),
                textAlign: TextAlign.center,
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(left: 40, right: 40, top: 20, bottom: 65),
              child: Text(
                widget.number+ " " + S.of(context).nmrsinKodGndrildi,
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.w400, color: Colors.grey),
                textAlign: TextAlign.center,
              ),
            ),
            Padding(
              padding: EdgeInsets.only(left: 30, right: 30),
              child: PinFieldAutoFill(
                controller: _pinController,
                onCodeChanged: (code) {
                  if (code?.length == 4) {
                    _sendPin(context);
                  }
                },
                codeLength: 4,
                decoration: UnderlineDecoration(
                  lineHeight: 2,
                  lineStrokeCap: StrokeCap.square,
                  colorBuilder: const FixedColorBuilder(Colors.grey),
                ),
              ),
            ),

          ],
        ));
  }

  @override
  ForgotPasswordBloc provideBloc() {
    return ForgotPasswordBloc();
  }

  _sendPin(BuildContext context) {
    bloc.sendRegistrationOtp(
        int.tryParse(widget.number)!, int.tryParse(_pinController.text.trim()) ?? 0).then((value) =>
        Navigator.push(context, MaterialPageRoute(builder: (BuildContext context) {
          return ForgotPasswordScreen(number: widget.number);
        })));
  }
}
