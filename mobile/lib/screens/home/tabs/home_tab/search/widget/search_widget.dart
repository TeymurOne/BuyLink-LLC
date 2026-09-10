import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

import '../../../../../../generated/l10n.dart';

class SearchWidget extends StatelessWidget {
  final TextEditingController searchController;

  const SearchWidget({Key? key, required this.searchController})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          height: 50,
          padding: EdgeInsets.only(left: 10, right: 10),
          margin: EdgeInsets.only(left: 24, right: 24, bottom: 25),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(18),
            color: Colors.white,
            boxShadow: [
              BoxShadow(
                color: Colors.grey.withOpacity(0.4),
                blurRadius: 10.0, // soften the shadow
                spreadRadius: 0.0, //extend the shadow
                offset: Offset(
                  0.0,
                  10.0,
                ),
              )
            ],
          ),
          child: TextField(
            controller: searchController,
            style: const TextStyle(fontSize: 16, color: Colors.black),
            decoration: InputDecoration(
              hintText: S.of(context).search,
              hintStyle: const TextStyle(color: Colors.grey),
              fillColor: Colors.white,
              filled: true,
              suffixIcon: Padding(
                padding: const EdgeInsets.all(14.0),
                child: SvgPicture.asset(
                  'asset/search.svg',
                  height: 12,
                ),
              ),
              enabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(15),
                  borderSide: const BorderSide(color: Colors.white)),
              focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(15),
                  borderSide: const BorderSide(color: Colors.white)),
            ),
          ),

          // Row(
          //   children: [
          //
          //     TextField(controller: searchController,),
          //     Container(
          //       width: 1,
          //       height: 25,
          //       decoration:
          //           BoxDecoration(color: Colors.grey, borderRadius: BorderRadius.circular(10)),
          //     ),
          //     SizedBox(
          //       width: 17,
          //     ),
          //
          //   ],
          // ),
        ),
      ],
    );
  }
}
