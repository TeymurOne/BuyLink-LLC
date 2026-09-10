import 'dart:async';

import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:pusher_channels_flutter/pusher_channels_flutter.dart';
import 'package:qr_flutter/qr_flutter.dart';
import 'package:web_socket_channel/web_socket_channel.dart';

import '../.env.dart';
import '../data/network/response/basket.dart';

class QrGeneratord extends StatefulWidget {
  final ValueChanged<String> onReflesh;
  final Basket basket;

  const QrGeneratord({Key? key, required this.basket, required this.onReflesh}) : super(key: key);

  @override
  State<QrGeneratord> createState() => _QrGeneratordState();
}

class _QrGeneratordState extends State<QrGeneratord> {
  late final Timer _timer;

  @override
  void initState() {
    super.initState();
    _timer = Timer.periodic(
      Duration(seconds: 10),
      (timer) {
        widget.onReflesh(widget.basket.uuid);
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return QrImageView(
      data: widget.basket.uuid,
      version: QrVersions.auto,
      size: 200.0,
    );
  }

  @override
  void dispose() {
    _timer.cancel();
    super.dispose();
  }
}
