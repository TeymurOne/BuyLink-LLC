import 'package:buylink_flutter/data/network/response/products_images_list.dart';
import 'package:json_annotation/json_annotation.dart';
part 'product_image.g.dart';
@JsonSerializable()
class ProductImage {

  final String name;
  final List<ProductsImagesList> products;

  ProductImage(this.products, this.name);

factory ProductImage.fromJson(Map<String, dynamic> json) => _$ProductImageFromJson(json);

Map<String, dynamic> toJson() => _$ProductImageToJson(this);
}

