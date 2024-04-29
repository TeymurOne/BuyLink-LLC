import 'dart:ffi';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../../../../../components/avatar.dart';
import '../../../../../../data/network/response/commetnts.dart';
import '../../../../../../data/network/response/recommendation_response.dart';

class CommentItem extends StatelessWidget {
  final Commetnts recommendationResponse;

  const CommentItem({super.key, required this.recommendationResponse});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(bottom: 10),
      height: 80,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(
                height: 40,
                child: Row(
                  children: [
                    Avatar(
                      recommendationResponse.user.image,
                      online: false,
                    ),
                    const SizedBox(
                      width: 10,
                    ),
                    Text(
                      recommendationResponse.user.name,
                      style:
                          TextStyle(fontWeight: FontWeight.w600, fontSize: 16),
                    )
                  ],
                ),
              ),
            ],
          ),
          Padding(
            padding: const EdgeInsets.only(left: 48),
            child: Text(
              recommendationResponse.comment,
              style: TextStyle(
                  fontWeight: FontWeight.w600,
                  fontSize: 16,
                  color: Colors.grey),
            ),
          )
        ],
      ),
    );
  }
}
