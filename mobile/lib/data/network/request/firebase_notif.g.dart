// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'firebase_notif.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

FirebaseNotif _$FirebaseNotifFromJson(Map<String, dynamic> json) =>
    FirebaseNotif(
      firebaseToken: json['firebase_token'] as String,
      deviceId: json['device_id'] as String,
      deviceType: json['device_type'] as String,
    );

Map<String, dynamic> _$FirebaseNotifToJson(FirebaseNotif instance) =>
    <String, dynamic>{
      'firebase_token': instance.firebaseToken,
      'device_id': instance.deviceId,
      'device_type': instance.deviceType,
    };
