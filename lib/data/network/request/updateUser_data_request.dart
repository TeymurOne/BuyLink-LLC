import 'package:json_annotation/json_annotation.dart';
part 'updateUser_data_request.g.dart';
@JsonSerializable(fieldRename: FieldRename.snake)
class UpdateUserDataRequest{
  final String name;
  final String username;
  final String email;
  final int? isPublic;
  final int? register;

  UpdateUserDataRequest(  {
    this.register,
    this.isPublic,
    required this.name,
    required this.username,
    required this.email,
  });

factory UpdateUserDataRequest.fromJson(Map<String, dynamic> json) => _$UpdateUserDataRequestFromJson(json);

Map<String, dynamic> toJson() => _$UpdateUserDataRequestToJson(this);
}