import 'package:json_annotation/json_annotation.dart';

part 'name_lang.g.dart';

@JsonSerializable()
class NameLang {
  final String? en;

  NameLang(this.en);

  factory NameLang.fromJson(Map<String, dynamic> json) =>
      _$NameLangFromJson(json);

  Map<String, dynamic> toJson() => _$NameLangToJson(this);
}
