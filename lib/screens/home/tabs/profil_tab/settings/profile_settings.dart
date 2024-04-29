import 'package:buylink_flutter/presentation/resourses/app_colors.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/settings/profil_settings_bloc.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/settings/settings_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/user_details_edit/user_details_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter_svg/svg.dart';
import '../../../../../data/network/response/user.dart';
import '../../../../../generated/l10n.dart';
import '../../../../../presentation/bloc/base_screen.dart';
import '../../../../../state/app.state.dart';
import '../../../../registration/registration_screen.dart';
import '../logout_dialog.dart';
import '../network/network_screen.dart';


class ProfileSettings extends BaseScreen {
  const ProfileSettings({super.key});

  @override
  State<ProfileSettings> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends BaseState<ProfileSettings, ProfilBloc> {
  @override
  Widget body() {
    return Container(
      color: Colors.white,
      child: StreamBuilder<User>(
        stream: bloc.userDetails,
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return Padding(
              padding: EdgeInsets.only(left: 20, right: 20, top: 16),
              child: ListView(children: [
                Row(
                  children: [
                    Text(
                      S.of(context).profile,
                      style: TextStyle(fontSize: 24, fontWeight: FontWeight.w500),
                    ),
                    const Spacer(),
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
                Padding(
                  padding: const EdgeInsets.only(top: 20),
                  child: Row(
                    children: [
                      Container(
                        height: 80,
                        width: 80,
                        child: AspectRatio(
                          aspectRatio: 1,
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(100),
                            child: Image.network(
                              snapshot.requireData.image ??
                                  'https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Tynan-Allan.jpeg',
                              fit: BoxFit.cover,
                            ),
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(left: 15),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              snapshot.requireData.username ?? "null",
                              style: TextStyle(fontSize: 24, fontWeight: FontWeight.w500),
                            ),
                            Text(snapshot.requireData.name ?? "null",
                                style: TextStyle(fontSize: 16, fontWeight: FontWeight.w400, color: Colors.black45)),
                          ],
                        ),
                      )
                    ],
                  ),
                ),
                SizedBox(
                  height: 24,
                ),
                GestureDetector(
                  behavior: HitTestBehavior.translucent,
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (BuildContext context) => UserDetailsEditScreen(user: snapshot.requireData,isRegistered: true,),),),
                  child: MenuItem(
                    icon: 'assets/vector/smile.svg',
                    title: S.of(context).account,
                    desc: S.of(context).changeYourAccountInformation,
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(top: 16),
                  child: GestureDetector(
                    behavior: HitTestBehavior.translucent,
                    onTap: () => Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (BuildContext context) => NetworkScreen(),
                      ),
                    ),
                    child: MenuItem(
                      icon: 'assets/vector/info.svg',
                      title: S.of(context).network,
                      desc: S.of(context).manageYourContactsList,
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(top: 16),
                  child: GestureDetector(
                    behavior: HitTestBehavior.translucent,
                    onTap: () => Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (BuildContext context) => SettingsScreen(
                              user: snapshot.requireData,
                            ))),
                    child: MenuItem(
                      icon: 'assets/vector/ser1.svg',
                      title: S.of(context).settings,
                      desc: S.of(context).manageYourAppDetails,
                    ),
                  ),
                ),
              ]),
            );
          }
          return const SizedBox();
        },
      ),
    );

  }

  @override
  ProfilBloc provideBloc() {
    return ProfilBloc();
  }
}

class MenuItem extends StatelessWidget {
  final String icon;
  final String title;
  final String desc;

  const MenuItem({Key? key, required this.icon, required this.title, required this.desc}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Container(
            padding: EdgeInsets.all(10),
            width: 46,
            height: 46,
            decoration: BoxDecoration(borderRadius: BorderRadius.circular(50), color: Colors.grey.withOpacity(0.1)),
            child: SvgPicture.asset(
              icon,
              color: AppColors.appColor,
            )),
        Padding(
          padding: const EdgeInsets.only(left: 15),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                title,
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.w500),
              ),
              Text(desc, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w400, color: Colors.black45)),
            ],
          ),
        )
      ],
    );
  }
}
