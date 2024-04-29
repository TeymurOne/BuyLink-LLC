// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'user_recommendation.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

UserRecommendation _$UserRecommendationFromJson(Map<String, dynamic> json) =>
    UserRecommendation(
      id: json['id'] as int,
      image: json['image'] as String,
      email: json['email'] as String,
      name: json['name'] as String,
    );

Map<String, dynamic> _$UserRecommendationToJson(UserRecommendation instance) =>
    <String, dynamic>{
      'id': instance.id,
      'image': instance.image,
      'email': instance.email,
      'name': instance.name,
    };
