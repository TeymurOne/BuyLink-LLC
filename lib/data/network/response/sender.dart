import 'package:buylink_flutter/data/network/response/sender_id.dart';
import 'package:json_annotation/json_annotation.dart';

import 'friend_request.dart';

part 'sender.g.dart';

@JsonSerializable()
class Sender {
  final int id;
  final String image;
  final String email;
  final String username;

  Sender({
    required this.id,
    required this.image,
    required this.email,
    required this.username,
  });

  factory Sender.fromJson(Map<String, dynamic> json) => _$SenderFromJson(json);

  Map<String, dynamic> toJson() => _$SenderToJson(this);
}
