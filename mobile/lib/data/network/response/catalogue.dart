import 'package:json_annotation/json_annotation.dart';
import 'package:buylink_flutter/data/network/response/products.dart';

part 'catalogue.g.dart';
@JsonSerializable()
class Catalogue{
final String name;
final List<Products> products;

  Catalogue({required this.name, required this.products});

factory Catalogue.fromJson(Map<String, dynamic> json) => _$CatalogueFromJson(json);

Map<String, dynamic> toJson() => _$CatalogueToJson(this);
}

