import 'package:buylink_flutter/screens/home/tabs/home_tab/partner/partner_bloc.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import '../../../../../data/network/response/most_recommended.dart';
import '../../../../../presentation/bloc/base_screen.dart';
import '../partner/partner_screen.dart';

class PartneSliderList extends StatelessWidget {
  final MostRecommended recomended;

  const PartneSliderList({super.key, required this.recomended});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(right: 10),
      child: InkWell(
        onTap: () => Navigator.push(context, MaterialPageRoute(builder: (BuildContext context) {
          return PartnerScreen(
            partnerId: recomended.id.toString(),
          );
        })),
        child: SizedBox(
          width: 130,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                width: 130,
                height: 127,
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(8),
                  child: AspectRatio(
                    aspectRatio: 1,
                    child: Image.network(
                      recomended.image,
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Container(
                  child: Text(
                    recomended.title,
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600),
                    maxLines: 1,
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
