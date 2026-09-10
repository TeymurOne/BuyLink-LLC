import 'package:hive_flutter/adapters.dart';
import 'package:json_annotation/json_annotation.dart';
import 'package:json_annotation/json_annotation.dart';

part 'partner_user.g.dart';

@JsonSerializable()
class PartnerUser {
  final int id;
  final String name;
  final String? username;
  final String email;
  @JsonKey(name: "is_registered")
  final String? isRegistered;
  final DateTime? birth;
  final String? image;
  @JsonKey(name: "is_public")
  final String? isPublic;
  final String? balance;

  PartnerUser({
    this.isPublic,
    required this.username,
    required this.isRegistered,
    this.birth,
    this.image,
    required this.id,
    required this.name,
    required this.balance,
    required this.email,
  });


  factory PartnerUser.fromJson(Map<String, dynamic> json) =>
      _$PartnerUserFromJson(json);

  Map<String, dynamic> toJson() => _$PartnerUserToJson(this);

}
