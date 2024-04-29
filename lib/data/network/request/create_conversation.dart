import 'package:json_annotation/json_annotation.dart';

part 'create_conversation.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class CreateConversation {
  final int recipientId;

  CreateConversation({required this.recipientId});

  factory CreateConversation.fromJson(Map<String, dynamic> json) =>
      _$CreateConversationFromJson(json);

  Map<String, dynamic> toJson() => _$CreateConversationToJson(this);
}
