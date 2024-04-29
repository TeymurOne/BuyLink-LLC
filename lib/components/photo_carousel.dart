import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

import '../utils/util.dart';

class PhotoCarousel extends StatefulWidget {
  final String image;

  const PhotoCarousel({super.key, required this.image});

  @override
  State<PhotoCarousel> createState() => _PhotoCarouselState();
}

class _PhotoCarouselState extends State<PhotoCarousel> {
  late List<String> images = [widget.image];
  int currentPage = 0;

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(8),
      child: Stack(
        alignment: Alignment.bottomCenter,
        children: [
          Positioned.fill(
            child: PageView(
                onPageChanged: (page) => setState(() {
                      currentPage = page;
                    }),
                children: images
                    .map((e) => CachedNetworkImage(
                          imageUrl: e,
                          fit: BoxFit.cover,
                        ))
                    .toList()),
          ),
          // Positioned(
          //     bottom: 10,
          //     child: Container(
          //         padding: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
          //         decoration: BoxDecoration(
          //           color: CustomColors.white,
          //           borderRadius: BorderRadius.circular(4),
          //         ),
          //         child: Text(
          //           '${currentPage + 1}/${images.length}',
          //           style: TextStyle(fontSize: 16, fontWeight: FontWeight.w500),
          //         )))
        ],
      ),
    );
  }
}
