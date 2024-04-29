// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'pay_from_wallet_request.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

PayFromWalletRequest _$PayFromWalletRequestFromJson(
        Map<String, dynamic> json) =>
    PayFromWalletRequest(
      amount: json['amount'] as int,
      id: json['id'] as String,
    );

Map<String, dynamic> _$PayFromWalletRequestToJson(
        PayFromWalletRequest instance) =>
    <String, dynamic>{
      'amount': instance.amount,
      'id': instance.id,
    };
