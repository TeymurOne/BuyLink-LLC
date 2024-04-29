// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'transaction_partnr.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

TransactionPartner _$TransactionPartnerFromJson(Map<String, dynamic> json) =>
    TransactionPartner(
      id: json['id'] as int,
      profit: (json['profit'] as num).toDouble(),
      amount: (json['amount'] as num).toDouble(),
      discountedAmount: json['discounted_amount'] as String,
      discountedPercent: json['discounted_percent'] as String,
      createdAt: DateTime.parse(json['created_at'] as String),
      type: json['type'] as String,
      partner: Partner.fromJson(json['partner'] as Map<String, dynamic>),
      user: PartnerUser.fromJson(json['user'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$TransactionPartnerToJson(TransactionPartner instance) =>
    <String, dynamic>{
      'id': instance.id,
      'profit': instance.profit,
      'amount': instance.amount,
      'discounted_amount': instance.discountedAmount,
      'discounted_percent': instance.discountedPercent,
      'created_at': instance.createdAt.toIso8601String(),
      'type': instance.type,
      'partner': instance.partner,
      'user': instance.user,
    };
