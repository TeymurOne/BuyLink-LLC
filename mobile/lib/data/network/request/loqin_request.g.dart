// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'loqin_request.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

LoqinRequest _$LoqinRequestFromJson(Map<String, dynamic> json) => LoqinRequest(
      phone: json['phone'] as String,
      verificationCode: json['verification_code'] as String,
    );

Map<String, dynamic> _$LoqinRequestToJson(LoqinRequest instance) =>
    <String, dynamic>{
      'phone': instance.phone,
      'verification_code': instance.verificationCode,
    };
