import 'package:json_annotation/json_annotation.dart';

part 'referer.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class Referer{
  final int id;
  final String? name;
  final String? username;
  final String image;

  Referer({required this.id, required this.name, required this.username, required this.image});


  factory Referer.fromJson(Map<String, dynamic> json) =>
      _$RefererFromJson(json);

  Map<String, dynamic> toJson() => _$RefererToJson(this);
}
