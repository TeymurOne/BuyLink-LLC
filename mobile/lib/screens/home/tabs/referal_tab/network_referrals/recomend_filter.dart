import 'package:flutter/material.dart';
import 'package:json_annotation/json_annotation.dart';

import '../../../../../generated/l10n.dart';

enum RecomendFilter {
  @JsonValue(0)
  all,
  @JsonValue(1)
  used,
  @JsonValue(2)
  in_basket,
  @JsonValue(3)
  pending,
}

extension PakecStatusExt on RecomendFilter {
  String getTitile(BuildContext context) {
    switch (this) {
      case RecomendFilter.all:
        return S.of(context).all;
      case RecomendFilter.pending:
        return S.of(context).notUsed;
      case RecomendFilter.used:
        return S.of(context).used;
      case RecomendFilter.in_basket:
        return S.of(context).inAsket;

    }
  }
}
