// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'most_recommended.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

MostRecommended _$MostRecommendedFromJson(Map<String, dynamic> json) =>
    MostRecommended(
      id: json['id'] as int,
      title: json['title'] as String,
      image: json['image'] as String,
      userDiscount: json['user_discount'] as String?,
      commission: json['commission'] as String?,
      referrerCommission: json['referrer_commission'] as String?,
      totalDiscount: (json['total_discount'] as num?)?.toDouble(),
      cover: json['cover'] as String,
      rating: json['rating'] as String?,
      industryId: json['industry_id'] as String?,
    );

Map<String, dynamic> _$MostRecommendedToJson(MostRecommended instance) =>
    <String, dynamic>{
      'id': instance.id,
      'title': instance.title,
      'image': instance.image,
      'cover': instance.cover,
      'user_discount': instance.userDiscount,
      'commission': instance.commission,
      'referrer_commission': instance.referrerCommission,
      'total_discount': instance.totalDiscount,
      'rating': instance.rating,
      'industry_id': instance.industryId,
    };
