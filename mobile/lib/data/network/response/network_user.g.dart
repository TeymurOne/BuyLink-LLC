// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'network_user.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

NetworkUser _$NetworkUserFromJson(Map<String, dynamic> json) => NetworkUser(
      image: json['image'] as String,
      email: json['email'] as String,
      name: json['name'] as String,
      username: json['username'] as String?,
      isRegistered: json['is_registered'] as int?,
      transactionCount: json['transaction_count'] as int,
      id: json['id'] as int?,
      fiendsCount: json['fiends_count'] as int?,
      refererCount: json['referer_count'] as int?,
      friendStatus: json['friend_status'] as int?,
      isFriend: json['is_friend'] as bool,
      isPublic: json['is_public'] as bool,
    );

Map<String, dynamic> _$NetworkUserToJson(NetworkUser instance) =>
    <String, dynamic>{
      'image': instance.image,
      'email': instance.email,
      'name': instance.name,
      'username': instance.username,
      'is_registered': instance.isRegistered,
      'id': instance.id,
      'fiends_count': instance.fiendsCount,
      'referer_count': instance.refererCount,
      'is_friend': instance.isFriend,
      'transaction_count': instance.transactionCount,
      'is_public': instance.isPublic,
      'friend_status': instance.friendStatus,
    };
