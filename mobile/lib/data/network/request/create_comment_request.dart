import 'package:json_annotation/json_annotation.dart';

part 'create_comment_request.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class CreateCommentRequest {
  final String postId;
  final String comment;

  CreateCommentRequest({required this.postId, required this.comment});

  factory CreateCommentRequest.fromJson(Map<String, dynamic> json) =>
      _$CreateCommentRequestFromJson(json);

  Map<String, dynamic> toJson() => _$CreateCommentRequestToJson(this);
}
