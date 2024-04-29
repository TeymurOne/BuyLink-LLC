import 'package:json_annotation/json_annotation.dart';
import 'package:buylink_flutter/data/network/response/partner.dart';

import 'network_user.dart';

part 'recommendation_response.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class RecommendationResponse {
  final int id;
  final String? title;
  final String createdAtAgo;
  final NetworkUser user;
  final Partner partner;
  final bool inBasket;
  final bool isUsed;



  RecommendationResponse({
    required this.id,
    required this.user,
    required this.inBasket,
    required this.title,
    required this.createdAtAgo,
    required this.isUsed,
    required this.partner,
  });

  factory RecommendationResponse.fromJson(Map<String, dynamic> json) => _$RecommendationResponseFromJson(json);

  Map<String, dynamic> toJson() => _$RecommendationResponseToJson(this);
}
