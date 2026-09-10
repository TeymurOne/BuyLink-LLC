import 'dart:ui';

import 'package:buylink_flutter/data/network/response/user.dart';
import 'package:buylink_flutter/presentation/bloc/base_bloc.dart';

import '../../../../../data/cache/cache_manager.dart';
import '../../../../../data/network/request/updateUser_data_request.dart';
import '../../../../../domain/repositories/auth_repository.dart';
import '../../../../../main.dart';

class SettingsBloc extends BaseBloc {
  final authRepository = sl.get<AuthRepository>();
  final User user;
  final CacheManager _cacheManager = sl.get<CacheManager>();

  SettingsBloc(this.user);

  late final Future<void> logout = authRepository.logout();

  Future<void> updateUserInfo(int isPublic) async {
    return authRepository.updateUserData(
        UpdateUserDataRequest(name: user.name, username: user.username ?? "", email: user.email, isPublic: isPublic));
  }

  late final Stream<Locale?> locale = _cacheManager.locale;

  void setLocale(Locale locale) {
    _cacheManager.saveLocale(locale);
  }
}
