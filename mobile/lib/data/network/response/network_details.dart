import 'package:json_annotation/json_annotation.dart';
import 'network_user.dart';

part 'network_details.g.dart';
@JsonSerializable(explicitToJson: true)
class NetworkDetails{
  final NetworkUser data;

  NetworkDetails({required this.data});

factory NetworkDetails.fromJson(Map<String, dynamic> json) => _$NetworkDetailsFromJson(json);

Map<String, dynamic> toJson() => _$NetworkDetailsToJson(this);
}