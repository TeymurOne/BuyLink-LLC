// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'partner_user.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

PartnerUser _$PartnerUserFromJson(Map<String, dynamic> json) => PartnerUser(
      isPublic: json['is_public'] as String?,
      username: json['username'] as String?,
      isRegistered: json['is_registered'] as String?,
      birth: json['birth'] == null
          ? null
          : DateTime.parse(json['birth'] as String),
      image: json['image'] as String?,
      id: json['id'] as int,
      name: json['name'] as String,
      balance: json['balance'] as String?,
      email: json['email'] as String,
    );

Map<String, dynamic> _$PartnerUserToJson(PartnerUser instance) =>
    <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'username': instance.username,
      'email': instance.email,
      'is_registered': instance.isRegistered,
      'birth': instance.birth?.toIso8601String(),
      'image': instance.image,
      'is_public': instance.isPublic,
      'balance': instance.balance,
    };
