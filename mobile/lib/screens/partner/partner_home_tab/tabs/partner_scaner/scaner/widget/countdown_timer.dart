import 'dart:async';

import 'package:flutter/material.dart';

class CountdownTimer extends StatefulWidget {
  final String? text;
  final VoidCallback onTimerEnd;

  const CountdownTimer({Key? key, this.text, required this.onTimerEnd})
      : super(key: key);

  @override
  State<CountdownTimer> createState() => _CountdownTimerState();
}

class _CountdownTimerState extends State<CountdownTimer> {
  int countdown = 5;

  @override
  void initState() {
    super.initState();
    if (widget.text?.isNotEmpty == true) {
      Timer.periodic(Duration(seconds: 1), (timer) {
        if (countdown == 1) {
          timer.cancel();
          widget.onTimerEnd();
        }
        if (mounted) {
          setState(() {
            countdown--;
          });
        }
      });
    }
    ;
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(10),
      width: 50,
      height: 50,
      decoration: BoxDecoration(
          color: Colors.white.withOpacity(0.6),
          borderRadius: BorderRadius.circular(15)),
      child: Center(
        child: Text(
          countdown.toString(),
        ),
      ),
    );
  }
}
