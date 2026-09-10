import 'dart:ui';

import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:rxdart/rxdart.dart';
import 'data/cache/cache_manager.dart';
import 'domain/repositories/auth_repository.dart';
import 'main.dart';
import 'presentation/bloc/base_bloc.dart';

class AppBloc extends BaseBloc {
  final PublishSubject<void> onPacketsAdded = PublishSubject();
  final PublishSubject<void> onDeclarationAdded = PublishSubject();
  final AuthRepository authRepository = sl.get<AuthRepository>();
  final CacheManager cacheManager = sl.get<CacheManager>();
  final PublishSubject<RemoteMessage> messages = PublishSubject();
  int? currentChatId;

  late final ValueStream userDetails =
  ValueConnectableStream(authRepository.userDetails).autoConnect();

  @override
  void dispose() {
    onDeclarationAdded.close();
    onPacketsAdded.close();
    super.dispose();
  }

  late final Stream<Locale?> locale = cacheManager.locale;

  Future<void> setLocale(Locale locale) => cacheManager.saveLocale(locale);

}
