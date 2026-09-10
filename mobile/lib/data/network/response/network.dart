import 'package:json_annotation/json_annotation.dart';

import 'network_user.dart';

part 'network.g.dart';

@JsonSerializable()
class Network {
  final int? id;
  final NetworkUser user;

  Network({required this.user,  this.id});

  factory Network.fromJson(Map<String, dynamic> json) => _$NetworkFromJson(json);

  Map<String, dynamic> toJson() => _$NetworkToJson(this);
}
