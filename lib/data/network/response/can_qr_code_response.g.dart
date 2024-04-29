// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'can_qr_code_response.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ScanQRCodeResponse _$ScanQRCodeResponseFromJson(Map<String, dynamic> json) =>
    ScanQRCodeResponse(
      date: DateTime.parse(json['date'] as String),
      initialPrice: json['initial_price'] as String,
      discount: json['discount'] as int,
      discountedAmount: (json['discounted_amount'] as num).toDouble(),
    );

Map<String, dynamic> _$ScanQRCodeResponseToJson(ScanQRCodeResponse instance) =>
    <String, dynamic>{
      'discounted_amount': instance.discountedAmount,
      'date': instance.date.toIso8601String(),
      'initial_price': instance.initialPrice,
      'discount': instance.discount,
    };
