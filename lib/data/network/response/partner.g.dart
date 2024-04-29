// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'partner.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Partner _$PartnerFromJson(Map<String, dynamic> json) => Partner(
      id: json['id'] as int,
      userDiscount: json['user_discount'] as String,
      commission: json['commission'] as String?,
      referrerCommission: json['referrer_commission'] as String?,
      rating: json['rating'] as String?,
      title: json['title'] as String,
      cover: json['cover'] as String?,
      image: json['image'] as String?,
    );

Map<String, dynamic> _$PartnerToJson(Partner instance) => <String, dynamic>{
      'id': instance.id,
      'user_discount': instance.userDiscount,
      'commission': instance.commission,
      'referrer_commission': instance.referrerCommission,
      'rating': instance.rating,
      'title': instance.title,
      'image': instance.image,
      'cover': instance.cover,
    };
