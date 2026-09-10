import 'dart:convert';

import 'package:json_annotation/json_annotation.dart';

import '../../components/product.dart';
import '../../data/network/response/basket.dart';
import '../../data/network/response/most_recommended.dart';
import '../../data/network/response/network_user.dart';
import '../../data/network/response/notifications.dart';
import '../../data/network/response/partner.dart';
import '../../data/network/response/products.dart';
import '../../data/network/response/recommendation_response.dart';

part 'pagination.g.dart';

Pagination paginationFromJson(String str) => Pagination.fromJson(json.decode(str));

String paginationToJson(Pagination data) => json.encode(data.toJson());

@JsonSerializable(fieldRename: FieldRename.snake)
class Pagination<T> {
  @_Converter()
  final List<T> data;
  @JsonKey(readValue: _lastPageFromJson)
  final int lastPage;

  Pagination({
    required this.data,
    required this.lastPage,
  });

  factory Pagination.fromJson(Map<String, dynamic> json) => _$PaginationFromJson(json);

  Map<String, dynamic> toJson() => _$PaginationToJson(this);
}

int _lastPageFromJson(Map<dynamic, dynamic> json, String key) {
  return json["meta"][key];
}

class _Converter<T> implements JsonConverter<T, Object> {
  const _Converter();

  @override
  T fromJson(Object json) {
    if (T == RecommendationResponse) {
      return RecommendationResponse.fromJson(json as Map<String, dynamic>) as T;
    }
    if (T == Basket) {
      return Basket.fromJson(json as Map<String, dynamic>) as T;
    }
    if (T == NetworkUser) {
      return NetworkUser.fromJson(json as Map<String, dynamic>) as T;
    }
    if (T == Partner) {
      return Partner.fromJson(json as Map<String, dynamic>) as T;
    }
    if (T == NotificationsResponse) {
      return NotificationsResponse.fromJson(json as Map<String, dynamic>) as T;
    }  if (T == Products) {
      return Products.fromJson(json as Map<String, dynamic>) as T;
    } if (T == MostRecommended) {
      return MostRecommended.fromJson(json as Map<String, dynamic>) as T;
    }

    throw 'Unknown type. Type $T';
  }

  @override
  Object toJson(T object) {
    return object as Object;
  }
}
