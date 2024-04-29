import 'package:json_annotation/json_annotation.dart';

part 'network_user.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class NetworkUser {
  final String image;
  final String email;
  final String name;
  final String? username;
  final int? isRegistered;
  final int? id;
  final int? fiendsCount;
  final int? refererCount;
  final bool isFriend;
  final int transactionCount;
  final bool isPublic;
  final int? friendStatus;

  NetworkUser({
    required this.image,
    required this.email,
    required this.name,
    this.username,
    required this.isRegistered,
    required this.transactionCount,
    required this.id,
    this.fiendsCount,
    this.refererCount,
    this.friendStatus,
    required this.isFriend,
    required this.isPublic,
  });

  factory NetworkUser.fromJson(Map<String, dynamic> json) => _$NetworkUserFromJson(json);

  Map<String, dynamic> toJson() => _$NetworkUserToJson(this);

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is NetworkUser &&
          runtimeType == other.runtimeType &&
          image == other.image &&
          email == other.email &&
          name == other.name &&
          username == other.username &&
          isRegistered == other.isRegistered &&
          id == other.id &&
          fiendsCount == other.fiendsCount &&
          refererCount == other.refererCount &&
          isFriend == other.isFriend &&
          isPublic == other.isPublic &&
          friendStatus == other.friendStatus;

  @override
  int get hashCode =>
      image.hashCode ^
      email.hashCode ^
      name.hashCode ^
      username.hashCode ^
      isRegistered.hashCode ^
      id.hashCode ^
      fiendsCount.hashCode ^
      refererCount.hashCode ^
      isFriend.hashCode ^
      isPublic.hashCode ^
      friendStatus.hashCode;
}
