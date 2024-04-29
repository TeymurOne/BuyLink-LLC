import 'package:json_annotation/json_annotation.dart';
part 'services.g.dart';
@JsonSerializable(fieldRename: FieldRename.snake)
class Services {
  final int id;
  final String title;
  final String description;
  final String price;
  final String discountPrice;
  final String? about;

  Services(
      {required this.id,
      required this.title,
      required this.description,
      required this.price,
      required this.discountPrice,
      this.about});

factory Services.fromJson(Map<String, dynamic> json) => _$ServicesFromJson(json);

Map<String, dynamic> toJson() => _$ServicesToJson(this);
}
