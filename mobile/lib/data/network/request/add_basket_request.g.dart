// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'add_basket_request.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

AddBasketRequest _$AddBasketRequestFromJson(Map<String, dynamic> json) =>
    AddBasketRequest(
      messageId: json['message_id'] as int?,
      postId: json['post_id'] as int?,
    );

Map<String, dynamic> _$AddBasketRequestToJson(AddBasketRequest instance) {
  final val = <String, dynamic>{};

  void writeNotNull(String key, dynamic value) {
    if (value != null) {
      val[key] = value;
    }
  }

  writeNotNull('post_id', instance.postId);
  writeNotNull('message_id', instance.messageId);
  return val;
}
