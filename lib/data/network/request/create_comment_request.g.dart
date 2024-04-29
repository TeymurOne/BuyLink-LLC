// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'create_comment_request.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

CreateCommentRequest _$CreateCommentRequestFromJson(
        Map<String, dynamic> json) =>
    CreateCommentRequest(
      postId: json['post_id'] as String,
      comment: json['comment'] as String,
    );

Map<String, dynamic> _$CreateCommentRequestToJson(
        CreateCommentRequest instance) =>
    <String, dynamic>{
      'post_id': instance.postId,
      'comment': instance.comment,
    };
