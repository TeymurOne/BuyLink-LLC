import 'package:json_annotation/json_annotation.dart';

part 'partner_login_request.g.dart';

@JsonSerializable()
class PartnerLoginReguest {
  final String email;
  final String password;

  PartnerLoginReguest({required this.email, required this.password});

  factory PartnerLoginReguest.fromJson(Map<String, dynamic> json) =>
      _$PartnerLoginReguestFromJson(json);

  Map<String, dynamic> toJson() => _$PartnerLoginReguestToJson(this);
}
