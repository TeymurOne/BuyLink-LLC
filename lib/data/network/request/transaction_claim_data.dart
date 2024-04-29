import 'package:buylink_flutter/data/network/request/transaction_claim.dart';
import 'package:json_annotation/json_annotation.dart';

part 'transaction_claim_data.g.dart';

@JsonSerializable()
class TransactionClaimData{
  final TransactionClaim data;

  TransactionClaimData({required this.data});
  factory TransactionClaimData.fromJson(Map<String, dynamic> json) =>
      _$TransactionClaimDataFromJson(json);

  Map<String, dynamic> toJson() => _$TransactionClaimDataToJson(this);
}