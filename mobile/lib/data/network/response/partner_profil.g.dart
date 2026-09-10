// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'partner_profil.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

PartnerProdile _$PartnerProdileFromJson(Map<String, dynamic> json) =>
    PartnerProdile(
      id: json['id'] as int,
      image: json['image'] as String?,
      name: json['name'] as String?,
      isRegistered: json['is_registered'] as int?,
      title: json['title'] as String?,
      fiendsCount: json['fiends_count'] as String?,
      balance: json['balance'] as String?,
      pendingBalance: json['pending_balance'] as String?,
      transactionCount: json['transaction_count'] as String?,
      userType: json['user_type'] as String?,
    );

Map<String, dynamic> _$PartnerProdileToJson(PartnerProdile instance) =>
    <String, dynamic>{
      'id': instance.id,
      'image': instance.image,
      'name': instance.name,
      'title': instance.title,
      'is_registered': instance.isRegistered,
      'fiends_count': instance.fiendsCount,
      'balance': instance.balance,
      'pending_balance': instance.pendingBalance,
      'transaction_count': instance.transactionCount,
      'user_type': instance.userType,
    };
