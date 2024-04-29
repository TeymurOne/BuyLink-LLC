import 'package:buylink_flutter/data/network/response/partner.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../../../../../components/chip.dart';
import '../../../../../../data/network/response/message.dart';
import '../../../../../../data/network/response/sender.dart';
import '../../../../../../generated/l10n.dart';
import '../../../../../../presentation/resourses/app_colors.dart';
import '../../../referal_tab/user_referal_link/user_referal_link_screen.dart';
import '../../partner/partner_screen.dart';

class MessagePartner extends StatelessWidget {
  final Partner partner;
  final Sender sender;
  final int id;
  final bool isMyMessage;
  final Message message;

  const MessagePartner({
    super.key,
    required this.partner,
    required this.sender,
    required this.id,
    required this.isMyMessage,
    required this.message,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 10, bottom: 5),
      child: InkWell(
        onTap: () => Navigator.push(
          context,
          MaterialPageRoute(
            builder: (BuildContext context) {
              return PartnerScreen(
                partnerId: partner.id.toString(),
              );
            },
          ),
        ),
        child: Container(
          padding: EdgeInsets.all(10),
          margin: EdgeInsets.only(
            left: isMyMessage ? 40 : 10,
            right: isMyMessage ? 10 : 40,
          ),
          width: 340,
          // padding: EdgeInsets.symmetric(vertical: 30, horizontal: 20),
          decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(8),
              boxShadow: [BoxShadow(blurRadius: 10, spreadRadius: 1, color: Colors.black12)]),
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
                            sender.image,
                            fit: BoxFit.cover,
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(left: 10),
                      child: Text(
                        sender.username,
                        style: TextStyle(fontSize: 13, fontWeight: FontWeight.w500),
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                height: 165,
                width: MediaQuery.of(context).size.width,
                child: AspectRatio(
                  aspectRatio: 1,
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(8),
                    child: Image.network(
                      partner.cover ??
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
                                partner.title,
                                style: TextStyle(fontWeight: FontWeight.w500, fontSize: 15),
                              ),
                            ),
                            CustomChip(
                              child: Container(
                                color: AppColors.appColorYello,
                                width: 30,
                                child: Row(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      partner.rating.toString(),
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
                              ),
                            ),
                          ],
                        ),
                        SizedBox(
                          height: 8,
                        ),
                        Text(
                          '${partner.userDiscount}' + S.of(context).discountForNetwork,
                          style: TextStyle(fontSize: 12, fontWeight: FontWeight.w500, color: AppColors.appColor),
                        ),
                        Text(
                          '${partner.referrerCommission}' + S.of(context).referralGain,
                          style: TextStyle(fontSize: 12, fontWeight: FontWeight.w500, color: AppColors.appColor),
                        ),
                      ],
                    ),
                    Spacer(),
                    if (!isMyMessage)
                      GestureDetector(
                        onTap: () {
                          if (message.isUsed != true && message.inBasket != true) {
                            Navigator.push(context, MaterialPageRoute(builder: (BuildContext context) {
                              return UserReferalLinkScreen(
                                  discount: partner.userDiscount.toString(), postId: partner.id, messageId: id);
                            }));
                          }
                        },
                        child: Container(
                          height: 40,
                          padding: EdgeInsets.all(5),
                          decoration: BoxDecoration(
                              color: message.isUsed == true
                                  ? Colors.red
                                  : message.inBasket == true
                                      ? Colors.green.withOpacity(0.5)
                                      : AppColors.appColor,
                              borderRadius: BorderRadius.circular(10)),
                          child: Center(
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Text(
                                  message.isUsed == true
                                      ? S.of(context).yourIsUsetIt
                                      : message.inBasket == true
                                          ? S.of(context).inBasket
                                          : S.of(context).useReferalLink,
                                  style: TextStyle(color: Colors.white),
                                ),
                                SizedBox(
                                  width: 5,
                                ),
                                Icon(
                                  Icons.arrow_forward_ios_rounded,
                                  color: Colors.white,
                                  size: 14,
                                )
                              ],
                            ),
                          ),
                        ),
                      ),
                  ],
                ),
              ),
              Text(message.text ?? "")
            ],
          ),
        ),
      ),
    );
  }
}
