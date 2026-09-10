import 'package:buylink_flutter/data/network/response/transaction_partnr.dart';
import 'package:json_annotation/json_annotation.dart';

part 'transaction_data.g.dart';

@JsonSerializable()
class TransactionData{
  final List<TransactionPartner> data;

  TransactionData({required this.data});

  factory TransactionData.fromJson(Map<String, dynamic> json) =>
      _$TransactionDataFromJson(json);

  Map<String, dynamic> toJson() => _$TransactionDataToJson(this);
}