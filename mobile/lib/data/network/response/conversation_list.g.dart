// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'conversation_list.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ConversationList _$ConversationListFromJson(Map<String, dynamic> json) =>
    ConversationList(
      id: json['id'] as int,
      user: ChatUser.fromJson(json['user'] as Map<String, dynamic>),
      unreadMessageCount: json['unread_message_count'] as int,
      lastMessage: json['last_message'] == null
          ? null
          : LastMessage.fromJson(json['last_message'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$ConversationListToJson(ConversationList instance) =>
    <String, dynamic>{
      'id': instance.id,
      'unread_message_count': instance.unreadMessageCount,
      'user': instance.user,
      'last_message': instance.lastMessage,
    };
