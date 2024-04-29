import 'package:json_annotation/json_annotation.dart';

part 'can_qr_code_response.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class ScanQRCodeResponse {
  final double discountedAmount;
  final DateTime date;
  final String initialPrice;
  final int discount;

  ScanQRCodeResponse({
    required this.date,
    required this.initialPrice,
    required this.discount,
    required this.discountedAmount,
  });

  factory ScanQRCodeResponse.fromJson(Map<String, dynamic> json) =>
      _$ScanQRCodeResponseFromJson(json);

  Map<String, dynamic> toJson() => _$ScanQRCodeResponseToJson(this);
}
