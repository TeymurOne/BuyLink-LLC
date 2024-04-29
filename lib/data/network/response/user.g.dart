// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'user.dart';

// **************************************************************************
// TypeAdapterGenerator
// **************************************************************************

class UserAdapter extends TypeAdapter<User> {
  @override
  final int typeId = 0;

  @override
  User read(BinaryReader reader) {
    final numOfFields = reader.readByte();
    final fields = <int, dynamic>{
      for (int i = 0; i < numOfFields; i++) reader.readByte(): reader.read(),
    };
    return User(
      isPublic: fields[7] as bool?,
      pendingBalance: fields[11] as String?,
      username: fields[2] as String?,
      isRegistered: fields[4] as int?,
      birth: fields[5] as DateTime?,
      fiendsCount: fields[12] as int?,
      refererCount: fields[13] as int?,
      transactionCount: fields[14] as int?,
      image: fields[6] as String?,
      userType: fields[9] as String?,
      id: fields[0] as int,
      name: fields[1] as String,
      balance: fields[8] as String?,
      email: fields[3] as String,
      partnerId: fields[10] as int?,
    );
  }

  @override
  void write(BinaryWriter writer, User obj) {
    writer
      ..writeByte(15)
      ..writeByte(0)
      ..write(obj.id)
      ..writeByte(1)
      ..write(obj.name)
      ..writeByte(2)
      ..write(obj.username)
      ..writeByte(3)
      ..write(obj.email)
      ..writeByte(4)
      ..write(obj.isRegistered)
      ..writeByte(5)
      ..write(obj.birth)
      ..writeByte(6)
      ..write(obj.image)
      ..writeByte(7)
      ..write(obj.isPublic)
      ..writeByte(8)
      ..write(obj.balance)
      ..writeByte(9)
      ..write(obj.userType)
      ..writeByte(10)
      ..write(obj.partnerId)
      ..writeByte(11)
      ..write(obj.pendingBalance)
      ..writeByte(12)
      ..write(obj.fiendsCount)
      ..writeByte(13)
      ..write(obj.refererCount)
      ..writeByte(14)
      ..write(obj.transactionCount);
  }

  @override
  int get hashCode => typeId.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is UserAdapter &&
          runtimeType == other.runtimeType &&
          typeId == other.typeId;
}

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

User _$UserFromJson(Map<String, dynamic> json) => User(
      isPublic: json['is_public'] as bool?,
      pendingBalance: json['pending_balance'] as String?,
      username: json['username'] as String?,
      isRegistered: json['is_registered'] as int?,
      birth: json['birth'] == null
          ? null
          : DateTime.parse(json['birth'] as String),
      fiendsCount: json['fiends_count'] as int?,
      refererCount: json['referer_count'] as int?,
      transactionCount: json['transaction_count'] as int?,
      image: json['image'] as String?,
      userType: json['user_type'] as String?,
      id: json['id'] as int,
      name: json['name'] as String,
      balance: json['balance'] as String?,
      email: json['email'] as String,
      partnerId: json['partner_id'] as int?,
    );

Map<String, dynamic> _$UserToJson(User instance) => <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'username': instance.username,
      'email': instance.email,
      'is_registered': instance.isRegistered,
      'birth': instance.birth?.toIso8601String(),
      'image': instance.image,
      'is_public': instance.isPublic,
      'balance': instance.balance,
      'user_type': instance.userType,
      'partner_id': instance.partnerId,
      'pending_balance': instance.pendingBalance,
      'fiends_count': instance.fiendsCount,
      'referer_count': instance.refererCount,
      'transaction_count': instance.transactionCount,
    };
