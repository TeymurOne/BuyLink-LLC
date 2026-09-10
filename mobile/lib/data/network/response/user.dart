import 'package:hive_flutter/adapters.dart';
import 'package:json_annotation/json_annotation.dart';
import 'package:json_annotation/json_annotation.dart';

part 'user.g.dart';

@JsonSerializable()
@HiveType(typeId: 0)
class User extends HiveObject {
  @HiveField(0)
  final int id;
  @HiveField(1)
  final String name;
  @HiveField(2)
  final String? username;
  @HiveField(3)
  final String email;
  @HiveField(4)
  @JsonKey(name: "is_registered")
  final int? isRegistered;
  @HiveField(5)
  final DateTime? birth;
  @HiveField(6)
  final String? image;
  @HiveField(7)
  @JsonKey(name: "is_public")
  final bool? isPublic;
  @HiveField(8)
  final String? balance;
  @HiveField(9)
  @JsonKey(name: "user_type")
  final String? userType;
  @HiveField(10)
  @JsonKey(name: "partner_id")
  final int? partnerId;
  @HiveField(11)
  @JsonKey(name: "pending_balance")
  final String? pendingBalance;
  @HiveField(12)
  @JsonKey(name: "fiends_count")
  final int? fiendsCount;
  @HiveField(13)
  @JsonKey(name: "referer_count")
  final int? refererCount;
  @HiveField(14)
  @JsonKey(name: "transaction_count")
  final int? transactionCount;


  User({
    this.isPublic,
    this.pendingBalance,
    required this.username,
    required this.isRegistered,
    this.birth,
    this.fiendsCount,
    this.refererCount,
    this.transactionCount,
    this.image,
    this.userType,
    required this.id,
    required this.name,
    required this.balance,
    required this.email,
    this.partnerId,
  });

  factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);

  Map<String, dynamic> toJson() => _$UserToJson(this);
}
