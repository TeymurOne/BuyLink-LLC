

import 'package:buylink_flutter/data/network/response/partner_details.dart';
import 'package:json_annotation/json_annotation.dart';

import '../response/partner_details_response.dart';

part 'transaction_claim.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class TransactionClaim {
  final int id;
  final double profit;
  final double amount;
  final String discountedAmount;
  final DateTime createdAt;
  final String? discountedPercent;
  final PartnerDetailsResponse partner;

  TransactionClaim({
    required this.id,
    required this.profit,
    required this.createdAt,
    required this.partner,
    required this.amount,
    required this.discountedAmount,
     this.discountedPercent,
  });
  factory TransactionClaim.fromJson(Map<String, dynamic> json) =>
      _$TransactionClaimFromJson(json);

  Map<String, dynamic> toJson() => _$TransactionClaimToJson(this);

}
