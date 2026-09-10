import 'dart:async';
import 'dart:developer';

import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

class Util {
  // //prod
  // static final String apiUrl = "https://mashin.al/api/";
  // static final String mediaUrl = "https://mashin.al";
  // static String chatHost = 'wss.mashin.al';
  // static String chatAuthUrl = 'https://mashin.al/broadcasting/auth';

  //dev
  static final String apiUrl = "http://buylink.simple.az/api/";

  // static final DateFormat formatter = DateFormat('dd/MM/yyyy');

  static String getPhoneNumber(String number) {
    return '994${number.replaceAll('+ (994)', '').replaceAll(' ', '').replaceAll("-", '')}';
  }

  static bool isValidPhonePrefix(String phoneNumber) {
    final List<String> validPhonePrefix = [
      "50",
      "51",
      "55",
      "60",
      "70",
      "77",
      "99",
      "10"
    ];

    if (phoneNumber.length == 24) {
      phoneNumber = Util.getPhoneNumber(phoneNumber);
    }
    return validPhonePrefix.contains(phoneNumber.substring(3, 5));
  }

  static Uri getApiUrl(String path) {
    return Uri.parse(apiUrl + path); // apiUrl + path;
  }

  static String getVectorPath(String name) {
    return 'assets/vector/$name.svg';
  }

  static Color hexToColor(String code) {
    return Color(int.parse(code.replaceFirst('#', ''), radix: 16) + 0xFF000000);
  }

  // static Future<void> showAlert(
  //     BuildContext buildContext, Function() onPressed) async {
  //   bool result = await showDialog(
  //     context: buildContext,
  //     builder: (context) {
  //       return AlertDialog(
  //         title: Text(
  //           Localized('confirm').value,
  //           style: TextStyle(fontSize: 16),
  //         ),
  //         content: Text(Localized('are_you_sure').value),
  //         actions: <Widget>[
  //           ConstrainedBox(
  //             constraints: BoxConstraints(
  //                 maxWidth: MediaQuery.of(context).size.width * 0.75),
  //             child: Row(
  //               children: [
  //                 Flexible(
  //                   child: CustomButton(
  //                       Theme.of(context).accentColor,
  //                       false,
  //                       IconedLabel(
  //                         null,
  //                         Localized('no').value,
  //                       ), () {
  //                     Navigator.of(context).maybePop();
  //                   }),
  //                 ),
  //                 SizedBox(
  //                   width: 10,
  //                 ),
  //                 Flexible(
  //                   child: CustomButton(
  //                       CustomColors.green,
  //                       true,
  //                       IconedLabel(
  //                         null,
  //                         Localized('yes').value,
  //                       ), () {
  //                     onPressed();
  //                     Navigator.of(context).maybePop();
  //                   }),
  //                 ),
  //               ],
  //             ),
  //           )
  //         ],
  //       );
  //     },
  //   );
  //   return;
  // }

  // static checkInternetConnection() async {
  //   // var hasInternet = (await ApiServi                    7ce.getInstance.hasInternetConnection());
  //   if (!_hasError) {
  //     OverlayEntry overlay = OverlayEntry(builder: (context) {
  //       return Container(
  //         height: double.maxFinite,
  //         width: double.maxFinite,
  //         color: CustomColors.black.withOpacity(0.3),
  //         child: Center(
  //             child: AlertDialog(
  //           title: Text(
  //             Localized('connection_error').value,
  //             style: TextStyle(fontSize: 16, color: CustomColors.black),
  //           ),
  //           content: SvgPicture.asset('assets/vector/no_connection.svg'),
  //           actions: <Widget>[
  //             ConstrainedBox(
  //               constraints: BoxConstraints(
  //                   maxWidth: MediaQuery.of(context).size.width * 0.75),
  //               child: Row(
  //                 children: [
  //                   Flexible(
  //                     child: CustomButton(
  //                         Theme.of(context).accentColor,
  //                         true,
  //                         IconedLabel(
  //                           null,
  //                           Localized('retry').value,
  //                         ), () {
  //                       // onPressed();
  //                       Phoenix.rebirth(context);
  //                       // Navigator.of(context).maybePop();
  //                     }),
  //                   ),
  //                 ],
  //               ),
  //             )
  //           ],
  //         )),
  //       );
  //     });

  //     Overlay.of(AppState.mainNavigator.currentContext).insert(overlay);
  //     _hasError = true;
  //   }
  // }

  // static createOverlay(Stream<double> progress) {
  //   overlayEntry = OverlayEntry(
  //     maintainState: true,
  //     builder: (context) {
  //       return GestureDetector(
  //         behavior: HitTestBehavior.opaque,
  //         child: BackdropFilter(
  //           filter: ImageFilter.blur(sigmaX: 5, sigmaY: 5),
  //           child: Material(
  //             color: CustomColors.black.withOpacity(0.5),
  //             child: Container(
  //               // color: CustomColors.lightGray,
  //               height: double.infinity,
  //               width: double.infinity,
  //               child: StreamBuilder<double>(
  //                 stream: progress,
  //                 builder: (context, snapshot) {
  //                   return Center(
  //                     child: CircularProgressIndicator(
  //                       value: snapshot.data,
  //                     ),
  //                   );
  //                 },
  //               ),
  //             ),
  //           ),
  //         ),
  //       );
  //     },
  //   );
  // }

  // static insertOverLay(BuildContext context) {
  //   Overlay.of(context).insert(overlayEntry);
  // }

  // static removeOverlay() async {
  //   if (overlayEntry != null) {
  //     overlayEntry.remove();
  //   }
  // }

  // static Future<Uint8List> resizeXFileImageToUpload(XFile xFile) async {

  //         final image = img.decodeImage(bytes);
  //         final resizedImg =
  //             img.copyResize(image, width: min(image.width, 1920));
  //         final encodedResizedImg = img.encodeJpg(resizedImg, quality: 85);

  //   var isPortrait = asset.width < xFile.height;
  //   var ratio = 1920.0 / (isPortrait ? asset.height : asset.width);
  //   int width = isPortrait ? (asset.width * ratio).toInt() : 1920;
  //   int height = isPortrait ? 1920 : (asset.height * ratio).toInt();
  //   var result = await asset.thumbDataWithSize(width, height);
  //   return result;
  // }

  // static showModal(Widget child) {
  //   showModalBottomSheet(
  //     context: _context,
  //     backgroundColor: Colors.transparent,
  //     isScrollControlled: true,
  //     builder: (context) {
  //       return child;
  //     },
  //   );
  // }
}

class CustomColors {
  static const Color lightGray2 = Color(0xffF2F3F5);
  static const Color lightGray3 = Color(0xfffbfbfb);

  static const Color lightGray = Color(0xffe6e8ec);
  static const Color gray = Color(0xff979797);
  static const Color darkGray = Color(0xff242426);
  static const Color white = Colors.white;
  static const Color lightBlue = Color(0xff646e95);
  static const Color black = Color(0xff1C1C1E);
  static const Color red = Color(0xffF81734);
  static const Color green = Color(0xff29a53e);
  static const Color darkBlue = Color(0xff091A3E);
  static const Color blue = Color(0xff4C5DF5);
  static const Color yellow = Color(0xffF2EABD);
}
