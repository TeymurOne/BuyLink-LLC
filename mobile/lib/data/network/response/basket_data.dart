import 'package:json_annotation/json_annotation.dart';

import 'basket.dart';

part 'basket_data.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class BasketData {
  final Basket data;

  BasketData(this.data);

  factory BasketData.fromJson(Map<String, dynamic> json) =>
      _$BasketDataFromJson(json);

  Map<String, dynamic> toJson() => _$BasketDataToJson(this);
}
