import 'package:json_annotation/json_annotation.dart';

part 'pay_from_wallet_request.g.dart';

@JsonSerializable()
class PayFromWalletRequest {
  final int amount;
  final String id;

  PayFromWalletRequest({required this.amount, required this.id});

  factory PayFromWalletRequest.fromJson(Map<String, dynamic> json) => _$PayFromWalletRequestFromJson(json);

  Map<String, dynamic> toJson() => _$PayFromWalletRequestToJson(this);
}
