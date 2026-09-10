import 'package:buylink_flutter/data/network/response/partner.dart';
import 'package:buylink_flutter/data/network/response/referer.dart';
import 'package:json_annotation/json_annotation.dart';

import 'basket.dart';
part 'basket_response.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class BasketResponse {
   final List<Basket> data;

   BasketResponse({required this.data});

  factory BasketResponse.fromJson(Map<String, dynamic> json) =>
      _$BasketResponseFromJson(json);


  Map<String, dynamic> toJson() => _$BasketResponseToJson(this);
}

