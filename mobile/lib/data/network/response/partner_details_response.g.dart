// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'partner_details_response.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

PartnerDetailsResponse _$PartnerDetailsResponseFromJson(
        Map<String, dynamic> json) =>
    PartnerDetailsResponse(
      description: json['description'] as String?,
      id: json['id'] as int,
      socials: json['socials'] == null
          ? null
          : Socials.fromJson(json['socials'] as Map<String, dynamic>),
      image: json['image'] as String,
      title: json['title'] as String,
      about: json['about'] as String?,
      recommendationsCount: json['recommendations_count'] as int?,
      phone: json['phone'] as String?,
      userDiscount: json['user_discount'] as String?,
      email: json['email'] as String?,
      referrerCommission: json['referrer_commission'] as String?,
      address: json['address'] as String?,
      rating: json['rating'] as String?,
      cover: json['cover'] as String?,
      location:
          PartnerLocation.fromJson(json['location'] as Map<String, dynamic>),
      branches: (json['branches'] as List<dynamic>?)
              ?.map((e) => Branches.fromJson(e as Map<String, dynamic>))
              .toList() ??
          [],
      catalogue: (json['catalogue'] as List<dynamic>)
          .map((e) => Catalogue.fromJson(e as Map<String, dynamic>))
          .toList(),
      services: (json['services'] as List<dynamic>?)
          ?.map((e) => Services.fromJson(e as Map<String, dynamic>))
          .toList(),
      members: (json['members'] as List<dynamic>?)
          ?.map((e) => Members.fromJson(e as Map<String, dynamic>))
          .toList(),
      commission: json['commission'] as String?,
    );

Map<String, dynamic> _$PartnerDetailsResponseToJson(
        PartnerDetailsResponse instance) =>
    <String, dynamic>{
      'id': instance.id,
      'title': instance.title,
      'image': instance.image,
      'description': instance.description,
      'recommendations_count': instance.recommendationsCount,
      'referrer_commission': instance.referrerCommission,
      'user_discount': instance.userDiscount,
      'about': instance.about,
      'phone': instance.phone,
      'email': instance.email,
      'address': instance.address,
      'cover': instance.cover,
      'rating': instance.rating,
      'socials': instance.socials,
      'commission': instance.commission,
      'location': instance.location,
      'branches': instance.branches,
      'catalogue': instance.catalogue,
      'services': instance.services,
      'members': instance.members,
    };
