import 'package:flutter/material.dart';

import '../../data/network/request/verifay_request.dart';
import '../../domain/entities/patterns.dart';
import '../../generated/l10n.dart';
import '../../presentation/bloc/base_screen.dart';
import '../../presentation/bloc/error_dispatcher.dart';
import '../../presentation/common/input_number.dart';
import '../../presentation/resourses/app_colors.dart';
import '../registration/navigator_pop.dart';
import 'login_bloc.dart';
import 'otp/otp_screen.dart';

bool cartNumberFocus = false;
bool finKodNumberFocus = false;

class LoginScreen extends BaseScreen {
  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends BaseState<LoginScreen, LoginBlock>
    with ErrorDispatcher, TickerProviderStateMixin {
  final TextEditingController _phoneController = TextEditingController();
  final ValueNotifier<bool> _valueNotifier = ValueNotifier(false);

  @override
  void initState() {
    super.initState();
    _phoneController.addListener(_validate);
  }

  @override
  Widget body() {
    return Padding(
      padding: const EdgeInsets.all(15.0),
      child: ListView(
        children: [
          Padding(
            padding: const EdgeInsets.only(
              top: 40,
            ),
            child: NavigatorPop(),
          ),
          Container(
              alignment: Alignment.topLeft,
              padding: EdgeInsets.only(right: 50, top: 15),
              child:  Text(
                S.of(context).confirmNumber,
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.w500),
                textAlign: TextAlign.center,
              )),
          Container(
              padding: EdgeInsets.only(right: 50, top: 20),
              child:  Text(
                S.of(context).enterYourMobileNumberYouHaveAccessToYouWill,
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.w400),
                textAlign: TextAlign.start,
              )),
          const SizedBox(
            height: 30,
          ),
          NumberFild(
            onCountryCodeChanged: (countryCode) =>
                bloc.countryCode = countryCode,
            labelText: "",
            controller: _phoneController,
          ),
          const SizedBox(
            height: 20,
          ),
          Container(
            height: 50,
            width: double.infinity,
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
                      disabledBackgroundColor:
                          AppColors.appColor.withOpacity(0.3),
                      backgroundColor: AppColors.appColor,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(5.0),
                      ),
                      textStyle: const TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      )),
                  onPressed: value ? _login : null,
                  child: Text(
                    S.of(context).logIn,
                    style: TextStyle(
                        color: value ? Colors.white : Colors.white,
                        fontWeight: FontWeight.w600,
                        fontSize: 15),
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
  LoginBlock provideBloc() {
    return LoginBlock(
      num: _phoneController.text.trim(),
    );
  }

  @override
  void dispose() {
    _phoneController.dispose();
    super.dispose();
  }

  void _validate() {
    var isValid = Patterns.textField.hasMatch(_phoneController.text.trim());
    _valueNotifier.value = isValid;
  }

  _login() {
    final phone = _phoneController.text.trim();
    // bloc
    //     .verify(VerifayRequest(
    //         phone: (bloc.countryCode == null
    //                 ? "+994"
    //                 : bloc.countryCode.toString()) +
    //             phone))
    //     .then(
    //       (value) => Navigator.pushReplacement(
    //         context,
    //         MaterialPageRoute(
    //           builder: (BuildContext context) => OtpScreen(
    //             phone: (bloc.countryCode == null
    //                     ? "+994"
    //                     : bloc.countryCode.toString()) +
    //                 phone,
    //             navigator: 2,
    //           ),
    //         ),
    //       ),
    //     );
  }
}
