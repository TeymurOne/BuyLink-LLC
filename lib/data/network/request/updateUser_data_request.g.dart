// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'updateUser_data_request.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

UpdateUserDataRequest _$UpdateUserDataRequestFromJson(
        Map<String, dynamic> json) =>
    UpdateUserDataRequest(
      register: json['register'] as int?,
      isPublic: json['is_public'] as int?,
      name: json['name'] as String,
      username: json['username'] as String,
      email: json['email'] as String,
    );

Map<String, dynamic> _$UpdateUserDataRequestToJson(
        UpdateUserDataRequest instance) =>
    <String, dynamic>{
      'name': instance.name,
      'username': instance.username,
      'email': instance.email,
      'is_public': instance.isPublic,
      'register': instance.register,
    };
