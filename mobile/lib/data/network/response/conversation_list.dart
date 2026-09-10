import 'chat_user.dart';
import 'package:json_annotation/json_annotation.dart';

import 'last_message.dart';

part 'conversation_list.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class ConversationList {
  final int id;
  final int unreadMessageCount;
  final ChatUser user;
  final LastMessage? lastMessage;


  ConversationList({required this.id, required this.user, required this.unreadMessageCount,  this.lastMessage});

  factory ConversationList.fromJson(Map<String, dynamic> json) =>
      _$ConversationListFromJson(json);

  Map<String, dynamic> toJson() => _$ConversationListToJson(this);
}
