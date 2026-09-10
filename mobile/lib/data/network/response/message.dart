import 'package:buylink_flutter/data/network/response/partner.dart';
import 'package:buylink_flutter/data/network/response/sender.dart';
import 'package:json_annotation/json_annotation.dart';

part 'message.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class Message {
  final int id;
  final int conversationId;
  final int recipientId;
  final int senderId;
  final Partner? partner;
  final Sender? sender;
  final String? text;
  final String sendDate;
  final bool inBasket;
  final bool isUsed;

  Message({
    required this.inBasket,
    required this.isUsed,
    this.sender,
    required this.id,
    required this.conversationId,
    required this.recipientId,
    required this.senderId,
    this.partner,
    required this.text,
    required this.sendDate,
  });


  factory Message.fromJson(Map<String, dynamic> json) => _$MessageFromJson(json);

  Map<String, dynamic> toJson() => _$MessageToJson(this);

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Message &&
          runtimeType == other.runtimeType &&
          id == other.id &&
          conversationId == other.conversationId &&
          recipientId == other.recipientId &&
          senderId == other.senderId &&
          partner == other.partner &&
          sender == other.sender &&
          text == other.text &&
          sendDate == other.sendDate &&
          inBasket == other.inBasket &&
          isUsed == other.isUsed;

  @override
  int get hashCode =>
      id.hashCode ^
      conversationId.hashCode ^
      recipientId.hashCode ^
      senderId.hashCode ^
      partner.hashCode ^
      sender.hashCode ^
      text.hashCode ^
      sendDate.hashCode ^
      inBasket.hashCode ^
      isUsed.hashCode;
}
