import 'package:buylink_flutter/screens/partner/login/partner_login_bloc.dart';
import 'package:flutter/material.dart';

import '../../../data/network/request/partner_login_request.dart';
import '../../../domain/entities/patterns.dart';
import '../../../generated/l10n.dart';
import '../../../presentation/bloc/base_screen.dart';
import '../../../presentation/bloc/error_dispatcher.dart';
import '../../../presentation/common/input_text.dart';
import '../../../presentation/common/password_field.dart';
import '../../../presentation/resourses/app_colors.dart';
import '../../registration/navigator_pop.dart';
import '../partner_home_tab/partner_screen.dart';

bool cartNumberFocus = false;
bool finKodNumberFocus = false;

class PartnerLoginScreen extends BaseScreen {
  @override
  State<PartnerLoginScreen> createState() => _PartnerLoginState();
}

class _PartnerLoginState extends BaseState<PartnerLoginScreen, PartnerLoginBlock>
    with ErrorDispatcher, TickerProviderStateMixin {
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  final ValueNotifier<bool> _valueNotifier = ValueNotifier(false);

  @override
  void initState() {
    super.initState();
    _emailController.addListener(_validate);
    _passwordController.addListener(_validate);
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
              child: Text(
                S.of(context).enterYourMobileNumberYouHaveAccessToYouWill,
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.w400),
                textAlign: TextAlign.start,
              )),
          SizedBox(
            height: 30,
          ),
          TextFildd(
            labelText: S.of(context).email,
            controller: _emailController,
          ),
          PasswordField(
            labelText: S.of(context).password,
            controller: _passwordController,
          ),
          SizedBox(
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
                      disabledBackgroundColor: AppColors.appColor.withOpacity(0.3),
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
  PartnerLoginBlock provideBloc() {
    return PartnerLoginBlock(
      num: _emailController.text.trim(),
    );
  }

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    super.dispose();
  }

  void _validate() {
    var isValid = Patterns.email.hasMatch(_emailController.text.trim()) &&
        Patterns.textField.hasMatch(_passwordController.text.trim());
    _valueNotifier.value = isValid;
  }

  _login() {
    final email = _emailController.text.trim();
    final password = _passwordController.text.trim();
    bloc.partnerLogin(PartnerLoginReguest(email: email, password: password)).then((value) =>
        Navigator.pushReplacement(
            context, MaterialPageRoute(builder: (BuildContext context) => PartnerHomeScreen())));
  }
}
