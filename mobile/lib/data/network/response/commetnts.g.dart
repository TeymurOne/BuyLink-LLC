// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'commetnts.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Commetnts _$CommetntsFromJson(Map<String, dynamic> json) => Commetnts(
      user: NetworkUser.fromJson(json['user'] as Map<String, dynamic>),
      id: json['id'] as int,
      comment: json['comment'] as String,
      createdAt: json['created_at'] as String,
    );

Map<String, dynamic> _$CommetntsToJson(Commetnts instance) => <String, dynamic>{
      'id': instance.id,
      'comment': instance.comment,
      'created_at': instance.createdAt,
      'user': instance.user,
    };
