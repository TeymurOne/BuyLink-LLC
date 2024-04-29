import 'package:json_annotation/json_annotation.dart';

import 'network_user.dart';

part 'commetnts.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class Commetnts {
  final int id;
  final String comment;
  final String createdAt;
  final NetworkUser user;


  Commetnts( {required this.user,required this.id, required this.comment, required this.createdAt});

  factory Commetnts.fromJson(Map<String, dynamic> json) =>
      _$CommetntsFromJson(json);

  Map<String, dynamic> toJson() => _$CommetntsToJson(this);
}
