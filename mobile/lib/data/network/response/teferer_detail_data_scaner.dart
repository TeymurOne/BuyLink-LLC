import 'package:buylink_flutter/data/network/response/teferer_detail_scaner.dart';
import 'package:json_annotation/json_annotation.dart';

part 'teferer_detail_data_scaner.g.dart';

@JsonSerializable()
class TefererDetailDataScaner {
  final TefererDetailScaner data;

  TefererDetailDataScaner({required this.data});

  factory TefererDetailDataScaner.fromJson(Map<String, dynamic> json) => _$TefererDetailDataScanerFromJson(json);

  Map<String, dynamic> toJson() => _$TefererDetailDataScanerToJson(this);
}