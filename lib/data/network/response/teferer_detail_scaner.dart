
import 'package:json_annotation/json_annotation.dart';

part 'teferer_detail_scaner.g.dart';

@JsonSerializable()
class TefererDetailScaner {
final String data;

  TefererDetailScaner(this.data);

factory TefererDetailScaner.fromJson(Map<String, dynamic> json) => _$TefererDetailScanerFromJson(json);

Map<String, dynamic> toJson() => _$TefererDetailScanerToJson(this);
}