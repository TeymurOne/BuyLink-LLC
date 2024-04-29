// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'partner_details.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

PartnerDetails _$PartnerDetailsFromJson(Map<String, dynamic> json) =>
    PartnerDetails(
      data:
          PartnerDetailsResponse.fromJson(json['data'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$PartnerDetailsToJson(PartnerDetails instance) =>
    <String, dynamic>{
      'data': instance.data.toJson(),
    };
