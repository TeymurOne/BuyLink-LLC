import 'package:json_annotation/json_annotation.dart';

part 'partner_location.g.dart';

@JsonSerializable()
class PartnerLocation {
  final String? lat;
  final String? lng;

  PartnerLocation({required this.lat, required this.lng});

  factory PartnerLocation.fromJson(Map<String, dynamic> json) => _$PartnerLocationFromJson(json);

  Map<String, dynamic> toJson() => _$PartnerLocationToJson(this);
}
