import 'dart:convert';

import '../user.dart';


LoginResponse loginResponseFromJson(String str) =>
    LoginResponse.fromJson(json.decode(str));

class LoginResponse {
  LoginResponse({this.token, this.user, this.errorMessage});

  String? token;
  User? user;
  String? errorMessage;

  factory LoginResponse.fromJson(Map<String, dynamic> json) => LoginResponse(
        token: json["token"],
        user: User.fromJson(json["user"]),
      );
}
