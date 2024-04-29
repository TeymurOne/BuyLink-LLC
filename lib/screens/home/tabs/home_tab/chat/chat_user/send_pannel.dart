import 'package:buylink_flutter/data/network/response/user.dart';
import 'package:buylink_flutter/presentation/resourses/app_colors.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../../../../../data/network/response/chat_user.dart';
import '../../../../../../generated/l10n.dart';

class SendPanel extends StatefulWidget {
  final ValueChanged<String> onSend;

  const SendPanel({super.key, required this.onSend});

  @override
  State<SendPanel> createState() => _SendPanelState();
}

class _SendPanelState extends State<SendPanel> {
  final _textEditingController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(bottom: 30, top: 10, left: 20, right: 20),
      decoration: BoxDecoration(borderRadius: BorderRadius.circular(10)),
      child: Row(
        children: [
          Expanded(
              child: Container(
            decoration: BoxDecoration(color: Colors.grey.withOpacity(0.15), borderRadius: BorderRadius.circular(4)),
            child: TextField(
              onSubmitted: (value) => _onSend(),
              maxLines: 3,
              enableIMEPersonalizedLearning: false,
              scribbleEnabled: false,
              minLines: 1,
              textInputAction: TextInputAction.send,
              controller: _textEditingController,
              decoration: InputDecoration(
                hintText: S.of(context).thanksAppreciateIt,
                contentPadding: EdgeInsets.only(bottom: 0, left: 10, top: 0, right: 0),
                suffixIconConstraints: BoxConstraints(maxHeight: 50, maxWidth: 50),
                border: InputBorder.none,
                labelStyle: TextStyle(
                  color: Colors.transparent,
                  fontSize: 18,
                ),
              ),
            ),
          )),
          IconButton(
              onPressed: _onSend,
              icon: Icon(
                Icons.send,
                color: AppColors.appColor,
                size: 30,
              ))
        ],
      ),
    );
  }

  void _onSend() {
    var message = _textEditingController.text.trim();
    if (message.isNotEmpty) {
      widget.onSend(message);
      _textEditingController.clear();
    }
  }
}
