import 'package:json_annotation/json_annotation.dart';
part 'firebase_notif.g.dart';
@JsonSerializable(fieldRename: FieldRename.snake)
class FirebaseNotif {
  final String firebaseToken;
  final String deviceId;
  final String deviceType;
  FirebaseNotif({required this.firebaseToken, required this.deviceId, required this.deviceType});

factory FirebaseNotif.fromJson(Map<String, dynamic> json) => _$FirebaseNotifFromJson(json);

Map<String, dynamic> toJson() => _$FirebaseNotifToJson(this);
}
