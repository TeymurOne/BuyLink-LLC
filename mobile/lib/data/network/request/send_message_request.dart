import 'package:json_annotation/json_annotation.dart';

part 'send_message_request.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class SendMessageRequest {
  final int recipientId;
  final String text;

  SendMessageRequest({required this.recipientId, required this.text});

  factory SendMessageRequest.fromJson(Map<String, dynamic> json) =>
      _$SendMessageRequestFromJson(json);

  Map<String, dynamic> toJson() => _$SendMessageRequestToJson(this);
}
