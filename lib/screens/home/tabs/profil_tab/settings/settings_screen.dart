import 'package:buylink_flutter/data/network/response/user.dart';
import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/settings/settings_bloc.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../../../generated/l10n.dart';
import '../../../../../utils/util.dart';
import '../../../../registration/registration_screen.dart';
import '../logout_dialog.dart';
import 'localization_pop_up.dart';

class SettingsScreen extends BaseScreen {
  final User user;

  const SettingsScreen({super.key, required this.user});

  @override
  State<SettingsScreen> createState() => _SettingsState();
}

class _SettingsState extends BaseState<SettingsScreen, SettingsBloc> {
  late bool switchValue = widget.user.isPublic ?? false;

  Widget getSettingsItem({required String iconName, required String text, required Widget trailing, Function? onTap}) {
    return InkWell(
      onTap: () {
        onTap?.call();
      },
      child: Container(
        padding: EdgeInsets.symmetric(horizontal: 20, vertical: 25),
        decoration: BoxDecoration(color: CustomColors.lightGray3, borderRadius: BorderRadius.circular(8), boxShadow: [
          BoxShadow(
            offset: Offset(0, 3),
            spreadRadius: 0,
            color: CustomColors.black.withOpacity(0.1),
            blurRadius: 2,
          )
        ]),
        child: Row(children: [
          Container(
              width: 48,
              height: 48,
              padding: EdgeInsets.all(10),
              decoration: BoxDecoration(color: Colors.grey.withOpacity(0.1), borderRadius: BorderRadius.circular(50)),
              child: SvgPicture.asset('assets/vector/$iconName.svg')),
          SizedBox(
            width: 20,
          ),
          Expanded(
              child: Text(
            text,
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
          )),
          trailing
        ]),
      ),
    );
  }

  @override
  Widget body() {
    return ListView(
      padding: EdgeInsets.all(20),
      children: [
        SizedBox(
          height: 40,
        ),
        Row(
          children: [
            Container(
              child: GestureDetector(
                behavior: HitTestBehavior.translucent,
                onTap: () => Navigator.pop(context),
                child: Container(
                  width: 35,
                  height: 35,
                  child: const Padding(
                    padding: EdgeInsets.only(left: 8),
                    child: Icon(
                      Icons.arrow_back_ios,
                      size: 22,
                      color: Colors.grey,
                    ),
                  ),
                ),
              ),
            ),
            Spacer(),
            Text(
              "Settings",
              style: TextStyle(fontSize: 22, fontWeight: FontWeight.w500),
            ),
            SizedBox(
              width: 40,
            ),
            Spacer(),
            GestureDetector(
              onTap: () => showDialog(
                context: context,
                builder: (_) {
                  return LogoutDialog(
                    title: S.of(context).areYouSureYouWantToLogOut,
                    postDelete: () {
                      bloc.logout.then(
                        (value) {
                          return Navigator.pushAndRemoveUntil(context, MaterialPageRoute(
                            builder: (BuildContext context) {
                              return RegistrationScreen();
                            },
                          ), (route) => false);
                        },
                      );
                    },
                  );
                },
              ),
              child: Icon(Icons.logout),
            )
          ],
        ),
        SizedBox(
          height: 20,
        ),
        StreamBuilder<Locale?>(
            stream: bloc.locale,
            builder: (context, snapshot) {
              return getSettingsItem(
                iconName: S.of(context).language,
                text: S.of(context).language,
                trailing: Row(children: [
                  SizedBox(
                    width: 10,
                  ),
                  Icon(Icons.keyboard_arrow_right_rounded)
                ]),
                onTap: () => _showMenu(snapshot.data),
              );
            }),
        SizedBox(
          height: 20,
        ),
        getSettingsItem(
          iconName: 'publish',
          text: S.of(context).publicProfile,
          trailing: Row(
            children: [
              Text(
                switchValue == true ? S.of(context).on : S.of(context).off,
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.w500, color: Colors.grey),
              ),
              SizedBox(
                width: 10,
              ),
              CupertinoSwitch(
                value: switchValue,
                onChanged: (value) {
                  setState(() {
                    switchValue = value;
                    if (switchValue == true) {
                      bloc.updateUserInfo(1);
                    } else {
                      bloc.updateUserInfo(0);
                    }
                  });
                },
              ),
            ],
          ),
          onTap: () {},
        ),
        SizedBox(
          height: 20,
        ),
        getSettingsItem(
          iconName: 'set_support',
          text: S.of(context).support,
          trailing: Icon(Icons.keyboard_arrow_right_rounded),
          onTap: () => _launchURL("+994514118444"),
        ),
      ],
    );
  }

  @override
  SettingsBloc provideBloc() {
    return SettingsBloc(widget.user);
  }

  void _showMenu(Locale? locale) {
    if (locale != null) {
      showModalBottomSheet(
        context: context,
        isScrollControlled: true,
        shape: const RoundedRectangleBorder(
          borderRadius: BorderRadius.only(topLeft: Radius.circular(35), topRight: Radius.circular(35)),
        ),
        builder: (_) => LocalizationPopUp(
          onChanged: bloc.setLocale,
          currentLocale: locale,
        ),
      );
    }
  }

  Future<void> _launchURL(String url) async {
    print("object");
    if (!await launch("tel://$url")) {
      throw 'Could not launch';
    }
  }
}
