import 'dart:async';
import 'dart:math';

import 'package:buylink_flutter/data/network/response/message.dart';
import 'package:buylink_flutter/presentation/bloc/base_bloc.dart';
import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/presentation/resourses/app_colors.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/chat/chat_user/chat_user_bloc.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/chat/chat_user/send_pannel.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/user_details_edit/widget/category_navigator_pop.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../../../../../app_bloc.dart';
import '../../../../../../data/network/response/chat_user.dart';
import '../../../../../../generated/l10n.dart';
import '../../../../../../presentation/bloc/bloc_provider.dart';
import '../../../../../../presentation/common/sliverImplicit_animated_list.dart';
import 'message_item.dart';

class ChatUserScreen extends BaseScreen {
  final int? conversationId;
  final int userId;
  final String userName;

  ChatUserScreen({
    super.key,
    required this.conversationId,
    required this.userId,
    required this.userName,
  });

  @override
  State<ChatUserScreen> createState() => _ChatUserScreenState();
}

class _ChatUserScreenState extends BaseState<ChatUserScreen, ChatUserBloc> with WidgetsBindingObserver {
  final ScrollController _scrollController = ScrollController();
  List<Message> _prevMessages = [];
  late final AppBloc appBloc = BlocProvider.of<AppBloc>(context);
  late StreamSubscription messageSubscription;

  @override
  void initState() {
    super.initState();
    appBloc.currentChatId = widget.conversationId;
    WidgetsBinding.instance.addObserver(this);
    bloc.messages.first.then(
      (value) {
        print("object");
        Future.delayed(Duration(milliseconds: 100)).then(
          (value) => scrollListToEnd(),
        );
      },
    );
    bloc.messages.where((event) {
      if (_prevMessages.isEmpty || event.isEmpty) {
        _prevMessages = event;
        return false;
      }
      return event.lastOrNull?.id != _prevMessages.lastOrNull?.id;
    }).listen((value) {
      Future.delayed(Duration(milliseconds: 50)).then((value) => scrollListToEnd());
    });
    messageSubscription = appBloc.messages.listen(bloc.handlePushMessage);
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) {
      appBloc.currentChatId = widget.conversationId;
    } else {
      appBloc.currentChatId = null;
    }
    super.didChangeAppLifecycleState(state);
  }

  @override
  PreferredSizeWidget? appBar() {
    return AppBar(
        title: Row(
          children: [
            Container(
              child: GestureDetector(
                behavior: HitTestBehavior.translucent,
                onTap: () => Navigator.pop(context),
                child: Container(
                  width: 35,
                  height: 35,
                  child: const Padding(
                    padding: EdgeInsets.only(left: 8),
                    child: Icon(
                      Icons.arrow_back_ios,
                      size: 22,
                      color: Colors.grey,
                    ),
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(bottom: 5, left: 20),
              child: Text(
                widget.userName,
                style: const TextStyle(color: Colors.black),
              ),
            ),
          ],
        ),
        backgroundColor: Colors.white,
        automaticallyImplyLeading: false);
  }

  @override
  Widget body() {
    return SafeArea(
      child: Column(
        children: [
          Expanded(
            child: CustomScrollView(
              controller: _scrollController,
              slivers: [
                StreamBuilder<List<Message>>(
                  stream: bloc.messages,
                  builder: (context, snapshot) {
                    if (snapshot.connectionState == ConnectionState.waiting) {
                      return const SliverFillRemaining(
                        hasScrollBody: false,
                        child: Center(
                          child: CircularProgressIndicator(),
                        ),
                      );
                    }
                    if (snapshot.hasData) {
                      if (snapshot.requireData.isEmpty) {
                        return  SliverFillRemaining(
                          hasScrollBody: false,
                          child: Center(
                            child: Text(
                              S.of(context).startConversation,
                            ),
                          ),
                        );
                      } else {
                        return SliverPadding(
                          sliver: SliverImplicitAnimatedList(
                            items: [...snapshot.requireData],
                            itemBuilder: (_, index, animation) {
                              var message = snapshot.requireData[index];
                              return SlideTransition(
                                // axisAlignment: 1.0,
                                key: ValueKey(message),
                                position: animation.drive(Tween(begin: Offset(1, 0), end: Offset.zero)),
                                child: MessageItem(
                                  // onRemove: ()=> bloc.removeMessage(message),
                                  message: message,
                                  isMyMessage: message.recipientId == widget.userId,
                                ),
                              );
                            },
                            removeItemBuilder: (_, item, animation) => SlideTransition(
                              key: ValueKey(item),
                              position: animation.drive(Tween(begin: Offset.zero, end: Offset(1, 0))),
                              child: MessageItem(
                                message: item,
                                isMyMessage: item.recipientId == widget.userId,
                              ),
                            ),
                          ),
                          padding: EdgeInsets.only(bottom: 20),
                        );
                      }
                    }
                    return SliverToBoxAdapter();
                  },
                ),
              ],
            ),
          ),
          SendPanel(
            onSend: (message) {
              bloc.sendMessage(message);
            },
          )
        ],
      ),
    );
  }

  void scrollListToEnd() {
    if (mounted) {
      _scrollController.animateTo(_scrollController.position.maxScrollExtent,
          duration: Duration(seconds: 2), curve: Curves.fastOutSlowIn);
    }
  }

  @override
  void dispose() {
    appBloc.currentChatId = null;
    messageSubscription.cancel();
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  ChatUserBloc provideBloc() {
    return ChatUserBloc(
      widget.conversationId,
      widget.userId.toInt(),
    );
  }
}
