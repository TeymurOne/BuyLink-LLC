import 'package:buylink_flutter/data/network/response/socials.dart';
import 'package:json_annotation/json_annotation.dart';
import 'package:buylink_flutter/data/network/response/partner_location.dart';
import 'package:buylink_flutter/data/network/response/services.dart';

import 'branches.dart';
import 'catalogue.dart';
import 'members.dart';

part 'partner_details_response.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class PartnerDetailsResponse {
  final int id;
  final String title;
  final String image;
  final String? description;
  final int? recommendationsCount;
  final String? referrerCommission;
  final String? userDiscount;
  final String? about;
  final String? phone;
  final String? email;
  final String? address;
  final String? cover;
  final String? rating;
  final Socials? socials;
  final String? commission;
  final PartnerLocation location;
  @JsonKey(defaultValue: [])
  final List<Branches> branches;
  final List<Catalogue> catalogue;
  final List<Services>? services;
  final List<Members>? members;

  PartnerDetailsResponse({
    this.description,
    required this.id,
    this.socials,
    required this.image,
    required this.title,
    this.about,
    this.recommendationsCount,
    this.phone,
    this.userDiscount,
    this.email,
    this.referrerCommission,
    this.address,
    this.rating,
    this.cover,
    required this.location,
    required this.branches,
    required this.catalogue,
    required this.services,
    required this.members,
    this.commission,
  });

  factory PartnerDetailsResponse.fromJson(Map<String, dynamic> json) => _$PartnerDetailsResponseFromJson(json);

  Map<String, dynamic> toJson() => _$PartnerDetailsResponseToJson(this);
}
