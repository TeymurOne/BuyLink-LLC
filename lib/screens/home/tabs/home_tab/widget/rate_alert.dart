import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_rating_bar/flutter_rating_bar.dart';
import '../../../../../data/network/request/raiting_request.dart';
import '../../../../../generated/l10n.dart';
import '../../../../../presentation/common/input_text.dart';
import '../../../../../presentation/resourses/app_colors.dart';

class RateDialog extends StatefulWidget {
  final ValueChanged<RaitingRequest> onchanged;

  RateDialog({super.key, required this.onchanged});

  @override
  State<RateDialog> createState() => _RateDialogState();
}

class _RateDialogState extends State<RateDialog> {
  final TextEditingController _descriptionController = TextEditingController();
  double point = 1;

  @override
  Widget build(BuildContext context) {
    return SimpleDialog(
      elevation: 10,
      shape: const RoundedRectangleBorder(
          borderRadius: BorderRadius.all(Radius.circular(22.0))),
      contentPadding: EdgeInsets.zero,
      children: [
        Container(
            decoration: const BoxDecoration(
                borderRadius: BorderRadius.all(Radius.circular(22.0)),
                color: Colors.white),
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
                   Center(
                    child: Text(
                      S.of(context).partnerRaiting,
                      style:
                          const TextStyle(fontSize: 18, fontWeight: FontWeight.w500),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(32.0),
                    child: Center(
                      child: RatingBar.builder(
                        itemSize: 45,
                        initialRating: 1,
                        unratedColor: Colors.yellow.withOpacity(0.4),
                        minRating: 1,
                        direction: Axis.horizontal,
                        allowHalfRating: false,
                        itemCount: 5,
                        itemPadding: const EdgeInsets.symmetric(horizontal: 1.0),
                        itemBuilder: (context, _) => const Icon(
                          Icons.star,
                          color: Colors.amber,
                        ),
                        onRatingUpdate: (rating) {
                          setState(() {
                            point = rating;
                          });
                        },
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(20.0),
                    child: TextFildd(
                      labelText: S.of(context).describtion,
                      controller: _descriptionController,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(
                        bottom: 10, top: 10, left: 25, right: 25),
                    child: GestureDetector(
                      onTap: () {
                        widget.onchanged(
                          RaitingRequest(
                            rating: point.toInt(),
                            description: _descriptionController.text.trim(),
                          ),
                        );
                        Navigator.pop(context);
                      },
                      child: Container(
                        height: 50,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(8),
                          color: AppColors.appColor,
                        ),
                        child:  Center(
                          child: Text(
                            S.of(context).send,
                            style: TextStyle(
                                color: Colors.white,
                                fontWeight: FontWeight.w600),
                          ),
                        ),
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
