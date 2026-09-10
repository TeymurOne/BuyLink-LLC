import 'package:json_annotation/json_annotation.dart';

part 'loqin_request.g.dart';

@JsonSerializable()
class LoqinRequest {
  final String phone;
  @JsonKey(name: "verification_code")
  final String verificationCode;

  LoqinRequest({required this.phone, required this.verificationCode});

  factory LoqinRequest.fromJson(Map<String, dynamic> json) => _$LoqinRequestFromJson(json);

  Map<String, dynamic> toJson() => _$LoqinRequestToJson(this);
}
