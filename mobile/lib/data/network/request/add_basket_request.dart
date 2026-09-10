import 'package:json_annotation/json_annotation.dart';

part 'add_basket_request.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake, includeIfNull: false)
class AddBasketRequest {
  final int? postId;
  final int? messageId;

  AddBasketRequest({this.messageId, this.postId});

  factory AddBasketRequest.fromJson(Map<String, dynamic> json) => _$AddBasketRequestFromJson(json);

  Map<String, dynamic> toJson() => _$AddBasketRequestToJson(this);
}