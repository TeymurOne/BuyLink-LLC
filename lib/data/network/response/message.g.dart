// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'message.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Message _$MessageFromJson(Map<String, dynamic> json) => Message(
      inBasket: json['in_basket'] as bool,
      isUsed: json['is_used'] as bool,
      sender: json['sender'] == null
          ? null
          : Sender.fromJson(json['sender'] as Map<String, dynamic>),
      id: json['id'] as int,
      conversationId: json['conversation_id'] as int,
      recipientId: json['recipient_id'] as int,
      senderId: json['sender_id'] as int,
      partner: json['partner'] == null
          ? null
          : Partner.fromJson(json['partner'] as Map<String, dynamic>),
      text: json['text'] as String?,
      sendDate: json['send_date'] as String,
    );

Map<String, dynamic> _$MessageToJson(Message instance) => <String, dynamic>{
      'id': instance.id,
      'conversation_id': instance.conversationId,
      'recipient_id': instance.recipientId,
      'sender_id': instance.senderId,
      'partner': instance.partner,
      'sender': instance.sender,
      'text': instance.text,
      'send_date': instance.sendDate,
      'in_basket': instance.inBasket,
      'is_used': instance.isUsed,
    };
