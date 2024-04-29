import 'package:json_annotation/json_annotation.dart';

part 'send_fewnd_request.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class SendFewndRequest {
  final int recipientId;

  SendFewndRequest({required this.recipientId});

  factory SendFewndRequest.fromJson(Map<String, dynamic> json) =>
      _$SendFewndRequestFromJson(json);

  Map<String, dynamic> toJson() => _$SendFewndRequestToJson(this);
}
