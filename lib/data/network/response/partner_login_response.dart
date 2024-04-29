import 'package:json_annotation/json_annotation.dart';

import '../request/partner_user.dart';

part 'partner_login_response.g.dart';

@JsonSerializable()
class PartnerLoginResponse {
  final String token;

  PartnerLoginResponse({required this.token});

  factory PartnerLoginResponse.fromJson(Map<String, dynamic> json) =>
      _$PartnerLoginResponseFromJson(json);

  Map<String, dynamic> toJson() => _$PartnerLoginResponseToJson(this);
}
