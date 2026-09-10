// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'catalogue.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Catalogue _$CatalogueFromJson(Map<String, dynamic> json) => Catalogue(
      name: json['name'] as String,
      products: (json['products'] as List<dynamic>)
          .map((e) => Products.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$CatalogueToJson(Catalogue instance) => <String, dynamic>{
      'name': instance.name,
      'products': instance.products,
    };
