// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'product_image.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ProductImage _$ProductImageFromJson(Map<String, dynamic> json) => ProductImage(
      (json['products'] as List<dynamic>)
          .map((e) => ProductsImagesList.fromJson(e as Map<String, dynamic>))
          .toList(),
      json['name'] as String,
    );

Map<String, dynamic> _$ProductImageToJson(ProductImage instance) =>
    <String, dynamic>{
      'name': instance.name,
      'products': instance.products,
    };
