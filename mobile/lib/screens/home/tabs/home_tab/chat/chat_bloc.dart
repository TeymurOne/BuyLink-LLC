import 'dart:async';

import 'package:buylink_flutter/presentation/bloc/base_bloc.dart';
import 'package:rxdart/rxdart.dart';

import '../../../../../data/network/response/conversation_list_response.dart';
import '../../../../../domain/repositories/auth_repository.dart';
import '../../../../../main.dart';

class ChatBloc extends BaseBloc {
  final authRepository = sl.get<AuthRepository>();

  late final PublishSubject<ConversationListResponse> conversationList = PublishSubject();
  late final Timer timer;

  @override
  void init() {
    super.init();
    // timer = Timer.periodic(Duration(seconds: 3), (Timer t) => load(shoLoaded: false));
    load();
  }

  Future<void> load({bool shoLoaded = true}) {
    return run(authRepository.conversationList(), shoLoaded: shoLoaded).then(
      (value) => conversationList.add(value),
    );
  }

  @override
  void dispose() {
    timer.cancel();
    super.dispose();
  }
}
