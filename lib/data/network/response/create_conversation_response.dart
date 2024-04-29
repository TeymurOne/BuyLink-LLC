
import 'package:json_annotation/json_annotation.dart';

part 'create_conversation_response.g.dart';

@JsonSerializable()
class CreateConversationResponse{
  final int id;

  CreateConversationResponse(this.id);
  factory CreateConversationResponse.fromJson(Map<String, dynamic> json) =>
      _$CreateConversationResponseFromJson(json);

  Map<String, dynamic> toJson() => _$CreateConversationResponseToJson(this);
}