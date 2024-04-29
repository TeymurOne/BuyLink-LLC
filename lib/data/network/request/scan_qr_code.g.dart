// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'scan_qr_code.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ScanQRCodeRequest _$ScanQRCodeRequestFromJson(Map<String, dynamic> json) =>
    ScanQRCodeRequest(
      uuid: json['uuid'] as String,
      amount: json['amount'] as String,
    );

Map<String, dynamic> _$ScanQRCodeRequestToJson(ScanQRCodeRequest instance) =>
    <String, dynamic>{
      'uuid': instance.uuid,
      'amount': instance.amount,
    };
