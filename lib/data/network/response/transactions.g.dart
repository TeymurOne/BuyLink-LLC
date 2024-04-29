// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'transactions.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Transactions _$TransactionsFromJson(Map<String, dynamic> json) => Transactions(
      id: json['id'] as int,
      profit: (json['profit'] as num).toDouble(),
      amount: json['amount'] as int,
      discountedAmount: json['discounted_amount'] as String,
      discountedPercent: json['discounted_percent'] as String,
      createdAt: DateTime.parse(json['created_at'] as String),
      partner: json['partner'] == null
          ? null
          : Partner.fromJson(json['partner'] as Map<String, dynamic>),
      user: json['user'] == null
          ? null
          : User.fromJson(json['user'] as Map<String, dynamic>),
      referer: json['referer'] == null
          ? null
          : Referer.fromJson(json['referer'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$TransactionsToJson(Transactions instance) =>
    <String, dynamic>{
      'id': instance.id,
      'profit': instance.profit,
      'discounted_amount': instance.discountedAmount,
      'discounted_percent': instance.discountedPercent,
      'amount': instance.amount,
      'created_at': instance.createdAt.toIso8601String(),
      'partner': instance.partner,
      'user': instance.user,
      'referer': instance.referer,
    };
