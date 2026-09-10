// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'basket_response.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

BasketResponse _$BasketResponseFromJson(Map<String, dynamic> json) =>
    BasketResponse(
      data: (json['data'] as List<dynamic>)
          .map((e) => Basket.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$BasketResponseToJson(BasketResponse instance) =>
    <String, dynamic>{
      'data': instance.data,
    };
