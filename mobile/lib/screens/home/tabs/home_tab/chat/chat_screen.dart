import 'dart:async';

import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/presentation/bloc/error_dispatcher.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/chat/chat_bloc.dart';
import 'package:flutter/material.dart';

import '../../../../../components/avatar.dart';
import '../../../../../data/network/response/conversation_list_response.dart';
import '../../../../../utils/util.dart';
import 'chat_user/chat_user_screen.dart';

class ChatPage extends BaseScreen {
  @override
  _ChatPageState createState() => _ChatPageState();
}

class _ChatPageState extends BaseState<ChatPage, ChatBloc> with ErrorDispatcher {
  @override
  Widget body() {
    return StreamBuilder<ConversationListResponse>(
      stream: bloc.conversationList,
      builder: (BuildContext context, snapshot) {
        if (snapshot.hasData) {
          var snap = snapshot.requireData.data;
          return ListView.builder(
            padding: EdgeInsets.all(20),
            itemCount: snap.length,
            clipBehavior: Clip.none,
            scrollDirection: Axis.vertical,
            itemBuilder: (BuildContext context, int index) {
              return GestureDetector(
                onTap: () => Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (BuildContext context) => ChatUserScreen(
                      conversationId: snap[index].id,
                      userId: snap[index].user.id,
                      userName: snap[index].user.name,
                    ),
                  ),
                ),
                child: Container(
                  height: 75,
                  width: double.infinity,
                  color: Theme.of(context).canvasColor,
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      SizedBox(
                        height: 60,
                        child: Avatar(
                          snap[index].user.image ??
                              'https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=',
                        ),
                      ),
                      SizedBox(
                        width: 20,
                      ),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                          children: [
                            Text(snap[index].user.name),
                            Text(
                              snap[index].lastMessage?.text ?? "",
                              maxLines: 2,
                              style: TextStyle(fontSize: 12, color: CustomColors.gray),
                            )
                          ],
                        ),
                      ),
                      SizedBox(
                        width: 10,
                      ),
                      Column(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.end,
                        children: [
                          Column(
                            children: [
                              SizedBox(
                                width: 5,
                              ),
                              if (snap[index].unreadMessageCount != 0)
                                Container(
                                  height: 20,
                                  width: 20,
                                  margin: const EdgeInsets.only(top: 4.0),
                                  decoration: BoxDecoration(
                                    shape: BoxShape.circle,
                                    color: CustomColors.red,
                                  ),
                                  child: Center(
                                    child: Text(
                                      snap[index].unreadMessageCount.toString(),
                                      style: TextStyle(
                                        fontSize: 10,
                                        color: Colors.white,
                                      ),
                                    ),
                                  ),
                                )
                            ],
                          ),
                        ],
                      )
                    ],
                  ),
                ),
              );
            },
          );
        }
        return SizedBox();
      },
    );
  }

  @override
  ChatBloc provideBloc() {
    return ChatBloc();
  }
}
