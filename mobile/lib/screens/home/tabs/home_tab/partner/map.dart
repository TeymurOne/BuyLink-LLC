import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
class LocationProduct extends StatefulWidget {
  final LatLng location;
  final String? price;

  const LocationProduct({Key? key, required this.location, this.price}) : super(key: key);

  @override
  _LocationProductState createState() => _LocationProductState();
}

class _LocationProductState extends State<LocationProduct> {
  Completer<GoogleMapController> _controller = Completer();
  final Set<Marker> markers = Set();

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance!.addPostFrameCallback((_) {
      _initializeMap();
    });
  }

  void _initializeMap() {
    _controller.future.then((controller) {
      _animateCamera(controller);
    });

    markers.add(Marker(
      markerId: MarkerId("MarkerId"),
      position: widget.location,
      infoWindow: widget.price != null
          ? InfoWindow(title: (widget.price ?? "") + "aze", onTap: _openMap)
          : InfoWindow(),
    ));
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        return Container(
          padding: EdgeInsets.symmetric(horizontal: 0),
          width: constraints.maxWidth, // Используем максимальную ширину родительского контейнера
          height: 260,
          child: GoogleMap(
            scrollGesturesEnabled: true,
            gestureRecognizers: <Factory<OneSequenceGestureRecognizer>>{
              Factory<OneSequenceGestureRecognizer>(() => EagerGestureRecognizer()),
            },
            initialCameraPosition: CameraPosition(target: widget.location, zoom: 12),
            onMapCreated: (controller) => _controller.complete(controller),
            markers: markers,
          ),
        );
      },
    );
  }

  void _animateCamera(GoogleMapController controller) {
    controller.animateCamera(CameraUpdate.newCameraPosition(
      CameraPosition(target: widget.location, zoom: 12),
    ));
  }

  @override
  void dispose() {
    _controller.future.then((value) => value.dispose());
    super.dispose();
  }

  void _openMap() {}
}

