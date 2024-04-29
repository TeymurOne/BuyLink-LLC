// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'raiting_request.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

RaitingRequest _$RaitingRequestFromJson(Map<String, dynamic> json) =>
    RaitingRequest(
      rating: json['rating'] as int,
      description: json['description'] as String,
    );

Map<String, dynamic> _$RaitingRequestToJson(RaitingRequest instance) =>
    <String, dynamic>{
      'rating': instance.rating,
      'description': instance.description,
    };
