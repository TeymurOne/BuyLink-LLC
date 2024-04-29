import 'package:json_annotation/json_annotation.dart';

part 'most_recommended.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class MostRecommended {
  final int id;
  final String title;
  final String image;
  final String cover;
  final String? userDiscount;
  final String? commission;
  final String? referrerCommission;
  final double? totalDiscount;
  final String? rating;
  final String? industryId;





  MostRecommended( {
    required this.id,
    required this.title,
    required this.image,
    required this.userDiscount,
    required this.commission,
    required this.referrerCommission,
    required this.totalDiscount,
    required this.cover,
    this.rating,
    this.industryId,
  });

  factory MostRecommended.fromJson(Map<String, dynamic> json) =>
      _$MostRecommendedFromJson(json);

  Map<String, dynamic> toJson() => _$MostRecommendedToJson(this);
}
