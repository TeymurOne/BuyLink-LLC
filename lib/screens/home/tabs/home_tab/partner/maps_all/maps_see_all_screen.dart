import 'package:buylink_flutter/screens/home/tabs/profil_tab/user_details_edit/widget/category_navigator_pop.dart';
import 'package:flutter/material.dart';

import '../../../../../../components/avatar.dart';
import '../../../../../../data/network/response/partner_details_response.dart';
import '../../../../../../generated/l10n.dart';
import '../../../../../../utils/util.dart';
import '../../widget/package_list.dart';

class MapsSeeAllScreen extends StatefulWidget {
  final PartnerDetailsResponse snap;

  const MapsSeeAllScreen({super.key, required this.snap});

  @override
  State<MapsSeeAllScreen> createState() => _MapsSeeAllScreenState();
}

class _MapsSeeAllScreenState extends State<MapsSeeAllScreen> {
  @override
  PreferredSizeWidget? appBar() {
    return AppBar(
      backgroundColor: CustomColors.white,
      foregroundColor: CustomColors.gray,
      shadowColor: Colors.transparent,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: CustomScrollView(
          slivers: [
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.all(15.0),
                child: CategoryNavigatorPop(),
              ),
            ),
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.only(left: 15, bottom: 20),
                child: ListTile(
                  contentPadding: EdgeInsets.zero,
                  leading: SizedBox(
                    width: 60,
                    height: 60,
                    child: Avatar(
                      widget.snap.image,
                      online: false,
                    ),
                  ),
                  title: Text(
                    widget.snap.title,
                    style: TextStyle(fontWeight: FontWeight.w600, fontSize: 22),
                  ),
                  subtitle: SizedBox(
                    height: 30,
                    child: Row(crossAxisAlignment: CrossAxisAlignment.center, children: [
                      Icon(
                        Icons.star,
                        color: Color(0xffFCD34D),
                      ),
                      Text(
                        (widget.snap.rating ?? 0.0).toString(),
                        style: TextStyle(fontWeight: FontWeight.w600, color: Colors.black, fontSize: 15),
                      ),
                      VerticalDivider(
                        thickness: 1,
                        color: Colors.grey,
                        indent: 6,
                        endIndent: 6,
                      ),
                      Text(
                        '${widget.snap.recommendationsCount} '+ S.of(context).recommendations,
                        style: TextStyle(fontWeight: FontWeight.w300, color: Colors.black, fontSize: 13),
                      ),
                    ]),
                  ),
                ),
              ),
            ),
            PackageList(
              data: widget.snap,
            )
          ],
        ),
      ),
    );
  }
}
