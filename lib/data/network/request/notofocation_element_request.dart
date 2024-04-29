import 'package:json_annotation/json_annotation.dart';

part 'notofocation_element_request.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class NotofocationElementRequest {
  final int friendRequestId;

  NotofocationElementRequest({required this.friendRequestId});

  factory NotofocationElementRequest.fromJson(Map<String, dynamic> json) =>
      _$NotofocationElementRequestFromJson(json);

  Map<String, dynamic> toJson() => _$NotofocationElementRequestToJson(this);
}
