import 'package:json_annotation/json_annotation.dart';

part 'partner_profil.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class PartnerProdile {
  final int id;
  final String? image;
  final String? name;
  final String? title;
  final int? isRegistered;
  final String? fiendsCount;
  final String? balance;
  final String? pendingBalance;
  final String? transactionCount;
  final String? userType;

  PartnerProdile({
    required this.id,
    this.image,
    this.name,
    this.isRegistered,
    this.title,
    this.fiendsCount,
    this.balance,
    this.pendingBalance,
    this.transactionCount,
    this.userType,
  });

  factory PartnerProdile.fromJson(Map<String, dynamic> json) =>
      _$PartnerProdileFromJson(json);

  Map<String, dynamic> toJson() => _$PartnerProdileToJson(this);
}
