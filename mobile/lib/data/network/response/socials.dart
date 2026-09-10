import 'package:json_annotation/json_annotation.dart';

part 'socials.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class Socials {
  final String? facebook;
  final String? instagram;

  Socials({ this.facebook,  this.instagram});

  factory Socials.fromJson(Map<String, dynamic> json) =>
      _$SocialsFromJson(json);

  Map<String, dynamic> toJson() => _$SocialsToJson(this);
}
