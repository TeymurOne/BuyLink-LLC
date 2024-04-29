import 'package:buylink_flutter/screens/home/home_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/home.dart';
import 'package:buylink_flutter/screens/home/tabs/walet/wallets_screen.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';

import '../data/network/response/recommendation_response.dart';
import '../presentation/resourses/app_colors.dart';
import '../screens/home/tabs/home_tab/partner/partner_screen.dart';
import '../screens/home/tabs/profil_tab/network/user_details/user_details_screen.dart';
import '../screens/home/tabs/referal_tab/user_referal_link/user_referal_link_screen.dart';
import '../utils/util.dart';
import 'avatar.dart';
import '../screens/home/tabs/referal_tab/comment/comment_screen.dart';
import 'chip.dart';

class Recommendation extends StatefulWidget {
  final RecommendationResponse recommendationResponse;
  final bool? isUserRecommendationLinks;

  final bool isComment;

  const Recommendation(
      {super.key, required this.recommendationResponse, this.isComment = true, this.isUserRecommendationLinks = true});

  @override
  State<Recommendation> createState() => _RecommendationState();
}

class _RecommendationState extends State<Recommendation> {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          GestureDetector(
            onTap: () {
              if (widget.isUserRecommendationLinks == true) {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (BuildContext context) => UserDetailsScreen(
                      user: widget.recommendationResponse.user,
                    ),
                  ),
                );
              } else
                (Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(
                      builder: (BuildContext context) => HomeScreen(
                            initialTabIndex: 4,
                          )),
                ));
            },
            child: SizedBox(
              height: 30,
              child: Row(
                children: [
                  Avatar(
                    widget.recommendationResponse.user.image,
                    online: false,
                  ),
                  SizedBox(
                    width: 10,
                  ),
                  Text(
                    widget.recommendationResponse.user.name,
                    style: TextStyle(fontWeight: FontWeight.w600),
                  )
                ],
              ),
            ),
          ),
          SizedBox(
            height: 10,
          ),
          GestureDetector(
            onTap: () => Navigator.push(
              context,
              MaterialPageRoute(
                builder: (BuildContext context) => PartnerScreen(
                  partnerId: widget.recommendationResponse.partner.id.toString(),
                ),
              ),
            ),
            child: AspectRatio(
              aspectRatio: 1.7,
              child: ClipRRect(
                borderRadius: BorderRadius.circular(8),
                child: CachedNetworkImage(
                  imageUrl: widget.recommendationResponse.partner.cover ?? "",
                  fit: BoxFit.cover,
                ),
              ),
            ),
          ),
          SizedBox(
            height: 10,
          ),
          Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Container(
                        margin: EdgeInsets.only(right: 10),
                        child: Text(
                          widget.recommendationResponse.partner.title,
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
                              widget.recommendationResponse.partner.rating.toString(),
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
                  Row(
                    children: [
                      Text(
                        '${widget.recommendationResponse.partner.userDiscount}% discount',
                        style: TextStyle(fontSize: 12, fontWeight: FontWeight.w500, color: AppColors.appColor),
                      ),
                      Text(
                        ' / ${widget.recommendationResponse.partner.referrerCommission}% referal gain',
                        style: TextStyle(fontSize: 12, fontWeight: FontWeight.w500, color: AppColors.appColor),
                      ),
                    ],
                  )
                ],
              ),
              Spacer(),
              if (widget.isUserRecommendationLinks == true)
                GestureDetector(
                  onTap: () {
                    if (widget.recommendationResponse.isUsed != true &&
                        widget.recommendationResponse.inBasket != true) {
                      Navigator.push(context, MaterialPageRoute(builder: (BuildContext context) {
                        return UserReferalLinkScreen(
                          discount: widget.recommendationResponse.partner.userDiscount.toString(),
                          postId: widget.recommendationResponse.id,
                        );
                      }));
                    }
                  },
                  child: Container(
                      height: 40,
                      width: 130,
                      decoration: BoxDecoration(
                          color: widget.recommendationResponse.isUsed == true
                              ? Colors.red
                              : widget.recommendationResponse.inBasket == true
                                  ? Colors.green.withOpacity(0.5)
                                  : AppColors.appColor,
                          borderRadius: BorderRadius.circular(10)),
                      child: Center(
                          child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text(
                            widget.recommendationResponse.isUsed == true
                                ? "Your is uset it"
                                : widget.recommendationResponse.inBasket == true
                                    ? "In basket"
                                    : "Use referal link",
                            style: TextStyle(color: Colors.white),
                          ),
                          SizedBox(
                            width: 5,
                          ),
                          Icon(
                            Icons.arrow_forward_ios_rounded,
                            color: widget.recommendationResponse.isUsed == true
                                ? Colors.red
                                : widget.recommendationResponse.inBasket == true
                                    ? Colors.green.withOpacity(0.5)
                                    : Colors.white,
                            size: 16,
                          )
                        ],
                      ))),
                )
            ],
          ),
          if (widget.recommendationResponse.title != null)
            SizedBox(
              height: 10,
            ),
          if (widget.recommendationResponse.title != null)
            RichText(
              text: TextSpan(
                  text: widget.recommendationResponse.user.name,
                  style: TextStyle(fontWeight: FontWeight.w500, fontSize: 16, color: Colors.black87),
                  children: <TextSpan>[
                    TextSpan(
                      text: " " + (widget.recommendationResponse.title ?? ""),
                      style: TextStyle(fontWeight: FontWeight.w300, fontSize: 16, color: Colors.black45),
                    ),
                  ]),
            ),
          SizedBox(
            height: 5,
          ),
          if (widget.isComment == true)
            GestureDetector(
              onTap: () => Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (BuildContext context) => CommentScreen(
                    isUserRecommendationLinks: widget.isUserRecommendationLinks,
                    recommendationResponse: widget.recommendationResponse,
                  ),
                ),
              ),
              child: SizedBox(
                height: 30,
                child: Row(
                  children: [
                    Image.asset(
                      "assets/vector/question-answer-line.png",
                      color: Colors.grey,
                      width: 18,
                    ),
                    SizedBox(
                      width: 10,
                    ),
                    Text(
                      'Add comment...',
                      style: TextStyle(color: CustomColors.gray),
                    )
                  ],
                ),
              ),
            ),
          Text(
            widget.recommendationResponse.createdAtAgo,
            style: TextStyle(color: CustomColors.gray, fontSize: 13),
          ),
        ],
      ),
    );
  }
}
