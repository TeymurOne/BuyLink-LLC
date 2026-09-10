import 'package:buylink_flutter/data/network/response/partner.dart';
import 'package:buylink_flutter/data/network/response/referer.dart';
import 'package:json_annotation/json_annotation.dart';

import 'network_user.dart';
part 'basket.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class Basket{
  final String uuid;
  final String id;
  final Partner partner;
  final NetworkUser referer;

  Basket({required this.uuid,required this.id, required this.partner, required this.referer});

  factory Basket.fromJson(Map<String, dynamic> json) =>
      _$BasketFromJson(json);

  Map<String, dynamic> toJson() => _$BasketToJson(this);

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Basket &&
          runtimeType == other.runtimeType &&
          uuid == other.uuid &&
          id == other.id &&
          partner == other.partner &&
          referer == other.referer;

  @override
  int get hashCode => uuid.hashCode ^ id.hashCode ^ partner.hashCode ^ referer.hashCode;
}