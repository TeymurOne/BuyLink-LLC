import 'dart:convert';

import 'package:flutter/services.dart' show rootBundle;


class Localized {
  late String value;
  Localized(String key) {
    value = Localization.getInstance.getString(key);
  }
}

class Localization {
  static Localization? _instance;
  static Localization get getInstance =>
      _instance = _instance ?? Localization._();

  late Map<String, dynamic> values;

  Localization._();




  String getString(String key) {
    return (values[key] ?? key).toString();
  }

  List<String> getMap(String key) {
    List<String> list = [];
    if (values[key] is List) {
      list = (values[key] as List).map<String>((e) => e.toString()).toList();
    }
    return list;
  }
}
