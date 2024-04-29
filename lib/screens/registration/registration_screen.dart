import 'package:buylink_flutter/screens/registration/register_info/register_info_screen.dart';
import 'package:buylink_flutter/screens/registration/registration_bloc.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_svg/svg.dart';

import '../../data/network/request/verifay_request.dart';
import '../../domain/entities/patterns.dart';
import '../../generated/l10n.dart';
import '../../presentation/bloc/base_screen.dart';
import '../../presentation/bloc/error_dispatcher.dart';
import '../../presentation/common/input_number.dart';
import '../../presentation/common/input_text.dart';
import '../../presentation/common/password_field.dart';
import '../../presentation/resourses/app_colors.dart';
import '../../utils/util.dart';
import '../home/home_screen.dart';
import '../home/tabs/home_tab/partner/partner_screen.dart';
import '../login/login_screen.dart';
import '../login/otp/otp_screen.dart';
import '../partner/login/partner_login_screen.dart';
import 'input_number_login.dart';

bool cartNumberFocus = false;
bool finKodNumberFocus = false;
const dialCodes = ["---", '55', '70', '77', '50', '51', '99', '10'];

class RegistrationScreen extends BaseScreen {
  @override
  State<RegistrationScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends BaseState<RegistrationScreen, RegistrationBloc>
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
    return Stack(
      children: [
        ListView(
          children: [
            SizedBox(
              height: 20,
            ),
            Padding(
              padding: const EdgeInsets.all(15.0),
              child: Text(
                S.of(context).welcomeToBuylink,
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
              ),
            ),
            SizedBox(
              height: 20,
            ),
            SvgPicture.asset('assets/vector/log_in_image.svg'),
            SizedBox(
              height: 40,
            ),

            SizedBox(
              height: 20,
            ),

            Padding(
              padding: EdgeInsets.only(left: 15),
              child: Row(
                children: [
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        S.of(context).prefix,
                        style: TextStyle(color: AppColors.appColor, fontSize: 16, fontWeight: FontWeight.w400),
                      ),
                      Container(
                        height: 58,
                        width: 90,
                        decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(8),
                            border: Border.all(color: Colors.grey.withOpacity(0.3))),
                        child: DropdownSelector(
                          values: dialCodes,
                          onChanged: (String value) {
                            bloc.dialCode = value;
                          },
                        ),
                      ),
                    ],
                  ),
                  Container(
                    width: MediaQuery.of(context).size.width * 0.71,
                    child: NumberFildLogin(
                      labelText: S.of(context).number,
                      controller: _phoneController,
                    ),
                  ),
                ],
              ),
            ),
            // NumberFild(
            //   onCountryCodeChanged: (countryCode) => bloc.countryCode = countryCode,
            //   labelText: "",
            //   controller: _phoneController,
            // ),
            SizedBox(
              height: 20,
            ),
            SizedBox(
              height: 20,
            ),
            Container(
              margin: EdgeInsets.only(left: 15, right: 15),
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
                      S.of(context).next,
                      style: TextStyle(
                          color: value ? Colors.white : Colors.white, fontWeight: FontWeight.w600, fontSize: 15),
                    ),
                  );
                },
              ),
            ),
          ],
        ),
        Container(
          margin: EdgeInsets.only(top: MediaQuery.of(context).size.height * 0.93),
          child: Row(
            children: [
              Spacer(),
              Text(
                S.of(context).logInAsAPartner,
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.w500, color: Colors.grey),
              ),
              Container(
                padding: EdgeInsets.all(5),
                decoration: BoxDecoration(color: Colors.grey, borderRadius: BorderRadius.circular(8)),
                child: GestureDetector(
                  onTap: () => Navigator.push(
                      context, MaterialPageRoute(builder: (BuildContext context) => PartnerLoginScreen())),
                  child:  Text(
                    S.of(context).logIn,
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.w500, color: Colors.white),
                  ),
                ),
              ),
              Spacer(),
            ],
          ),
        ),
      ],
    );
  }

  @override
  RegistrationBloc provideBloc() {
    return RegistrationBloc(
      num: _phoneController.text.trim(),
    );
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

  _login() {
    final phone = _phoneController.text.trim();

    bloc.userExists(phone).then(
          (type) => type == false
              ? Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (BuildContext context) => RegisterInfoScreen(
                      phone: phone,
                      dialCode: bloc.dialCode,
                    ),
                  ),
                )
              : bloc.verify(phone).then(
                    (value) => Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (BuildContext context) => OtpScreen(
                          phone: phone,
                          navigator: 2,
                          dialCode: bloc.dialCode,
                        ),
                      ),
                    ),
                  ),
        );

    // bloc
    //     .register(VerifayRequest(phone: (bloc.countryCode == null ? "+994" : bloc.countryCode.toString()) + phone))
    //     .then((value) =>
    //     Navigator.push(
    //         context,
    //         MaterialPageRoute(
    //             builder: (BuildContext context) =>
    //                 OtpScreen(
    //                   phone: (bloc.countryCode == null ? "+994" : bloc.countryCode.toString()) + phone,
    //                   navigator: 1,
    //                 ))));
  }
}

class DropdownSelector extends StatefulWidget {
  final ValueChanged<String> onChanged;
  final List<String> values;

  const DropdownSelector({Key? key, required this.onChanged, required this.values}) : super(key: key);

  @override
  _DropdownSelectorState createState() => _DropdownSelectorState();
}

class _DropdownSelectorState extends State<DropdownSelector> {
  String? selectedValue;

  @override
  void initState() {
    super.initState();
    selectedValue = widget.values.first;
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(15.0),
      child: DropdownButtonHideUnderline(
        child: DropdownButton<String>(
          itemHeight: 50.0,
          value: selectedValue,
          items: widget.values
              .map<DropdownMenuItem<String>>(
                (e) => DropdownMenuItem(
                  child: Text(e),
                  value: e,
                ),
              )
              .toList(),
          onChanged: (value) {
            setState(() {
              selectedValue = value;
              if (selectedValue != null) {
                widget.onChanged(selectedValue!);
              }
            });
          },
        ),
      ),
    );
  }
}
