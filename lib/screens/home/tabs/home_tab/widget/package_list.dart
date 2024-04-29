import 'package:flutter/material.dart';
import '../../../../../data/network/response/all_request_data.dart';
import '../../../../../data/network/response/branches.dart';
import '../../../../../data/network/response/partner_details_response.dart';
import 'package_item.dart';

const productItemHeight = 290.0;
const bigProductItemHeight = 350.0;

class PackageList extends StatelessWidget {
  final PartnerDetailsResponse data;

  const PackageList({super.key, required this.data});

  @override
  Widget build(BuildContext context) {
    return SliverList(
      delegate: SliverChildBuilderDelegate(
        (_, index) {
          return PackageItem(
            package: data.branches[index],
          );
        },
        childCount: data.branches.length,
      ),
    );
  }
}
