import 'package:json_annotation/json_annotation.dart';
part 'products_images_list.g.dart';
@JsonSerializable()
class ProductsImagesList{
  final int id;
  final String image;

  ProductsImagesList(this.id, this.image);

factory ProductsImagesList.fromJson(Map<String, dynamic> json) => _$ProductsImagesListFromJson(json);

Map<String, dynamic> toJson() => _$ProductsImagesListToJson(this);
}