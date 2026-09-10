import 'package:buylink_flutter/data/network/response/sender_id.dart';
import 'package:json_annotation/json_annotation.dart';

part 'friend_request.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class FriendRequest {
  final int id;
  final int recipientId;
  final int status;
  final SenderId senderId;

  FriendRequest({required this.id, required this.recipientId, required this.status, required this.senderId});

  factory FriendRequest.fromJson(Map<String, dynamic> json) => _$FriendRequestFromJson(json);

  Map<String, dynamic> toJson() => _$FriendRequestToJson(this);
}
