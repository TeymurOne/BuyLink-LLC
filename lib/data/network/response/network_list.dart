import 'package:json_annotation/json_annotation.dart';
import 'network.dart';

part 'network_list.g.dart';
@JsonSerializable(explicitToJson: true)
class NetworkList{
  final List<Network> data;

  NetworkList({required this.data});

factory NetworkList.fromJson(Map<String, dynamic> json) => _$NetworkListFromJson(json);

Map<String, dynamic> toJson() => _$NetworkListToJson(this);
}