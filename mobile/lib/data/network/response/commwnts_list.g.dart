// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'commwnts_list.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

CommentsList _$CommentsListFromJson(Map<String, dynamic> json) => CommentsList(
      data: (json['data'] as List<dynamic>)
          .map((e) => Commetnts.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$CommentsListToJson(CommentsList instance) =>
    <String, dynamic>{
      'data': instance.data,
    };
