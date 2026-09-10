// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'most_recommended_response.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

MostRecommendedResponse _$MostRecommendedResponseFromJson(
        Map<String, dynamic> json) =>
    MostRecommendedResponse(
      data: (json['data'] as List<dynamic>)
          .map((e) => MostRecommended.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$MostRecommendedResponseToJson(
        MostRecommendedResponse instance) =>
    <String, dynamic>{
      'data': instance.data,
    };
