// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'transaction_claim_data.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

TransactionClaimData _$TransactionClaimDataFromJson(
        Map<String, dynamic> json) =>
    TransactionClaimData(
      data: TransactionClaim.fromJson(json['data'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$TransactionClaimDataToJson(
        TransactionClaimData instance) =>
    <String, dynamic>{
      'data': instance.data,
    };
