// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'services.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Services _$ServicesFromJson(Map<String, dynamic> json) => Services(
      id: json['id'] as int,
      title: json['title'] as String,
      description: json['description'] as String,
      price: json['price'] as String,
      discountPrice: json['discount_price'] as String,
      about: json['about'] as String?,
    );

Map<String, dynamic> _$ServicesToJson(Services instance) => <String, dynamic>{
      'id': instance.id,
      'title': instance.title,
      'description': instance.description,
      'price': instance.price,
      'discount_price': instance.discountPrice,
      'about': instance.about,
    };
