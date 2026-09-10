import 'package:json_annotation/json_annotation.dart';

import 'most_recommended.dart';
part 'most_recommended_response.g.dart';
@JsonSerializable()
class MostRecommendedResponse {
 final List<MostRecommended> data;

  MostRecommendedResponse({required this.data});

  factory MostRecommendedResponse.fromJson(Map<String, dynamic> json) => _$MostRecommendedResponseFromJson(json);


Map<String, dynamic> toJson() => _$MostRecommendedResponseToJson(this);
}
