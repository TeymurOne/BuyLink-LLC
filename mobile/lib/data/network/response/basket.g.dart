// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'basket.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Basket _$BasketFromJson(Map<String, dynamic> json) => Basket(
      uuid: json['uuid'] as String,
      id: json['id'] as String,
      partner: Partner.fromJson(json['partner'] as Map<String, dynamic>),
      referer: NetworkUser.fromJson(json['referer'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$BasketToJson(Basket instance) => <String, dynamic>{
      'uuid': instance.uuid,
      'id': instance.id,
      'partner': instance.partner,
      'referer': instance.referer,
    };
