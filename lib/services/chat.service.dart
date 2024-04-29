// // wss://api.teammers.com/message/ffc2d65670f44ddaba5a186409c00327/false/?eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0MjQ2MDU0LCJqdGkiOiI5YjU1MWFmMzU4ZTQ0ZGRiOGIxOTc3NTMxYmM1YzcwNSIsInVzZXJfaWQiOjE1MDg1fQ.DmOgDfod0M5sYWdwbo9RS2NQ_uOe3WiMN3pPa8u5fCo
// import 'dart:convert';

// import 'package:mashinal/model/rough/messaging.dart';
// import 'package:mashinal/state/chat.state.dart';
// import 'package:mashinal/utils/util.dart';
// import 'package:pusher_client/pusher_client.dart';

// import 'local_data.service.dart';

// class ChatService {
//   static ChatService _instance;

//   static ChatService get getInstance =>
//       _instance = _instance ?? ChatService._();
//   ChatService._();

//   PusherClient pusherClient;
//   Channel myChannel, myTypingChannel, interlocutorChannel;
//   Function(MessageGroup, Message) onMessageReceived;
//   Function(Typing) onTyping;
//   Function() onInit;
//   ChatState chatState;
//   init() {
//     _initPusher();
//   }

//   subscribe(
//       {Function(MessageGroup, Message) onMessageReceived,
//       Function(Typing) onTyping}) {
//     this.onMessageReceived = onMessageReceived;
//     this.onTyping = onTyping;
//   }

//   _initPusher() async {
//     PusherOptions options = PusherOptions(
//       host: Util.chatHost,
//       wsPort: 6001,
//       wssPort: 6001,
//       encrypted: true,
//       auth: PusherAuth(
//         Util.chatAuthUrl,
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' +
//               // 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbWFzaGluLmFsXC9hcGlcL3JlZnJlc2giLCJpYXQiOjE2MTAxMDMyMTAsImV4cCI6MTYxMTA2MDkyMywibmJmIjoxNjExMDU3MzIzLCJqdGkiOiIzS0pqWlFoTmtxbDVueXFJIiwic3ViIjoxMDU4LCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.UPSEgAZUBHqC8X5ZrhHfAFPz99CWDiIhAkv-UWxPjLU',
//               LocalData.getInstance.token
//         },
//       ),
//     );
//     pusherClient =
//         PusherClient('any', options, autoConnect: false, enableLogging: true);

//     pusherClient.onConnectionError((error) {
//       print(error.exception);
//       print(error.message);
//     });
//     pusherClient.onConnectionStateChange((state) {
//       print(state.currentState);
//       // state.
//     });

//     await pusherClient
//         .unsubscribe('private-typing.${LocalData.getInstance.user.id}');
//     await pusherClient
//         .unsubscribe('private-user.${LocalData.getInstance.user.id}');

//     myTypingChannel = pusherClient.subscribe(
//       'private-typing.${LocalData.getInstance.user.id}',
//     );

//     myChannel = pusherClient.subscribe(
//       'private-user.${LocalData.getInstance.user.id}',
//     );

//     await myTypingChannel.bind('client-typing', (PusherEvent event) {
//       final t = Typing.fromJson(json.decode(event.data));
//       print(t);
//       onTyping(t);
//     });
//     await myChannel.bind('App\\Events\\SendMessage', (event) {
//       print(event.data);
//       var mg = MessageGroup.fromJson(json.decode(event.data)['group']);
//       final message = Message.fromJson(json.decode(event.data)['message']);
//       mg.lastMessage = message;
//       onMessageReceived(mg, message);
//     });

//     pusherClient.connect();
//   }

//   void subscribeForTyping(int id) async {
//     // if(pusherClient.)
//     await unsubscribeForTyping(id);
//     interlocutorChannel = pusherClient.subscribe('private-typing.$id');
//   }

//   Future unsubscribeForTyping(int id) async {
//     return pusherClient.unsubscribe('private-typing.$id');
//   }

//   void closeConnection() {
//     if (myChannel != null) pusherClient.unsubscribe(myChannel.name);
//     if (myTypingChannel != null) pusherClient.unsubscribe(myTypingChannel.name);
//     if (interlocutorChannel != null)
//       pusherClient.unsubscribe(interlocutorChannel.name);
//     if (pusherClient != null) {
//       pusherClient.disconnect();
//     }
//   }

//   void toggleWritingPromt(int chatId, int announceId, bool typing) {
//     // interlocutorChannel.
//     interlocutorChannel.trigger(
//       'typing',
//       json.encode(
//         {
//           'userId': LocalData.getInstance.user.id,
//           // 'userId': chatState.chats[chatId].interlocutor.id,
//           'announceId': announceId,
//           'typing': typing,
//           'sendingAttachment': false
//         },
//       ),
//     );
//   }

//   void logoutFromChat() {
//     closeConnection();
//     chatState?.logout();
//   }
// }
