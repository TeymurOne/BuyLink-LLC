import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class FolowingItem extends StatelessWidget {
  final int count;
  final String title;

  const FolowingItem({super.key, required this.count, required this.title});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 15),
      child: Column(
        children: [
          Text(
            count.toString(),
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.w500),
          ),
          Text(title.toString(), style: TextStyle(fontSize: 14, fontWeight: FontWeight.w400, color: Colors.grey)),
        ],
      ),
    );
  }
}
