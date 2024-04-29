import 'dart:async';

import 'package:buylink_flutter/presentation/bloc/base_bloc.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:rxdart/rxdart.dart';

import '../../../../../../data/network/request/send_message_request.dart';
import '../../../../../../data/network/response/message.dart';
import '../../../../../../domain/repositories/auth_repository.dart';
import '../../../../../../main.dart';
import '../../../../../../utils/notifications_payload_helper.dart';

class ChatUserBloc extends BaseBloc {
  final authRepository = sl.get<AuthRepository>();
  final int? conversationId;
  final int userId;
  bool isRunning = false;

  ChatUserBloc(this.conversationId, this.userId);

  final BehaviorSubject<List<Message>> messages = BehaviorSubject();

  @override
  void init() {
    super.init();

    _getMessages();
  }

  void handlePushMessage(RemoteMessage event) {
    print("on Message inside chat bloc ${event.notification?.title}");
    final deeplink = event.data["deeplink"];
    final (chatId, _) = getChatPayload(deeplink);

    if (event.data["title"] == "Message" && chatId == conversationId) {
      _getMessages();
    }
  }

  void _getMessages() {
    isRunning = true;
    authRepository.messages(conversationId).then(messages.add).whenComplete(() => isRunning = false);
  }

  @override
  void dispose() {
    super.dispose();
    messages.close();
  }

  Future<void> sendMessage(String message) async {
    await authRepository.sendMessages(SendMessageRequest(recipientId: userId, text: message));
    _getMessages();
  }

  removeMessage(Message message) {
    final messages = this.messages.valueOrNull;
    if (messages != null) {
      messages.remove(message);
      this.messages.add(messages);
    }
  }
}
