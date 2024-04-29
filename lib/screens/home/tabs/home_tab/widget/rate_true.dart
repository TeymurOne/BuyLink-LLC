import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

import '../../../../../generated/l10n.dart';

class RateTrue extends StatefulWidget {


  @override
  State<RateTrue> createState() => _RateTrueState();
}

class _RateTrueState extends State<RateTrue> {
  double point = 1;

  @override
  Widget build(BuildContext context) {
    return SimpleDialog(
      elevation: 10,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.all(Radius.circular(22.0))),
      contentPadding: EdgeInsets.zero,
      children: [
        Container(
            decoration: const BoxDecoration(
                borderRadius: BorderRadius.all(Radius.circular(22.0)), color: Colors.white),
            child: Padding(
              padding: EdgeInsets.only(
                top: MediaQuery.of(context).padding.top * 6,
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const SizedBox(
                    height: 25,
                  ),
                  Center(child: SvgPicture.asset("asset/rate_true.svg")),

                  Container(
                    padding: EdgeInsets.all(25),
                    child: Center(
                      child: Text(
                       S.of(context).partnerDyrlndirdiyinizNTkkrEdirik,
                        style: TextStyle(fontSize: 18, fontWeight: FontWeight.w500),
                        textAlign: TextAlign.center,
                      ),
                    ),
                  ),
         

                  const SizedBox(
                    height: 10,
                  ),
                ],
              ),
            )),
      ],
    );
  }
}
