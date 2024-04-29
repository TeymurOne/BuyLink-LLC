import 'message.dart';
import 'package:json_annotation/json_annotation.dart';

part 'messages_response.g.dart';

@JsonSerializable()
class MessagesResponse {
  final List<Message> data;

  MessagesResponse({required this.data});

  factory MessagesResponse.fromJson(Map<String, dynamic> json) =>
      _$MessagesResponseFromJson(json);

  Map<String, dynamic> toJson() => _$MessagesResponseToJson(this);
}
