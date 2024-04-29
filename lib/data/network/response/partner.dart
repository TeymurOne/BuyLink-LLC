import 'dart:ffi';

import 'package:json_annotation/json_annotation.dart';

part 'partner.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class Partner {
  final int id;
  final String userDiscount;
  final String? commission;
  final String? referrerCommission;
  final String? rating;
  final String title;
  final String? image;
  final String? cover;


  Partner(
      {required this.id,
      required this.userDiscount,
      required this.commission,
      required this.referrerCommission,
      required this.rating,
      required this.title,
      this.cover,
      required this.image});

  factory Partner.fromJson(Map<String, dynamic> json) => _$PartnerFromJson(json);

  Map<String, dynamic> toJson() => _$PartnerToJson(this);

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Partner &&
          runtimeType == other.runtimeType &&
          id == other.id &&
          userDiscount == other.userDiscount &&
          commission == other.commission &&
          referrerCommission == other.referrerCommission &&
          rating == other.rating &&
          title == other.title &&
          image == other.image;

  @override
  int get hashCode =>
      id.hashCode ^
      userDiscount.hashCode ^
      commission.hashCode ^
      referrerCommission.hashCode ^
      rating.hashCode ^
      title.hashCode ^
      image.hashCode;
}
