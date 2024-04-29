// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'network_details.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

NetworkDetails _$NetworkDetailsFromJson(Map<String, dynamic> json) =>
    NetworkDetails(
      data: NetworkUser.fromJson(json['data'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$NetworkDetailsToJson(NetworkDetails instance) =>
    <String, dynamic>{
      'data': instance.data.toJson(),
    };
