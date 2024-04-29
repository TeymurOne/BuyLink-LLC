import 'package:json_annotation/json_annotation.dart';

part 'raiting_request.g.dart';

@JsonSerializable()
class RaitingRequest {
  final int rating;
  final String description;

  RaitingRequest({required this.rating, required this.description});

  factory RaitingRequest.fromJson(Map<String, dynamic> json) =>
      _$RaitingRequestFromJson(json);

  Map<String, dynamic> toJson() => _$RaitingRequestToJson(this);
}
