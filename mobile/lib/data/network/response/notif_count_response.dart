
import 'package:json_annotation/json_annotation.dart';

part 'notif_count_response.g.dart';

@JsonSerializable()
class NotifCountResponse {
  final int count;

  NotifCountResponse({required this.count});

  factory NotifCountResponse.fromJson(Map<String, dynamic> json) => _$NotifCountResponseFromJson(json);

  Map<String, dynamic> toJson() => _$NotifCountResponseToJson(this);
}