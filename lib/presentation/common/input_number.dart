import 'package:buylink_flutter/presentation/common/phone_language.dart';
import 'package:country_code_picker/country_code_picker.dart';
import 'package:flutter/material.dart';
import '../../screens/login/login_screen.dart';
import '../resourses/app_colors.dart';


class NumberFild extends StatefulWidget {
  final TextEditingController? controller;
  final TextEditingController _cartController = TextEditingController();
  final FormFieldValidator<String>? validator;
  final AutovalidateMode? autovalidateMode;
  final String? labelText;
  final TextInputAction? textInputAction;
  final ValueChanged<CountryCode>? onCountryCodeChanged;

  NumberFild(
      {Key? key,
        this.controller,
        this.validator,
        this.autovalidateMode = AutovalidateMode.onUserInteraction,
        this.labelText,
        this.textInputAction, this.onCountryCodeChanged})
      : super(key: key);

  @override
  State<NumberFild> createState() => _NumberFildState();
}

class _NumberFildState extends State<NumberFild> {
  bool isHidden = true;
  var _focusNode = new FocusNode();

  _focusListener() {
    setState(() {});
  }

  @override
  void initState() {
    _focusNode.addListener(_focusListener);
    super.initState();
  }

  @override
  void dispose() {
    _focusNode.removeListener(_focusListener);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.only(top: 5, left: 0, right: 10),
        height: 60,
        decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: new BorderRadius.circular(8.0),
            border: Border.all(color: Colors.grey)),
        child: Focus(
          onFocusChange: (hasFocus) {
            setState(() {
              finKodNumberFocus = hasFocus;
            });
          },
          child: TextFormField(
              autovalidateMode: widget.autovalidateMode,
              validator: widget.validator,
              controller: widget.controller,
              textInputAction: widget.textInputAction,
              maxLines: 1,
              keyboardType: TextInputType.phone,
              focusNode: _focusNode,
              cursorColor: AppColors.appColor,
              style: TextStyle(color: AppColors.darkBlue, fontSize: 20),
              decoration: InputDecoration(
                  contentPadding: EdgeInsets.only(bottom: 20, left: 0, top: 0, right: 0),
                  suffixIconConstraints: BoxConstraints(maxHeight: 50, maxWidth: 50),
                  border: InputBorder.none,
                  labelStyle: TextStyle(
                      color: finKodNumberFocus || widget._cartController.text.trim().isEmpty
                          ? Colors.black54
                          : Colors.transparent,
                      fontSize: 18),
                  labelText: widget.labelText,
                  icon: PhoneLanguage(onChanged: widget.onCountryCodeChanged,)
              )),
        ));
  }
}







