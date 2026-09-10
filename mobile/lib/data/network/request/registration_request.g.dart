// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'registration_request.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

RegistrationRequest _$RegistrationRequestFromJson(Map<String, dynamic> json) =>
    RegistrationRequest(
      name: json['name'] as String,
      surname: json['surname'] as String,
      fatherName: json['father_name'] as String,
      finCode: json['fin_code'] as String,
      address: json['address'] as String,
      password: json['password'] as String,
      password_confirmation: json['password_confirmation'] as String,
    );

Map<String, dynamic> _$RegistrationRequestToJson(
        RegistrationRequest instance) =>
    <String, dynamic>{
      'name': instance.name,
      'surname': instance.surname,
      'father_name': instance.fatherName,
      'fin_code': instance.finCode,
      'address': instance.address,
      'password': instance.password,
      'password_confirmation': instance.password_confirmation,
    };
