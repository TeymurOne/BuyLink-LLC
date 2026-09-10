// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'notifications.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

NotificationsResponse _$NotificationsResponseFromJson(
        Map<String, dynamic> json) =>
    NotificationsResponse(
      title: json['title'] as String?,
      userId: json['user_id'] == null
          ? null
          : User.fromJson(json['user_id'] as Map<String, dynamic>),
      postId: json['post_id'] == null
          ? null
          : RecommendationResponse.fromJson(
              json['post_id'] as Map<String, dynamic>),
      id: json['id'] as int?,
      commentId: json['comment_id'] as int?,
      deepLink: json['deep_link'] as String,
      friendRequestId: json['friend_request_id'] as int?,
      friendRequest: json['friend_request'] == null
          ? null
          : FriendRequest.fromJson(
              json['friend_request'] as Map<String, dynamic>),
      createdAt: json['created_at'] as String?,
    );

Map<String, dynamic> _$NotificationsResponseToJson(
        NotificationsResponse instance) =>
    <String, dynamic>{
      'id': instance.id,
      'title': instance.title,
      'deep_link': instance.deepLink,
      'user_id': instance.userId,
      'post_id': instance.postId,
      'comment_id': instance.commentId,
      'friend_request_id': instance.friendRequestId,
      'created_at': instance.createdAt,
      'friend_request': instance.friendRequest,
    };
