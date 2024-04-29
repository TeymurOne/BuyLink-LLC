// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'post_create_request.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

PostCreateRequest _$PostCreateRequestFromJson(Map<String, dynamic> json) =>
    PostCreateRequest(
      title: json['title'] as String,
      partnerId: json['partner_id'] as int,
    );

Map<String, dynamic> _$PostCreateRequestToJson(PostCreateRequest instance) =>
    <String, dynamic>{
      'title': instance.title,
      'partner_id': instance.partnerId,
    };
