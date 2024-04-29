// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'recommendation_response.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

RecommendationResponse _$RecommendationResponseFromJson(
        Map<String, dynamic> json) =>
    RecommendationResponse(
      id: json['id'] as int,
      user: NetworkUser.fromJson(json['user'] as Map<String, dynamic>),
      inBasket: json['in_basket'] as bool,
      title: json['title'] as String?,
      createdAtAgo: json['created_at_ago'] as String,
      isUsed: json['is_used'] as bool,
      partner: Partner.fromJson(json['partner'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$RecommendationResponseToJson(
        RecommendationResponse instance) =>
    <String, dynamic>{
      'id': instance.id,
      'title': instance.title,
      'created_at_ago': instance.createdAtAgo,
      'user': instance.user,
      'partner': instance.partner,
      'in_basket': instance.inBasket,
      'is_used': instance.isUsed,
    };
