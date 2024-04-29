import 'dart:io';

import 'package:rxdart/rxdart.dart';
import '../../../../../data/network/request/updateUser_data_request.dart';
import '../../../../../data/network/response/register_profile.dart';
import '../../../../../data/network/response/user.dart';
import '../../../../../domain/repositories/auth_repository.dart';
import '../../../../../main.dart';
import '../../../../../presentation/bloc/base_bloc.dart';

class UserDetailsEditBloc extends BaseBloc {
  final authRepository = sl.get<AuthRepository>();
  final PublishSubject<File> userAvatar = PublishSubject();
  final User user;

  UserDetailsEditBloc(this.user) {
    imageUrl = user.image;
  }

  String name = '';
  String username = '';
  String email = '';

  File? images;
  String? imageUrl;

  Future<void> onImageSelected(File file) {
    imageUrl = null;
    images = file;
    userAvatar.add(file);
    return authRepository.uploadImage(file);
  }

  Future<void> updateUserInfo(int? register) async {
    return authRepository.updateUserData(UpdateUserDataRequest(
      register: register,
        name: name,
        username: username,
        email: email,
        isPublic: user.isPublic == true ? 1 : 0));
  }
  late final Stream<User> userDetails =
  ValueConnectableStream(authRepository.userDetails).autoConnect();


Future<void> deletedAkkauntt() => authRepository.profile();
}
