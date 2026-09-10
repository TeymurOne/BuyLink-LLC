import 'package:buylink_flutter/screens/home/tabs/profil_tab/settings/supported_locale.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import '../../../../../../generated/l10n.dart';
import '../../../../../../presentation/resourses/app_colors.dart';

class LocalizationPopUp extends StatefulWidget {
  final ValueChanged<Locale> onChanged;
  final Locale currentLocale;

  const LocalizationPopUp({
    super.key,
    required this.onChanged,
    required this.currentLocale,
  });

  @override
  State<LocalizationPopUp> createState() => _LocalizationPopUpState();
}

class _LocalizationPopUpState extends State<LocalizationPopUp> {
  late Locale _currentLocale = widget.currentLocale;

  @override
  Widget build(BuildContext context) {

    final supportedLocales = [
      SupportedLocale(Locale("az"), "🇦🇿", S.of(context).azrbaycan),
      SupportedLocale(Locale("en"), "🇬🇧", S.of(context).english),
      SupportedLocale(Locale("ru"), "🇷🇺", S.of(context).vf),
    ];
    final currentSupportedLocale = supportedLocales
        .firstWhere((element) => element.locale == _currentLocale);
    return Container(
      height: 280,
      decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.only(
              topLeft: Radius.circular(35), topRight: Radius.circular(35))),
      child: Padding(
        padding: const EdgeInsets.only(left: 20, right: 20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              margin: EdgeInsets.only(
                  left: MediaQuery.of(context).size.width * 0.4,
                  right: MediaQuery.of(context).size.width * 0.4,
                  top: 25),
              height: 6,
              decoration: BoxDecoration(
                  color: AppColors.appColor,
                  borderRadius: BorderRadius.circular(35)),
            ),
            Container(
              margin: EdgeInsets.only(top: 25, bottom: 10),
              child: Text(
                S.of(context).sofcontextdilsein,
                style: TextStyle(fontSize: 22, fontWeight: FontWeight.w500),
              ),
            ),
            ...supportedLocales.map(
              (e) => GestureDetector(
                behavior: HitTestBehavior.translucent,
                onTap: () => onChanged(e),
                child: Row(
                  children: [
                    Text(
                      e.image,
                      style:
                          TextStyle(fontSize: 20, fontWeight: FontWeight.w400),
                    ),
                    SizedBox(
                      width: 5,
                    ),
                    Text(e.name,
                        style: TextStyle(
                            fontSize: 20, fontWeight: FontWeight.w400)),
                    Spacer(),
                    Radio<SupportedLocale>(
                        activeColor: Colors.green.withOpacity(0.7),
                        value: e,
                        groupValue: currentSupportedLocale,
                        onChanged: onChanged),
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }

  void onChanged(SupportedLocale? e) {
    if (e != null) {
      setState(() {
        widget.onChanged(e.locale);
      });
      Navigator.pop(context);
    }
  }
}
