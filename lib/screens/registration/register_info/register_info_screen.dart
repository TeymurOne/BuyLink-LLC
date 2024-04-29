import 'dart:io';

import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/presentation/bloc/error_dispatcher.dart';
import 'package:buylink_flutter/screens/registration/register_info/register_info_bloc.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

import '../../../data/network/response/register_profile.dart';
import '../../../domain/entities/patterns.dart';
import '../../../generated/l10n.dart';
import '../../../presentation/common/image_selector.dart';
import '../../../presentation/common/input_with_suffix_icon.dart';
import '../../../presentation/resourses/app_colors.dart';
import '../../home/tabs/profil_tab/user_details_edit/widget/category_navigator_pop.dart';
import '../../home/tabs/profil_tab/user_details_edit/widget/user_avatar.dart';
import '../../login/otp/otp_screen.dart';
import 'date_selector.dart';

class RegisterInfoScreen extends BaseScreen {
  final String phone;
  final String dialCode;

  const RegisterInfoScreen({
    super.key,
    required this.phone,
    required this.dialCode,
  });

  @override
  State<RegisterInfoScreen> createState() => _RegisterInfoScreenState();
}

class _RegisterInfoScreenState extends BaseState<RegisterInfoScreen, RegisterInfoBloc> with ErrorDispatcher {
  final ValueNotifier<bool> _valueNotifier = ValueNotifier(false);
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _firstNameController = TextEditingController();
  final TextEditingController _mailController = TextEditingController();

  @override
  void initState() {
    super.initState();
    _nameController.addListener(_validate);
    _firstNameController.addListener(_validate);
    _mailController.addListener(_validate);
  }

  @override
  Widget body() {
    return ListView(
      children: [
        Padding(
          padding: const EdgeInsets.only(left: 20, right: 20, top: 27, bottom: 40),
          child: CategoryNavigatorPop(
            title: S.of(context).accountInformation,
          ),
        ),
        Padding(
          padding: const EdgeInsets.only(top: 0),
          child: Column(
            children: [
              TextInputWithIcon(
                labelText: S.of(context).nikName,
                controller: _nameController,
              ),
              TextInputWithIcon(
                labelText: S.of(context).soyad,
                controller: _firstNameController,
              ),
              Container(
                margin: EdgeInsets.only(left: 20, right: 20, top: 20),
                child: DateSelector(
                  timeType: true,
                  onChanged: (value) {
                    if (mounted) {
                      bloc.date = value!;
                    }
                    _validate();
                  },
                  labelText: S.of(context).tarix,
                ),
              ),
              TextInputWithIcon(
                labelText: S.of(context).epota,
                controller: _mailController,
              ),
              Container(
                height: 60,
                width: double.infinity,
                margin: EdgeInsets.only(
                  top: 45,
                  bottom: 20,
                  left: 18,
                  right: 18,
                ),
                decoration: BoxDecoration(
                  border: Border.all(
                    color: Colors.white,
                  ),
                  borderRadius: BorderRadius.circular(10),
                ),
                child: ValueListenableBuilder<bool>(
                  valueListenable: _valueNotifier,
                  builder: (_, value, __) {
                    return ElevatedButton(
                      style: ElevatedButton.styleFrom(
                        disabledBackgroundColor: AppColors.appColor.withOpacity(0.3),
                        padding: EdgeInsets.only(bottom: 15, top: 15),
                        backgroundColor: AppColors.appColor,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(15.0),
                        ),
                        textStyle: const TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      onPressed: value ? _register : null,
                      child: Text(
                        S.of(context).yaddaSaxla,
                        style: TextStyle(
                            color: value ? Colors.white : Colors.white, fontWeight: FontWeight.w600, fontSize: 22),
                      ),
                    );
                  },
                ),
              ),
            ],
          ),
        )
      ],
    );
  }

  @override
  RegisterInfoBloc provideBloc() {
    return RegisterInfoBloc();
  }

  void _validate() {
    var isValid = Patterns.email.hasMatch(_mailController.text.trim()) &&
        Patterns.textField.hasMatch((_nameController.text.trim())) &&
        Patterns.textField.hasMatch((_firstNameController.text.trim())) &&
        bloc.date.toString().isNotEmpty;
    _valueNotifier.value = isValid;
  }

  _register() {
    bloc
        .register(RegisterProfile(
            phone: "+994" + widget.dialCode + widget.phone,
            username: _nameController.text.trim(),
            birthday: bloc.date.toString(),
            email: _mailController.text.trim(),
            name: _firstNameController.text.trim()))
        .then(
          (value) => Navigator.push(
            context,
            MaterialPageRoute(
              builder: (BuildContext context) => OtpScreen(
                phone: widget.phone,
                navigator: 1,
                dialCode: widget.dialCode,
              ),
            ),
          ),
        );
  }
}
