// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'friend_request.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

FriendRequest _$FriendRequestFromJson(Map<String, dynamic> json) =>
    FriendRequest(
      id: json['id'] as int,
      recipientId: json['recipient_id'] as int,
      status: json['status'] as int,
      senderId: SenderId.fromJson(json['sender_id'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$FriendRequestToJson(FriendRequest instance) =>
    <String, dynamic>{
      'id': instance.id,
      'recipient_id': instance.recipientId,
      'status': instance.status,
      'sender_id': instance.senderId,
    };
