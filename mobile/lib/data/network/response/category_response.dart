import 'package:json_annotation/json_annotation.dart';

import 'name_lang.dart';

part 'category_response.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class CategoryResponse {
  final int id;
  final String name;
  final String image;

  CategoryResponse(
      {required this.id, required this.image, required this.name});

  factory CategoryResponse.fromJson(Map<String, dynamic> json) =>
      _$CategoryResponseFromJson(json);

  Map<String, dynamic> toJson() => _$CategoryResponseToJson(this);
}
