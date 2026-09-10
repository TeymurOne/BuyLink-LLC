import 'dart:io';

import 'package:buylink_flutter/presentation/bloc/error_dispatcher.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/user_details_edit/widget/user_avatar.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/user_details_edit/user_details_bloc.dart';
import 'package:buylink_flutter/screens/registration/registration_screen.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

import '../../../../../data/network/response/user.dart';
import '../../../../../generated/l10n.dart';
import '../../../../../presentation/bloc/base_screen.dart';
import '../../../../../presentation/common/image_selector.dart';
import '../../../../../presentation/common/input_with_suffix_icon.dart';
import '../../../../../presentation/resourses/app_colors.dart';
import '../../../home_screen.dart';
import '../logout_dialog.dart';
import 'widget/category_navigator_pop.dart';

class UserDetailsEditScreen extends BaseScreen {
  final User user;
  final int? isPublic;
  final bool isRegistered;

  UserDetailsEditScreen({this.isRegistered = false, this.isPublic, required this.user});

  @override
  State<UserDetailsEditScreen> createState() => _UserDetailsEditScreenState();
}

class _UserDetailsEditScreenState extends BaseState<UserDetailsEditScreen, UserDetailsEditBloc> with ErrorDispatcher {
  final ValueNotifier<bool> _valueNotifier = ValueNotifier(false);
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _firstNameController = TextEditingController();
  final TextEditingController _mailController = TextEditingController();

  @override
  void initState() {
    super.initState();
    _nameController.text = widget.user.name;
    bloc.name = widget.user.name;
    _nameController.addListener(() {
      bloc.name = _nameController.text;
    });
    _firstNameController.text = widget.user.username ?? "";
    bloc.username = widget.user.username ?? "";
    _firstNameController.addListener(() {
      bloc.username = _firstNameController.text;
    });
    _mailController.text = widget.user.email ?? "";
    bloc.email = widget.user.email ?? "";
    _mailController.addListener(() {
      bloc.email = _mailController.text;
    });
    bloc.imageUrl = widget.user.image;
  }

  @override
  Widget body() {
    return ListView(
      children: [
        Padding(
          padding: const EdgeInsets.only(left: 20, right: 20, top: 27),
          child: CategoryNavigatorPop(
            title: S.of(context).accountInformation,
          ),
        ),
        Center(
          child: Stack(
            children: [
              Container(
                clipBehavior: Clip.antiAlias,
                margin: EdgeInsets.only(top: 20),
                decoration: BoxDecoration(borderRadius: BorderRadius.circular(100)),
                width: MediaQuery.of(context).size.width * 0.3,
                height: MediaQuery.of(context).size.height * 0.15,
                child: GestureDetector(
                    onTap: () {
                      _selectImage();
                    },
                    child: StreamBuilder<File>(
                        stream: bloc.userAvatar,
                        builder: (context, snapshot) {
                          return UserAvatar(
                            file: snapshot.data,
                            imgUrl: bloc.imageUrl,
                          );
                        })),
              ),
              Container(
                  width: 28,
                  height: 28,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(30),
                  ),
                  margin: EdgeInsets.only(
                    left: MediaQuery.of(context).size.width * 0.22,
                    top: 20 + MediaQuery.of(context).size.height * 0.11,
                  ),
                  child: Icon(
                    Icons.camera_alt,
                    color: Colors.white,
                    size: 16,
                  ))
            ],
          ),
        ),
        Padding(
          padding: const EdgeInsets.only(top: 10),
          child: Column(
            children: [
              TextInputWithIcon(
                labelText: S.of(context).ad,
                controller: _nameController,
              ),
              TextInputWithIcon(
                labelText: S.of(context).soyad,
                controller: _firstNameController,
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
                          )),
                      onPressed: _validate,
                      child: Text(
                        S.of(context).yaddaSaxla,
                        style: TextStyle(
                            color: value ? Colors.white : Colors.white, fontWeight: FontWeight.w600, fontSize: 22),
                      ),
                    );
                  },
                ),
              ),
              if(widget.isRegistered)
              Container(
                height: 60,
                width: double.infinity,
                margin: EdgeInsets.only(bottom: 50, left: 18, right: 18),
                decoration: BoxDecoration(
                    border: Border.all(
                      color: Colors.white,
                    ),
                    borderRadius: BorderRadius.circular(10)),
                child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                      disabledBackgroundColor: Colors.red,
                      padding: EdgeInsets.only(bottom: 15, top: 15),
                      backgroundColor: Colors.red,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(15.0),
                      ),
                      textStyle: const TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      )),
                  onPressed: () => showDialog(
                    context: context,
                    builder: (_) {
                      return LogoutDialog(
                        title: S.of(context).akkauntuSilmekEminsinizmi,
                        postDelete: () {
                          bloc.deletedAkkauntt().then(
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
                  child: Text(
                    S.of(context).accauntSil,
                    style: TextStyle(color: Colors.white, fontWeight: FontWeight.w600, fontSize: 22),
                  ),
                ),
              ),
            ],
          ),
        )
      ],
    );
  }

  @override
  UserDetailsEditBloc provideBloc() {
    return UserDetailsEditBloc(widget.user,);
  }

  Future<void> _selectImage() async {
    final source = await showSelectImageSourceAlert(context);
    if (source != null) {
      final image = await ImagePicker().pickImage(source: source);
      if (image != null) {
        await bloc.onImageSelected(File(image.path));
      }
    }
  }

  Future<void> _validate() async {
    bloc.updateUserInfo(widget.isPublic).then((value) async {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
          content: Text(S.of(context).mlumatUurlaYenilndi),
        ));
        Navigator.pushReplacement(context, MaterialPageRoute(builder: (BuildContext context) => HomeScreen()));
      }
    });
  }
}
