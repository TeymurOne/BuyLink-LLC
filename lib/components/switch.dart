// ignore_for_file: deprecated_member_use, must_be_immutable

import 'dart:async';
import 'package:flutter/material.dart';

import '../utils/util.dart';

class CustomSwitch<T> extends StatefulWidget {
  Map<T, String> items;
  void Function(T) onChanged;
  T? initialValue;
  StreamController<T>? streamController;

  CustomSwitch(this.items, this.onChanged,
      {this.initialValue, this.streamController});

  @override
  _CustomSwitchState<T> createState() => _CustomSwitchState<T>();
}

class _CustomSwitchState<T> extends State<CustomSwitch<T>>
    with SingleTickerProviderStateMixin {
  late Tween<double> _tween;
  late AnimationController _controller;
  late Animation<double> _animation;
  late T _selectedItemKey;
  // StreamController<T> streamController; //= widget.initialValue ?? 0;
  @override
  void initState() {
    super.initState();
    // streamController = widget.streamController ?? StreamController<T>();
    _selectedItemKey = widget.initialValue ?? widget.items.keys.first;

    int index = widget.items.keys.toList().indexOf(_selectedItemKey);
    _controller = AnimationController(
      duration: Duration(milliseconds: 200),
      vsync: this,
    );
    _tween = Tween(
        begin: index.toDouble(), end: widget.items.entries.length.toDouble());
    _animation = _tween.animate(_controller);
    _animation.addListener(() {});

    widget.streamController?.stream?.listen((event) {
      _tween.begin = _animation.value;
      _controller.reset();
      final index = widget.items.keys.toList().indexOf(event);
      _tween.end = index.toDouble();
      _controller.forward();
    });
    widget.streamController?.sink.add(_selectedItemKey);
  }

  @override
  void didUpdateWidget(covariant CustomSwitch<T> oldWidget) {
    if (oldWidget.initialValue != widget.initialValue) {
      _tween.begin = _animation.value;
      _controller.reset();
      final index = widget.items.keys.toList().indexOf(widget.initialValue!);
      _tween.end = index.toDouble();
      _controller.forward();
    }
    super.didUpdateWidget(oldWidget);
  }

  @override
  void dispose() {
    widget.streamController?.close();
    widget.streamController = null;
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    initAnimation();
    return Container(
      height: 40,
      alignment: Alignment.center,
      // padding: EdgeInsets.symmetric(horizontal: 12),
      padding: EdgeInsets.all(3),
      decoration: BoxDecoration(
          borderRadius: BorderRadius.all(Radius.circular(8)),
          color: CustomColors.lightGray),
      child: Stack(
        fit: StackFit.expand,
        children: [
          Row(
            mainAxisSize: MainAxisSize.max,
            children: widget.items.entries
                .map((e) => Expanded(
                      flex: 1,
                      child: InkWell(
                        onTap: () {
                          // _tween.begin = _animation.value;
                          // _controller.reset();
                          // final index =
                          //     widget.items.values.toList().indexOf(e.value);
                          // _tween.end = index.toDouble();
                          // _controller.forward();
                          widget.onChanged(e.key);
                          if (widget.streamController == null) {
                            _tween.begin = _animation.value;
                            _controller.reset();
                            final index =
                                widget.items.keys.toList().indexOf(e.key);
                            _tween.end = index.toDouble();
                            _controller.forward();
                          } else {
                            widget.streamController?.sink.add(e.key);
                          }
                        },
                        child: Center(
                          child: Text(
                            e.value,
                            textAlign: TextAlign.center,
                          ),
                        ),
                      ),
                    ))
                .toList(),
          ),
          AnimatedBuilder(
              animation: _animation,
              builder: (BuildContext context, Widget? child) {
                return ClipPath(
                  clipper: SwitchClipper(_animation.value, widget.items.length),
                  child: Container(
                    color: CustomColors.blue,
                    child: Row(
                      mainAxisSize: MainAxisSize.max,
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: widget.items.entries
                          .toList()
                          .map(
                            (e) => Expanded(
                              flex: 1,
                              child: Center(
                                child: Text(
                                  e.value,
                                  style: TextStyle(
                                      color: Theme.of(context).cardColor),
                                ),
                              ),
                            ),
                          )
                          .toList(),
                    ),
                  ),
                );
              })
        ],
      ),
    );
  }

  void initAnimation() {}
}

class SwitchClipper extends CustomClipper<Path> {
  double move = 0;
  int length;
  SwitchClipper(this.move, this.length);

  @override
  Path getClip(Size size) {
    const cornerRadius = 8.0;
    final finalWidth = size.width / length;
    Path path = Path();
    // path.moveTo(finalWidth * move + finalWidth, 0);
    path.lineTo(finalWidth + finalWidth * move - cornerRadius, 0);
    path.quadraticBezierTo(finalWidth + finalWidth * move, 0,
        finalWidth + finalWidth * move, cornerRadius);
    path.lineTo(finalWidth + finalWidth * move, size.height - cornerRadius);
    path.quadraticBezierTo(finalWidth + finalWidth * move, size.height,
        finalWidth + finalWidth * move - cornerRadius, size.height);
    path.lineTo(cornerRadius + finalWidth * move, size.height);
    path.quadraticBezierTo(finalWidth * move, size.height, finalWidth * move,
        size.height - cornerRadius);
    path.lineTo(finalWidth * move, cornerRadius);
    path.quadraticBezierTo(
        finalWidth * move, 0, finalWidth * move + cornerRadius, 0);
    // path.lineTo(size.width, 0);
    return path;
  }

  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) {
    return true;
  }
}
