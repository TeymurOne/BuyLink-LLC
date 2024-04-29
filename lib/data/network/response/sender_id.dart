import 'package:json_annotation/json_annotation.dart';

part 'sender_id.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class SenderId {
  final String? image;
  final String? email;
  final String? name;
  final String? username;
  final String? pendingBalance;
  final String? balance;
  final String? userType;
  final int? isRegistered;
  final int? id;
  final int? fiendsCount;
  final int? friendStatus;
  final int? refererCount;
  final int? partnerId;
  final bool? isPublic;
  final bool? isFriend;




  SenderId({
    this.image,
    this.email,
    this.name,
    this.username,
    this.pendingBalance,
    this.balance,
    this.userType,
    this.isRegistered,
    this.id,
    this.fiendsCount,
    this.friendStatus,
    this.refererCount,
    this.partnerId,
    this.isPublic,
    this.isFriend,
  });

  factory SenderId.fromJson(Map<String, dynamic> json) => _$SenderIdFromJson(json);

  Map<String, dynamic> toJson() => _$SenderIdToJson(this);
}
