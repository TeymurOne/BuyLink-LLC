import 'package:buylink_flutter/data/network/response/product_image.dart';
import 'package:json_annotation/json_annotation.dart';

import 'cataloge.dart';
part 'products.g.dart';
@JsonSerializable(fieldRename: FieldRename.snake)
class Products{
  final int id;
  final String title;
  final double price;
  final int? totalDiscount;
  final String image;
  final String? description;
  final Cataloge category;

  Products(this.id, this.title, this.description, this.price, this.totalDiscount, this.image, this.category);

factory Products.fromJson(Map<String, dynamic> json) => _$ProductsFromJson(json);

Map<String, dynamic> toJson() => _$ProductsToJson(this);
}

