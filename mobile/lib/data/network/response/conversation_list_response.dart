import 'conversation_list.dart';
import 'package:json_annotation/json_annotation.dart';

part 'conversation_list_response.g.dart';

@JsonSerializable()
class ConversationListResponse{
  final List<ConversationList> data;

  ConversationListResponse({required this.data});
  factory ConversationListResponse.fromJson(Map<String, dynamic> json) =>
      _$ConversationListResponseFromJson(json);

  Map<String, dynamic> toJson() => _$ConversationListResponseToJson(this);
}