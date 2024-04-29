import 'package:country_code_picker/country_code_picker.dart';
import 'package:flutter/material.dart';

class PhoneLanguage extends StatelessWidget {
  final ValueChanged<CountryCode>? onChanged;

  const PhoneLanguage({Key? key, this.onChanged}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return CountryCodePicker(
      padding: EdgeInsets.only(left: 0,right: 0),
      onChanged: onChanged,
      initialSelection: "AZ",
      flagWidth: 35,
      hideMainText: true,
    );
  }
}
