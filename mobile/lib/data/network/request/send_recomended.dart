import 'package:json_annotation/json_annotation.dart';

part 'send_recomended.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake)
class SendRecomended {
  final List<int> recipientId;
  final String text;
  final int partnerId;

  SendRecomended(
      {required this.partnerId, required this.recipientId, required this.text});

  factory SendRecomended.fromJson(Map<String, dynamic> json) =>
      _$SendRecomendedFromJson(json);

  Map<String, dynamic> toJson() => _$SendRecomendedToJson(this);
}
