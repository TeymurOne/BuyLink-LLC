// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'products.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Products _$ProductsFromJson(Map<String, dynamic> json) => Products(
      json['id'] as int,
      json['title'] as String,
      json['description'] as String?,
      (json['price'] as num).toDouble(),
      json['total_discount'] as int?,
      json['image'] as String,
      Cataloge.fromJson(json['category'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$ProductsToJson(Products instance) => <String, dynamic>{
      'id': instance.id,
      'title': instance.title,
      'price': instance.price,
      'total_discount': instance.totalDiscount,
      'image': instance.image,
      'description': instance.description,
      'category': instance.category,
    };
