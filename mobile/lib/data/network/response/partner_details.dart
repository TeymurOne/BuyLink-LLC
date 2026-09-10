import 'package:json_annotation/json_annotation.dart';
import 'package:buylink_flutter/data/network/response/partner_details_response.dart';

part 'partner_details.g.dart';
@JsonSerializable(explicitToJson: true)
class PartnerDetails{
  final PartnerDetailsResponse data;

  PartnerDetails({required this.data});

factory PartnerDetails.fromJson(Map<String, dynamic> json) => _$PartnerDetailsFromJson(json);

Map<String, dynamic> toJson() => _$PartnerDetailsToJson(this);
}