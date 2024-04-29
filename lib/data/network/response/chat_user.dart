import 'package:json_annotation/json_annotation.dart';

part 'chat_user.g.dart';

@JsonSerializable()
class ChatUser {
  final int id;
  final String name;
  final String? image;

  ChatUser({required this.id, this.image, required this.name});

  factory ChatUser.fromJson(Map<String, dynamic> json) => _$ChatUserFromJson(json);

  Map<String, dynamic> toJson() => _$ChatUserToJson(this);
}
