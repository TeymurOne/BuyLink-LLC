import 'package:buylink_flutter/data/network/response/message.dart';
import 'package:buylink_flutter/presentation/resourses/app_colors.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/user_details_edit/widget/category_navigator_pop.dart';
import 'package:flutter/material.dart';

import 'message_partner.dart';

class MessageItem extends StatelessWidget {
  final bool isMyMessage;
  final Message message;
  final VoidCallback? onRemove;

  MessageItem({
    super.key,
    required this.message,
    required this.isMyMessage,
    this.onRemove,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: isMyMessage ? MainAxisAlignment.end : MainAxisAlignment.start,
      children: [
        if (message.partner == null)
          Flexible(
            child: Padding(
              padding: EdgeInsets.only(
                left: isMyMessage ? 40 : 5,
                right: isMyMessage ? 5 : 40,
                top: 10,
                bottom: 5,
              ),
              child: Container(
                padding: EdgeInsets.all(10),
                decoration: BoxDecoration(
                    color: isMyMessage ? AppColors.appColor : Colors.grey.withOpacity(0.2),
                    borderRadius: BorderRadius.only(
                      bottomRight: Radius.circular(isMyMessage ? 0 : 18),
                      bottomLeft: Radius.circular(isMyMessage ? 18 : 0),
                      topRight: Radius.circular(18),
                      topLeft: Radius.circular(18),
                    )),
                child: GestureDetector(
                  onTap: onRemove,
                  child: Column(
                    crossAxisAlignment: isMyMessage ? CrossAxisAlignment.end : CrossAxisAlignment.start,
                    children: [
                      Text(
                        message.text ?? "Null",
                        textAlign: isMyMessage ? TextAlign.end : TextAlign.start,
                        style: TextStyle(
                            color: isMyMessage ? Colors.white : Colors.black54,
                            fontSize: 16,
                            fontWeight: FontWeight.w400),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(top: 8),
                        child: Text(
                          message.sendDate,
                          textAlign: isMyMessage ? TextAlign.end : TextAlign.start,
                          style: TextStyle(color: isMyMessage ? Colors.white : Colors.black54, fontSize: 11),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        if (message.partner != null)
          MessagePartner(
            message:message,
            partner: message.partner!,
            id: message.id,
            isMyMessage: isMyMessage, sender: message.sender!,
          )
      ],
    );
  }
}
