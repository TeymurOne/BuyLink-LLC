import 'package:json_annotation/json_annotation.dart';

part 'cataloge.g.dart';

@JsonSerializable()
class Cataloge{
  final int id;
  final String name;

  Cataloge({required this.id, required this.name});

  factory Cataloge.fromJson(Map<String, dynamic> json) =>
      _$CatalogeFromJson(json);

  Map<String, dynamic> toJson() => _$CatalogeToJson(this);
}