// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'send_recomended.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

SendRecomended _$SendRecomendedFromJson(Map<String, dynamic> json) =>
    SendRecomended(
      partnerId: json['partner_id'] as int,
      recipientId:
          (json['recipient_id'] as List<dynamic>).map((e) => e as int).toList(),
      text: json['text'] as String,
    );

Map<String, dynamic> _$SendRecomendedToJson(SendRecomended instance) =>
    <String, dynamic>{
      'recipient_id': instance.recipientId,
      'text': instance.text,
      'partner_id': instance.partnerId,
    };
