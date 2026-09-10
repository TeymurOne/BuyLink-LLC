import 'dart:math';

import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class Avatar extends StatelessWidget {
  late final String? url;
  final bool online;
  final double padding;
  final bool grayedOut;

  static const mockAvatars = [
    'https://unsplash.com/photos/3TLl_97HNJo/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8fHwxNjgyMjEwMjI5&force=true&w=320',
    'https://unsplash.com/photos/ILip77SbmOE/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgyMjM4NjI4&force=true&w=320',
    'https://unsplash.com/photos/QXevDflbl8A/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8fHwxNjgyMjEwMjI5&force=true&w=320'
        'https://unsplash.com/photos/X6Uj51n5CE8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8fHwxNjgyMjEwMjI5&force=true&w=320'
        'https://unsplash.com/photos/IF9TK5Uy-KI/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgyMjQwMDE0&force=true&w=320'
        'https://unsplash.com/photos/J1OScm_uHUQ/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fHx8MTY4MjIxMDIyOQ&force=true&w=320'
        'https://unsplash.com/photos/iFgRcqHznqg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fHx8MTY4MjIxMDIyOQ&force=true&w=320'
        'https://unsplash.com/photos/rDEOVtE7vOs/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fHx8MTY4MjIxMDIyOQ&force=true&w=320'
  ];
  static Random random = Random(DateTime.now().microsecondsSinceEpoch);
  Avatar(String? url,
      {this.online = true, this.padding = 0, this.grayedOut = false}) {
    if (url == 'random') {
      url = mockAvatars[random.nextInt(mockAvatars.length)];
    }

    this.url = url;
  }

  @override
  Widget build(BuildContext context) {
    return AspectRatio(
      aspectRatio: 1,
      child: Stack(
        children: [
          Positioned.fill(
            child: Container(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(1000),
                color: Colors.white,
              ),
              padding: EdgeInsets.all(2),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(1000),
                child: // Text('av')
                    url == null
                        ? Container(
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(1000),
                            ),
                            child: SvgPicture.asset(
                                'assets/vector/avatar_placeholder.svg'),
                          )
                        : ColorFiltered(
                            colorFilter: ColorFilter.mode(
                              grayedOut ? Colors.grey : Colors.transparent,
                              BlendMode.saturation,
                            ),
                            child: CachedNetworkImage(
                              imageUrl: url!,
                              fit: BoxFit.cover,
                              placeholder: (context, child) => Container(
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(25),
                                ),
                                child: SvgPicture.asset(
                                    'assets/vector/avatar_placeholder.svg'),
                              ),
                              errorWidget: (context, child, val) => Container(
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(25),
                                ),
                                child: SvgPicture.asset(
                                  'assets/vector/avatar_placeholder.svg',
                                ),
                              ),
                            ),
                          ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
