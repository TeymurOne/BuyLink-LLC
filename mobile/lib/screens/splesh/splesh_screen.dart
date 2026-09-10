import 'package:buylink_flutter/data/network/response/user.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../../domain/repositories/auth_repository.dart';
import '../../main.dart';
import '../../presentation/resourses/app_colors.dart';
import '../home/home_screen.dart';
import '../partner/partner_home_tab/partner_screen.dart';
import '../registration/registration_screen.dart';

int? isviewed;

class SpleshScreen extends StatefulWidget {
  @override
  _SpleshScreenState createState() => _SpleshScreenState();
}

class _SpleshScreenState extends State<SpleshScreen> {

  @override
  void initState() {
    super.initState();

    Future.wait([
      Future.delayed(
        const Duration(seconds: 3),
      ),
      sl.get<AuthRepository>().isLogged(),
    ]).then((value) {
      if (value.last) {
        return getVersion().then((value) {
          if (value?.userType == "partner") {
            return Navigator.pushReplacement(context,
                MaterialPageRoute(builder: (BuildContext context) {
              return PartnerHomeScreen();
            }));
          }
          return Navigator.pushReplacement(context,
              MaterialPageRoute(builder: (BuildContext context) {
            return HomeScreen();
          }));
        });
      } else {
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(
            builder: (BuildContext context) {
              return RegistrationScreen();
            },
          ),
        );
      }
    });
  }

  Future<User?> getVersion() async {
    final response = await sl.get<AuthRepository>().getUserDetails();
    return response.data;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: AppColors.appColor,
        alignment: Alignment.center,
        child: Center(
          child: Container(
            height: 150,
            child: AspectRatio(
              aspectRatio: 1,
              child: ClipRRect(
                borderRadius: BorderRadius.circular(100),
                child: Image.asset(
                  'assets/vector/logo.jpg',
                  fit: BoxFit.fitWidth,
                  width: 50,
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
