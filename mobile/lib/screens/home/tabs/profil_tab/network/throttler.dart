import 'dart:ui';

class Throttler {
  final int throttleGapInMillis;
  int? lastActionTime;

  Throttler({this.throttleGapInMillis = 500});

  void run(VoidCallback action) {
    if (lastActionTime == null) {
      action();
      lastActionTime = DateTime.now().millisecondsSinceEpoch;
    } else {
      if (DateTime.now().millisecondsSinceEpoch - lastActionTime! > (throttleGapInMillis ?? 500)) {
        action();
        lastActionTime = DateTime.now().millisecondsSinceEpoch;
      }
    }
  }
}
