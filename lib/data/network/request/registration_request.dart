import 'package:json_annotation/json_annotation.dart';
part 'registration_request.g.dart';
@JsonSerializable()
class RegistrationRequest {
  final String name;
  final String surname;
  @JsonKey(name: "father_name")
  final String fatherName;
  @JsonKey(name: "fin_code")

  final String finCode;
  final String address;
  final String password;
  final String password_confirmation;

  RegistrationRequest(
      {
        required this.name,
    required this.surname,
    required this.fatherName,
    required this.finCode,
    required this.address,
    required this.password,
    required this.password_confirmation});

factory RegistrationRequest.fromJson(Map<String, dynamic> json) => _$RegistrationRequestFromJson(json);

Map<String, dynamic> toJson() => _$RegistrationRequestToJson(this);
}
