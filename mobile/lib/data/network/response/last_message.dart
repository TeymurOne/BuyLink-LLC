
import 'package:json_annotation/json_annotation.dart';

part 'last_message.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class LastMessage {
  final String? text;

  LastMessage({ this.text});

  factory LastMessage.fromJson(Map<String, dynamic> json) =>
      _$LastMessageFromJson(json);

  Map<String, dynamic> toJson() => _$LastMessageToJson(this);
}
