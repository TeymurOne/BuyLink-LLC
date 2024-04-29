import 'package:buylink_flutter/data/network/response/partner_location.dart';
import 'package:json_annotation/json_annotation.dart';

part 'branches.g.dart';

@JsonSerializable()
class Branches {
  final int id;
  final String address;
  final String phone;
  final String? lat;
  final String? lng;

  Branches({
    required this.lng,
    required this.lat,
    required this.phone,
    required this.id,
    required this.address,
  });

  factory Branches.fromJson(Map<String, dynamic> json) => _$BranchesFromJson(json);

  Map<String, dynamic> toJson() => _$BranchesToJson(this);
}
