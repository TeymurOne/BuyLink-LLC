import 'package:buylink_flutter/data/network/response/recommendation_response.dart';
import 'package:json_annotation/json_annotation.dart';
import 'package:buylink_flutter/data/network/response/user.dart';

import 'friend_request.dart';


part'notifications.g.dart';
@JsonSerializable(fieldRename: FieldRename.snake)
class NotificationsResponse {
  final int? id;
  final String? title;
  final String deepLink;
  final User? userId;
  final RecommendationResponse? postId;
  final int? commentId;
  final int? friendRequestId;
  final String? createdAt;
  final FriendRequest? friendRequest;

  NotificationsResponse(
      {required this.title,
      required this.userId,
       this.postId,
       this.id,
       this.commentId,
        required this.deepLink,
       this.friendRequestId,
        this.friendRequest,
      required this.createdAt
      });

factory NotificationsResponse.fromJson(Map<String, dynamic> json) => _$NotificationsResponseFromJson(json);

Map<String, dynamic> toJson() => _$NotificationsResponseToJson(this);


}
