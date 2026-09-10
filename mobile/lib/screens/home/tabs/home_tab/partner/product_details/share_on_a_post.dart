import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:hive_flutter/adapters.dart';

import '../../../../../../components/chip.dart';
import '../../../../../../data/network/request/post_create_request.dart';
import '../../../../../../data/network/response/partner.dart';
import '../../../../../../data/network/response/partner_details_response.dart';
import '../../../../../../generated/l10n.dart';
import '../../../../../../presentation/resourses/app_colors.dart';

class ShareOnAPost extends StatefulWidget {
  final PartnerDetailsResponse partner;
  final ValueChanged<PostCreateRequest> postCreate;

  const ShareOnAPost({Key? key, required this.partner, required this.postCreate}) : super(key: key);

  @override
  State<ShareOnAPost> createState() => _ShareOnAPostState();
}

class _ShareOnAPostState extends State<ShareOnAPost> {
  final TextEditingController _textEditingController = TextEditingController();
  bool isButtonEnable = true;

  @override
  Widget build(BuildContext context) {
    return SimpleDialog(
      backgroundColor: Colors.white,
      elevation: 10,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.all(
          Radius.circular(22.0),
        ),
      ),
      insetPadding: EdgeInsets.zero,
      titlePadding: EdgeInsets.zero,
      contentPadding: EdgeInsets.zero,
      children: [
        Container(
          decoration: const BoxDecoration(
              borderRadius: BorderRadius.all(
                Radius.circular(22.0),
              ),
              color: Colors.white),
          child: Padding(
            padding: EdgeInsets.only(
              top: MediaQuery.of(context).padding.top * 6,
            ),
            child: Container(
              padding: EdgeInsets.all(10),
              width: 340,
              // padding: EdgeInsets.symmetric(vertical: 30, horizontal: 20),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(10),
                  topRight: Radius.circular(10),
                ),
                color: Colors.white,
              ),
              clipBehavior: Clip.antiAlias,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisSize: MainAxisSize.min,
                children: [
                  Padding(
                    padding: const EdgeInsets.only(bottom: 10),
                    child: Row(
                      children: [
                        Container(
                          height: 35,
                          child: AspectRatio(
                            aspectRatio: 1,
                            child: ClipRRect(
                              borderRadius: BorderRadius.circular(100),
                              child: Image.network(
                                widget.partner.image ?? "null",
                                fit: BoxFit.cover,
                              ),
                            ),
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(left: 10),
                          child: Text(
                            widget.partner.title,
                            style: TextStyle(fontSize: 13, fontWeight: FontWeight.w500),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Container(
                    height: 220,
                    width: MediaQuery.of(context).size.width,
                    child: AspectRatio(
                      aspectRatio: 1,
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(8),
                        child: Image.network(
                          widget.partner.cover ??
                              'https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Tynan-Allan.jpeg',
                          fit: BoxFit.cover,
                        ),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 3.0, vertical: 6),
                    child: Row(
                      children: [
                        Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              children: [
                                Container(
                                  margin: EdgeInsets.only(right: 10),
                                  child: Text(
                                    widget.partner.title,
                                    style: TextStyle(fontWeight: FontWeight.w500, fontSize: 15),
                                  ),
                                ),
                                CustomChip(
                                    child: Container(
                                  color: AppColors.appColorYello,
                                  child: Row(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      Text(
                                        widget.partner.rating.toString(),
                                        style: TextStyle(fontSize: 12, color: Colors.white),
                                      ),
                                      Padding(
                                        padding: const EdgeInsets.only(top: 3.0),
                                        child: Icon(
                                          Icons.star_rounded,
                                          size: 12,
                                          color: Colors.white,
                                        ),
                                      )
                                    ],
                                  ),
                                )),
                              ],
                            ),
                            SizedBox(
                              height: 8,
                            ),
                            Text(
                              '${widget.partner.userDiscount}'+S.of(context).discountForNetwork,
                              style: TextStyle(fontSize: 12, fontWeight: FontWeight.w500, color: AppColors.appColor),
                            ),
                            Text(
                              '${widget.partner.referrerCommission}' +S.of(context).referralGain,
                              style: TextStyle(fontSize: 12, fontWeight: FontWeight.w500, color: AppColors.appColor),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
        Container(
          padding: EdgeInsets.all(15),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.only(
              bottomRight: Radius.circular(10),
              bottomLeft: Radius.circular(10),
            ),
          ),
          child: Column(
            children: [
              Container(
                margin: EdgeInsets.only(bottom: 25),
                decoration: BoxDecoration(color: Colors.grey.withOpacity(0.2), borderRadius: BorderRadius.circular(10)),
                child: TextField(
                  // onSubmitted: (value) => _onSend(),
                  maxLines: 3,
                  enableIMEPersonalizedLearning: false,
                  scribbleEnabled: false,
                  minLines: 1,
                  textInputAction: TextInputAction.send,
                  controller: _textEditingController,
                  decoration: InputDecoration(
                    hintText: S.of(context).postDescribtion,
                    contentPadding: EdgeInsets.only(bottom: 0, left: 10, top: 0, right: 0),
                    suffixIconConstraints: BoxConstraints(maxHeight: 50, maxWidth: 50),
                    border: InputBorder.none,
                    labelStyle: TextStyle(
                      color: Colors.transparent,
                      fontSize: 18,
                    ),
                  ),
                ),
              ),
              GestureDetector(
                child: Container(
                  height: 50,
                  width: double.infinity,
                  child: ElevatedButton(
                    style: ElevatedButton.styleFrom(
                        disabledBackgroundColor: AppColors.appColor.withOpacity(0.3),
                        backgroundColor: AppColors.appColor,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(5.0),
                        ),
                        textStyle: const TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                        )),
                    onPressed: isButtonEnable ? _shere : null,
                    child: Text(
                      S.of(context).sendPost,
                      style: TextStyle(color: Colors.white, fontWeight: FontWeight.w600, fontSize: 15),
                    ),
                  ),
                ),

              ),
            ],
          ),
        )
      ],
    );
  }
  _shere() {
    setState(() {
      isButtonEnable = false;
    });
    widget.postCreate(PostCreateRequest(
      title: _textEditingController.text.trim(),
      partnerId: widget.partner.id,
    ));
  }
}
