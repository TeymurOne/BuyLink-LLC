// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'referer.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Referer _$RefererFromJson(Map<String, dynamic> json) => Referer(
      id: json['id'] as int,
      name: json['name'] as String?,
      username: json['username'] as String?,
      image: json['image'] as String,
    );

Map<String, dynamic> _$RefererToJson(Referer instance) => <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'username': instance.username,
      'image': instance.image,
    };
