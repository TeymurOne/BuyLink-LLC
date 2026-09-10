// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'branches.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Branches _$BranchesFromJson(Map<String, dynamic> json) => Branches(
      lng: json['lng'] as String?,
      lat: json['lat'] as String?,
      phone: json['phone'] as String,
      id: json['id'] as int,
      address: json['address'] as String,
    );

Map<String, dynamic> _$BranchesToJson(Branches instance) => <String, dynamic>{
      'id': instance.id,
      'address': instance.address,
      'phone': instance.phone,
      'lat': instance.lat,
      'lng': instance.lng,
    };
