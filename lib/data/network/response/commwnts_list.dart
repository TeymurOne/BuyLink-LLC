import 'package:buylink_flutter/data/network/response/commetnts.dart';
import 'package:json_annotation/json_annotation.dart';

part 'commwnts_list.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class CommentsList {
  final List<Commetnts> data;

  CommentsList({required this.data});

  factory CommentsList.fromJson(Map<String, dynamic> json) =>
      _$CommentsListFromJson(json);

  Map<String, dynamic> toJson() => _$CommentsListToJson(this);
}
