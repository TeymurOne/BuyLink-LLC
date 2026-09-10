import 'package:buylink_flutter/data/network/response/partner_profil.dart';
import 'package:json_annotation/json_annotation.dart';

part 'partner_profil_data.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class PartnerProdileData {
  final PartnerProdile data;


  PartnerProdileData({
    required this.data,

  });

  factory PartnerProdileData.fromJson(Map<String, dynamic> json) =>
      _$PartnerProdileDataFromJson(json);

  Map<String, dynamic> toJson() => _$PartnerProdileDataToJson(this);
}
