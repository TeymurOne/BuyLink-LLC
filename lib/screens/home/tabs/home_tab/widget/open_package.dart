import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:map_launcher/map_launcher.dart';

import '../../../../../data/network/response/all_request_response.dart';
import '../../../../../data/network/response/branches.dart';
import '../../../../../data/network/response/package.dart';
import '../../../../../presentation/resourses/app_colors.dart';
import '../partner/map.dart';
import 'clouse_package.dart';

class OpenPackage extends StatelessWidget {
  final Branches package;

  const OpenPackage({Key? key, required this.package}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: const EdgeInsets.only(
            bottom: 30,
          ),
          child: ClousePackage(
            opened: false,
            package: package,
          ),
        ),
        LocationProduct(
          location: LatLng(double.parse(package.lat ?? "0.0"),
              double.parse(package.lng ?? "0.0")),
        ),
        SizedBox(
          height: 10,
        ),
        GestureDetector(
          onTap: () {
            openMapsSheet(context, double.parse(package.lat ?? "0.0"),
                double.parse(package.lng ?? "0.0"));
          },
          child: Row(
            children: [
              SvgPicture.asset('assets/vector/location.svg'),
              SizedBox(
                width: 10,
              ),
              Text(package.address ?? ""),
            ],
          ),
        ),
        Padding(
          padding: const EdgeInsets.only(top: 10),
          child: GestureDetector(
            onTap: () {
              openMapsSheet(context, double.parse(package.lat ?? "0.0"),
                  double.parse(package.lng ?? "0.0"));
            },
            child: Row(
              children: [
               Icon(Icons.phone,color: Colors.grey,),
                SizedBox(
                  width: 10,
                ),
                Text(package.phone ?? ""),
              ],
            ),
          ),
        ),
        // SizedBox(
        //   height: 10,
        // ),
        // Row(
        //   children: [
        //     SvgPicture.asset('assets/vector/phone.svg'),
        //     SizedBox(
        //       width: 10,
        //     ),
        //     Text('+ 1000007777')
        //   ],
        // ),
        // SizedBox(
        //   height: 10,
        // ),
        // Row(
        //   children: [
        //     SvgPicture.asset('assets/vector/mail.svg'),
        //     SizedBox(
        //       width: 10,
        //     ),
        //     Text('mail@loremipsum.com')
        //   ],
        // ),
      ],
    );
  }
}

openMapsSheet(context, double long, double lang) async {
  try {
    final coords = Coords(
      long,
      lang,
    );
    final title = "Ocean Beach";
    final availableMaps = await MapLauncher.installedMaps;

    showModalBottomSheet(
      context: context,
      builder: (BuildContext context) {
        return SafeArea(
          child: SingleChildScrollView(
            child: Container(
              child: Wrap(
                children: <Widget>[
                  for (var map in availableMaps)
                    ListTile(
                      onTap: () => map.showMarker(
                        coords: coords,
                        title: title,
                      ),
                      title: Text(map.mapName),
                      leading: SvgPicture.asset(
                        map.icon,
                        height: 30.0,
                        width: 30.0,
                      ),
                    ),
                ],
              ),
            ),
          ),
        );
      },
    );
  } catch (e) {
    print(e);
  }
}
