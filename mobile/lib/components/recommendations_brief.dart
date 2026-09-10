import 'package:flutter/material.dart';

import 'avatar.dart';

class RecommendationsBrief extends StatelessWidget {
  RecommendationsBrief({super.key});
  static const double size = 30;
  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: size,
      child: Row(
        children: [
          Stack(
            clipBehavior: Clip.none,
            children: [
              Transform.translate(
                offset: Offset(size * 1.3, 0),
                child: Avatar(
                  'random',
                  online: false,
                ),
              ),
              Transform.translate(
                offset: Offset(size * 0.65, 0),
                child: Avatar(
                  'random',
                  online: false,
                ),
              ),
              Avatar(
                'random',
                online: false,
              ),
            ],
          ),
          SizedBox(
            width: size * 1.3,
          ),
          SizedBox(
            width: 10,
          ),
          Flexible(
            child: Text(
              'Zarina Majidova, Teymuraz Aliyev and 5 other friends recommend',
              maxLines: 2,
            ),
          )
        ],
      ),
    );
  }
}
