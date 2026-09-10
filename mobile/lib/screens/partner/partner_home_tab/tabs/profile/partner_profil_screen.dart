import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/screens/partner/partner_home_tab/tabs/profile/partner_profil_bloc.dart';
import 'package:buylink_flutter/screens/partner/partner_home_tab/tabs/profile/widget/partner_balance.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:url_launcher/url_launcher.dart';
import '../../../../../data/network/response/partner_details.dart';
import '../../../../../data/network/response/partner_profil_data.dart';
import '../../../../../data/network/response/user.dart';
import '../../../../../generated/l10n.dart';
import '../../../../../utils/util.dart';
import '../../../../home/tabs/profil_tab/logout_dialog.dart';
import '../../../../registration/registration_screen.dart';

class PartnerProfilScreen extends BaseScreen {
  const PartnerProfilScreen({Key? key}) : super(key: key);

  @override
  State<PartnerProfilScreen> createState() => _PartnerProfilScreenState();
}

class _PartnerProfilScreenState extends BaseState<PartnerProfilScreen, PartnerProfilBloc> {
  @override
  Widget body() {
    return StreamBuilder<User>(
      stream: bloc.userDetails,
      builder: (context, snap) {
        if (snap.hasData) {
          return FutureBuilder<PartnerProdileData>(
            future: bloc.partnerDetails(snap.requireData.partnerId.toString()),
            builder: (_, snapshot) {
              if (snapshot.hasData) {
                return Padding(
                  padding: EdgeInsets.all(24),
                  child: ListView(children: [
                    Row(
                      children: [
                        Container(
                          height: 73,
                          width: 73,
                          child: AspectRatio(
                            aspectRatio: 1,
                            child: ClipRRect(
                              borderRadius: BorderRadius.circular(100),
                              child: Image.network(
                                snap.requireData.image ??
                                    'https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Tynan-Allan.jpeg',
                                fit: BoxFit.cover,
                              ),
                            ),
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(left: 10),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                snap.requireData.name,
                                style: TextStyle(fontWeight: FontWeight.w400, fontSize: 18),
                              ),
                              Text(
                                S.of(context).personalInfo,
                                style: TextStyle(fontWeight: FontWeight.w300, fontSize: 14),
                              ),
                            ],
                          ),
                        ),
                        const Spacer(),
                        GestureDetector(
                          onTap: () =>
                              showDialog(
                                context: context,
                                builder: (_) {
                                  return LogoutDialog(
                                    title: '',
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
                        crossAxisAlignment: CrossAxisAlignment.start,
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Container(
                            height: 104,
                            width: 104,
                            child: AspectRatio(
                              aspectRatio: 1,
                              child: ClipRRect(
                                borderRadius: BorderRadius.circular(10),
                                child: Image.network(
                                  snapshot.requireData.data.image ??
                                      'https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Tynan-Allan.jpeg',
                                  fit: BoxFit.cover,
                                ),
                              ),
                            ),
                          ),
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Padding(
                                padding: const EdgeInsets.only(left: 15, top: 10),
                                child: Text(
                                  snapshot.requireData.data.title ?? "null",
                                  style: TextStyle(fontSize: 24, fontWeight: FontWeight.w500),
                                ),
                              ),
                              Padding(
                                padding: const EdgeInsets.only(left: 15, top: 10),
                                child: Row(
                                  children: [
                                    Icon(
                                      Icons.location_on,
                                      color: Colors.black54,
                                    ),
                                    Text(
                                      S.of(context).addres,
                                      style: TextStyle(fontSize: 22, fontWeight: FontWeight.w400),
                                    ),
                                  ],
                                ),
                              ),
                            ],
                          )
                        ],
                      ),
                    ),
                    SizedBox(
                      height: 40,
                    ),


                    FutureBuilder<PartnerDetails>(
                      future: bloc.partnerDetailsById(snap.requireData.partnerId.toString()),
                      builder: (_, snapshot) {
                        if (snapshot.hasData) {
                          final snap = snapshot.requireData.data;
                          return   Column(
                            children: [
                              Stack(
                                children: [
                                  Image.asset("assets/vector/bcag1.png"),
                                  Padding(
                                    padding: EdgeInsets.only(left: MediaQuery
                                        .of(context)
                                        .size
                                        .width * 0.15, top: 5),
                                    child: Text(
                                      "${snap.userDiscount}%",
                                      style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 30),
                                    ),
                                  )
                                ],
                              ),
                              SizedBox(
                                height: 15,
                              ),
                              Stack(
                                children: [
                                  Image.asset("assets/vector/bcag2.png"),
                                  Positioned(
                                    right: 0,
                                    child: Padding(
                                      padding: EdgeInsets.only(right: MediaQuery
                                          .of(context)
                                          .size
                                          .width * 0.13, top: 5),
                                      child: Text(
                                        "${snap.commission}%",
                                        style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 30),
                                      ),
                                    ),
                                  )
                                ],
                              ),
                            ],
                          );
                        }
                        return SizedBox();
                      },
                    ),



                    Container(
                      margin: EdgeInsets.only(top: 30),
                      padding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
                      decoration: BoxDecoration(
                          color: CustomColors.lightGray3,
                          borderRadius: BorderRadius.circular(8),
                          boxShadow: [
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
                            padding: EdgeInsets.all(3),
                            child: SvgPicture.asset('assets/vector/language.svg')),
                        SizedBox(
                          width: 20,
                        ),
                        Expanded(
                            child: Text(
                              S.of(context).language,
                              style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
                            )),
                        Row(children: [
                          Text(
                            S.of(context).english,
                          ),
                          SizedBox(
                            width: 10,
                          ),
                          Icon(Icons.keyboard_arrow_right_rounded)
                        ])
                      ]),
                    ),
                    GestureDetector(
                      onTap: () => _launchURL("+994514118444"),
                      child: Container(
                        margin: EdgeInsets.only(top: 15),
                        padding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
                        decoration: BoxDecoration(
                            color: CustomColors.lightGray3,
                            borderRadius: BorderRadius.circular(8),
                            boxShadow: [
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
                              padding: EdgeInsets.all(3),
                              child: Image.asset('assets/vector/suppr.png')),
                          SizedBox(
                            width: 20,
                          ),
                          Expanded(
                              child: Text(
                                S.of(context).support,
                                style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
                              )),
                          Row(children: [
                            SizedBox(
                              width: 10,
                            ),
                            Icon(Icons.keyboard_arrow_right_rounded)
                          ])
                        ]),
                      ),
                    ),
                  ]),
                );
              }
              return Text(snap.requireData.partnerId.toString());
            },
          );
        }
        return Text(S.of(context).snaprequiredatapartneridtostring);
      },
    );
  }

  @override
  PartnerProfilBloc provideBloc() {
    return PartnerProfilBloc();
  }

  Future<void> _launchURL(String url) async {
    print("object");
    if (!await launch("tel://$url")) {
      throw 'Could not launch';
    }
  }
}
