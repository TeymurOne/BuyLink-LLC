import 'package:json_annotation/json_annotation.dart';
part 'scan_qr_code.g.dart';
@JsonSerializable()
class ScanQRCodeRequest {
  final String uuid;
  final String amount;

  ScanQRCodeRequest({required this.uuid, required this.amount});

factory ScanQRCodeRequest.fromJson(Map<String, dynamic> json) => _$ScanQRCodeRequestFromJson(json);

Map<String, dynamic> toJson() => _$ScanQRCodeRequestToJson(this);
}
