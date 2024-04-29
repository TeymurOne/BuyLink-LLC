// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'members.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Members _$MembersFromJson(Map<String, dynamic> json) => Members(
      id: json['id'] as int,
      fullName: json['full_name'] as String,
      position: json['position'] as String,
      image: json['image'] as String,
    );

Map<String, dynamic> _$MembersToJson(Members instance) => <String, dynamic>{
      'id': instance.id,
      'full_name': instance.fullName,
      'position': instance.position,
      'image': instance.image,
    };
