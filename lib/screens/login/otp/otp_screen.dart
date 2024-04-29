import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:flutter/material.dart';
import 'package:sms_autofill/sms_autofill.dart';
import '../../../data/network/request/loqin_request.dart';
import '../../../generated/l10n.dart';
import '../../../presentation/bloc/error_dispatcher.dart';
import '../../../presentation/resourses/app_colors.dart';
import '../../home/home_screen.dart';
import '../../registration/navigator_pop.dart';
import 'otp_bloc.dart';

class OtpScreen extends BaseScreen {
  final String phone;
  final int navigator;
  final String dialCode;

  const OtpScreen({
    super.key,
    required this.phone,
    required this.navigator,
    required this.dialCode,
  });

  @override
  State<OtpScreen> createState() => _OtpScreenState();
}

class _OtpScreenState extends BaseState<OtpScreen, OtpBloc> with ErrorDispatcher {
  final TextEditingController _pinController = TextEditingController();

  @override
  Widget body() {
    return SafeArea(
      child: Scaffold(
          backgroundColor: AppColors.bgColor,
          body: ListView(
            padding: EdgeInsets.zero,
            children: [
              Padding(
                padding: const EdgeInsets.only(top: 25),
                child: NavigatorPop(),
              ),
              SizedBox(
                height: 55,
              ),
              Padding(
                padding: EdgeInsets.only(
                  left: 20,
                  right: 20,
                  bottom: 10,
                ),
                child: Text(
                  S.of(context).conformOtp,
                  style: TextStyle(fontSize: 30, fontWeight: FontWeight.w500),
                ),
              ),
              Container(
                padding: EdgeInsets.only(left: 20, right: 40, bottom: 50),
                child: Text(
                  "${widget.phone} " + S.of(context).buNomreyeKodGelecek,
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w400, color: Colors.grey),
                ),
              ),
              Padding(
                padding: EdgeInsets.symmetric(horizontal: 20),
                child: SizedBox(
                  height: 60,
                  child: LayoutBuilder(builder: (context, constraints) {
                    final gapSpace = (constraints.maxWidth - constraints.maxHeight * 4) / 3;
                    return PinFieldAutoFill(
                      cursor: Cursor(color: AppColors.appColor, width: 2, height: 30, enabled: true),
                      autoFocus: true,
                      controller: _pinController,
                      onCodeChanged: (code) {
                        if (code?.length == 4) {
                          _sendPin(context);
                        }
                      },
                      codeLength: 4,
                      decoration: BoxLooseDecoration(
                        gapSpace: gapSpace,
                        strokeColorBuilder: PinListenColorBuilder(
                          AppColors.appColor,
                          Colors.grey.withOpacity(0.1),
                        ),
                        bgColorBuilder: PinListenColorBuilder(
                          Colors.white,
                          Colors.grey.withOpacity(0.1),
                        ),
                      ),
                    );
                  }),
                ),
              ),
            ],
          )),
    );
  }

  @override
  OtpBloc provideBloc() {
    return OtpBloc();
  }

  _sendPin(BuildContext context) {
    bloc
        .login(
            LoqinRequest(phone: "+994" + widget.dialCode + widget.phone, verificationCode: _pinController.text.trim()))
        .then((value) {
      return Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (BuildContext context) => HomeScreen()),
      );
    });
  }
}
