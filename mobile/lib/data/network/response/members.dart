import 'package:json_annotation/json_annotation.dart';
part 'members.g.dart';
@JsonSerializable(fieldRename: FieldRename.snake)
class Members{
  final int id;
  final String fullName;
  final String position;
  final String image;

  Members({required this.id, required this.fullName, required this.position, required this.image});

factory Members.fromJson(Map<String, dynamic> json) => _$MembersFromJson(json);

Map<String, dynamic> toJson() => _$MembersToJson(this);
}

