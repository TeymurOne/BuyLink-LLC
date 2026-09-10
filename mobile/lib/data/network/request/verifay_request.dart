import 'package:json_annotation/json_annotation.dart';
part 'verifay_request.g.dart';
@JsonSerializable()
class VerifayRequest{
  final String phone;

  VerifayRequest({required this.phone});

factory VerifayRequest.fromJson(Map<String, dynamic> json) => _$VerifayRequestFromJson(json);

Map<String, dynamic> toJson() => _$VerifayRequestToJson(this);

}