// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'register_profile.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

RegisterProfile _$RegisterProfileFromJson(Map<String, dynamic> json) =>
    RegisterProfile(
      phone: json['phone'] as String,
      username: json['username'] as String,
      birthday: json['birthday'] as String,
      email: json['email'] as String,
      name: json['name'] as String,
    );

Map<String, dynamic> _$RegisterProfileToJson(RegisterProfile instance) =>
    <String, dynamic>{
      'phone': instance.phone,
      'username': instance.username,
      'birthday': instance.birthday,
      'email': instance.email,
      'name': instance.name,
    };
