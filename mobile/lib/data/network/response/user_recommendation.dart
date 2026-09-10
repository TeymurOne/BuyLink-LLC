import 'package:json_annotation/json_annotation.dart';

part 'user_recommendation.g.dart';

@JsonSerializable()
class UserRecommendation {
  final int id;
  final String image;
  final String email;
  final String name;

  UserRecommendation(
      {required this.id, required this.image, required this.email, required this.name});

  factory UserRecommendation.fromJson(Map<String, dynamic> json) =>
      _$UserRecommendationFromJson(json);

  Map<String, dynamic> toJson() => _$UserRecommendationToJson(this);
}
