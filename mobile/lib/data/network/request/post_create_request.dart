import 'package:json_annotation/json_annotation.dart';
part 'post_create_request.g.dart';
@JsonSerializable(fieldRename: FieldRename.snake)
class PostCreateRequest{
  final String title;
  final int partnerId;

  PostCreateRequest({required this.title, required this.partnerId});

factory PostCreateRequest.fromJson(Map<String, dynamic> json) => _$PostCreateRequestFromJson(json);

Map<String, dynamic> toJson() => _$PostCreateRequestToJson(this);
}

