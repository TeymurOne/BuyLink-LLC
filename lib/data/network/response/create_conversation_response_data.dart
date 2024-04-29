import 'package:json_annotation/json_annotation.dart';

import 'create_conversation_response.dart';

part 'create_conversation_response_data.g.dart';

@JsonSerializable()
class CreateConversationResponseData {
  final CreateConversationResponse data;

  CreateConversationResponseData(this.data);

  factory CreateConversationResponseData.fromJson(Map<String, dynamic> json) =>
      _$CreateConversationResponseDataFromJson(json);

  Map<String, dynamic> toJson() => _$CreateConversationResponseDataToJson(this);
}
