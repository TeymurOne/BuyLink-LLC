import 'package:buylink_flutter/data/network/response/partner.dart';
import 'package:buylink_flutter/data/network/response/referer.dart';
import 'package:buylink_flutter/data/network/response/user.dart';
import 'package:json_annotation/json_annotation.dart';

part 'transactions.g.dart';

@JsonSerializable()
class Transactions {
  final int id;
  final double profit;
  @JsonKey(name: "discounted_amount")
  final String discountedAmount;
  @JsonKey(name: "discounted_percent")
  final String discountedPercent;
  final int amount;
  @JsonKey(name: "created_at")
  final DateTime createdAt;
  final Partner? partner;
  final User? user;
  final Referer? referer;


  Transactions({
    required this.id,
    required this.profit,
    required this.amount,
    required this.discountedAmount,
    required this.discountedPercent,
    required this.createdAt,
    required this.partner,
    required this.user,
    required this.referer,
  });

  factory Transactions.fromJson(Map<String, dynamic> json) => _$TransactionsFromJson(json);

  Map<String, dynamic> toJson() => _$TransactionsToJson(this);
}
