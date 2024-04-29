import 'package:json_annotation/json_annotation.dart';

part 'user_exists_request.g.dart';
@JsonSerializable()
class UserExistsRequest {
  final String phone;

  UserExistsRequest({required this.phone});

  factory UserExistsRequest.fromJson(Map<String, dynamic> json) => _$UserExistsRequestFromJson(json);

  Map<String, dynamic> toJson() => _$UserExistsRequestToJson(this);
}
