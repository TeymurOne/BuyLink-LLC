// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'transactions_data.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

TransactionsData _$TransactionsDataFromJson(Map<String, dynamic> json) =>
    TransactionsData(
      data: (json['data'] as List<dynamic>)
          .map((e) => Transactions.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$TransactionsDataToJson(TransactionsData instance) =>
    <String, dynamic>{
      'data': instance.data,
    };
