
import 'package:json_annotation/json_annotation.dart';

part 'register_profile.g.dart';

@JsonSerializable()
class RegisterProfile {
  final String phone;
  final String username;
  final String birthday;
  final String email;
  final String name;

  RegisterProfile({
    required this.phone,
    required this.username,
    required this.birthday,
    required this.email,
    required this.name,
  });
  factory RegisterProfile.fromJson(Map<String, dynamic> json) =>
      _$RegisterProfileFromJson(json);

  Map<String, dynamic> toJson() => _$RegisterProfileToJson(this);
}
