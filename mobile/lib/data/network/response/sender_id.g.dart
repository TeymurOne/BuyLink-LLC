// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'sender_id.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

SenderId _$SenderIdFromJson(Map<String, dynamic> json) => SenderId(
      image: json['image'] as String?,
      email: json['email'] as String?,
      name: json['name'] as String?,
      username: json['username'] as String?,
      pendingBalance: json['pending_balance'] as String?,
      balance: json['balance'] as String?,
      userType: json['user_type'] as String?,
      isRegistered: json['is_registered'] as int?,
      id: json['id'] as int?,
      fiendsCount: json['fiends_count'] as int?,
      friendStatus: json['friend_status'] as int?,
      refererCount: json['referer_count'] as int?,
      partnerId: json['partner_id'] as int?,
      isPublic: json['is_public'] as bool?,
      isFriend: json['is_friend'] as bool?,
    );

Map<String, dynamic> _$SenderIdToJson(SenderId instance) => <String, dynamic>{
      'image': instance.image,
      'email': instance.email,
      'name': instance.name,
      'username': instance.username,
      'pending_balance': instance.pendingBalance,
      'balance': instance.balance,
      'user_type': instance.userType,
      'is_registered': instance.isRegistered,
      'id': instance.id,
      'fiends_count': instance.fiendsCount,
      'friend_status': instance.friendStatus,
      'referer_count': instance.refererCount,
      'partner_id': instance.partnerId,
      'is_public': instance.isPublic,
      'is_friend': instance.isFriend,
    };
