// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'network_list.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

NetworkList _$NetworkListFromJson(Map<String, dynamic> json) => NetworkList(
      data: (json['data'] as List<dynamic>)
          .map((e) => Network.fromJson(e as Map<String, dynamic>))
          .toList(),
    );

Map<String, dynamic> _$NetworkListToJson(NetworkList instance) =>
    <String, dynamic>{
      'data': instance.data.map((e) => e.toJson()).toList(),
    };
