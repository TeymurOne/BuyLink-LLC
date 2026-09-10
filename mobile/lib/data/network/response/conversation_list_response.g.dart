// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'conversation_list_response.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ConversationListResponse _$ConversationListResponseFromJson(
        Map<String, dynamic> json) =>
    ConversationListResponse(
      data: (json['data'] as List<dynamic>)
          .map((e) => ConversationList.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$ConversationListResponseToJson(
        ConversationListResponse instance) =>
    <String, dynamic>{
      'data': instance.data,
    };
