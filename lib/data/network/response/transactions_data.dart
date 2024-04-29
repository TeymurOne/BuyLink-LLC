import 'package:buylink_flutter/data/network/response/transactions.dart';
import 'package:json_annotation/json_annotation.dart';


part 'transactions_data.g.dart';

@JsonSerializable()
class TransactionsData {
  final List<Transactions> data;

  TransactionsData({required this.data});

  factory TransactionsData.fromJson(Map<String, dynamic> json) =>
      _$TransactionsDataFromJson(json);

  Map<String, dynamic> toJson() => _$TransactionsDataToJson(this);
}
