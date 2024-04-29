// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'transaction_claim.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

TransactionClaim _$TransactionClaimFromJson(Map<String, dynamic> json) =>
    TransactionClaim(
      id: json['id'] as int,
      profit: (json['profit'] as num).toDouble(),
      createdAt: DateTime.parse(json['created_at'] as String),
      partner: PartnerDetailsResponse.fromJson(
          json['partner'] as Map<String, dynamic>),
      amount: (json['amount'] as num).toDouble(),
      discountedAmount: json['discounted_amount'] as String,
      discountedPercent: json['discounted_percent'] as String?,
    );

Map<String, dynamic> _$TransactionClaimToJson(TransactionClaim instance) =>
    <String, dynamic>{
      'id': instance.id,
      'profit': instance.profit,
      'amount': instance.amount,
      'discounted_amount': instance.discountedAmount,
      'created_at': instance.createdAt.toIso8601String(),
      'discounted_percent': instance.discountedPercent,
      'partner': instance.partner,
    };
