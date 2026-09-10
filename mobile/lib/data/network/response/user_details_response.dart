import 'package:json_annotation/json_annotation.dart';
import 'package:buylink_flutter/data/network/response/user.dart';

part 'user_details_response.g.dart';
@JsonSerializable(explicitToJson: true)
class UserDetailsResponse{
  final User data;

  UserDetailsResponse({required this.data});

factory UserDetailsResponse.fromJson(Map<String, dynamic> json) => _$UserDetailsResponseFromJson(json);

Map<String, dynamic> toJson() => _$UserDetailsResponseToJson(this);
}
