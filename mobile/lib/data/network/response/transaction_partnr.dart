import 'package:buylink_flutter/data/network/response/partner.dart';
import 'package:json_annotation/json_annotation.dart';

import '../request/partner_user.dart';

part 'transaction_partnr.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class TransactionPartner {
  final int id;
  final double profit;
  final double amount;
  final String discountedAmount;
  final String discountedPercent;
  final DateTime createdAt;
  final String type;
  final Partner partner;
  final PartnerUser user;

  TransactionPartner({
    required this.id,
    required this.profit,
    required this.amount,
    required this.discountedAmount,
    required this.discountedPercent,
    required this.createdAt,
    required this.type,
    required this.partner,
    required this.user,
  });

  factory TransactionPartner.fromJson(Map<String, dynamic> json) =>
      _$TransactionPartnerFromJson(json);

  Map<String, dynamic> toJson() => _$TransactionPartnerToJson(this);
}
