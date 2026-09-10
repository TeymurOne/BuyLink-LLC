import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../../../../../data/network/request/create_conversation.dart';
import '../../../../../../data/network/response/network.dart';
import '../../../../../../generated/l10n.dart';
import '../../../../../../presentation/bloc/utils.dart';
import '../../../../../../presentation/common/input_text.dart';
import '../../../profil_tab/network/throttler.dart';
import '../../../profil_tab/network/user_details/user_details_screen.dart';
import '../../../profil_tab/user_details_edit/widget/category_navigator_pop.dart';
import '../chat_user/chat_user_screen.dart';
import 'chat_user_list_bloc.dart';

class ChatUserListScreen extends BaseScreen {
  const ChatUserListScreen({super.key});

  @override
  State<ChatUserListScreen> createState() => _ChatUserListScreenState();
}

class _ChatUserListScreenState extends BaseState<ChatUserListScreen, ChatUserListBloc> {
  final ScrollController _scrollController = ScrollController();
  final TextEditingController _searchTextController = TextEditingController();
  final Throttler searchThrottler = Throttler();

  @override
  void initState() {
    super.initState();
    _scrollController.addListener(() {
      hideKeyboardOnScroll(context, _scrollController);
      if (_scrollController.position.extentAfter <= MediaQuery.of(context).size.height) {}
    });
    _searchTextController.addListener(
      () {
        searchThrottler.run(() {
          bloc.onSearchChanged(_searchTextController.text.trim());
        });
      },
    );
  }

  @override
  Widget body() {
    return CustomScrollView(
      physics: AlwaysScrollableScrollPhysics(),
      controller: _scrollController,
      slivers: [
        SliverToBoxAdapter(
          child: Padding(
            padding: const EdgeInsets.only(left: 22, right: 22),
            child: TextFildd(
              labelText: S.of(context).search,
              controller: _searchTextController,
            ),
          ),
        ),
        StreamBuilder<List<Network>>(
          stream: bloc.getMyNetwork,
          builder: (BuildContext context, span) {
            if (span.hasData) {
              if (span.requireData.isNotEmpty) {
                return SliverList(
                    delegate: SliverChildBuilderDelegate(
                  (_, index) => GestureDetector(
                    onTap: () async {
                      await bloc
                          .createConversation(
                            CreateConversation(
                              recipientId: span.requireData[index].user.id ?? 0,
                            ),
                          )
                          .then(
                            (value) => Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (BuildContext context) => ChatUserScreen(
                                  userId: span.requireData[index].user.id ?? 0,
                                  conversationId: value.data.id,
                                  userName: span.requireData[index].user.name,
                                ),
                              ),
                            ),
                          );
                    },
                    child: Padding(
                      padding: const EdgeInsets.only(left: 25),
                      child: ListTile(
                        leading: AspectRatio(
                          aspectRatio: 1,
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(100),
                            child: Image.network(
                              span.requireData[index].user.image,
                              fit: BoxFit.cover,
                            ),
                          ),
                        ),
                        contentPadding: EdgeInsets.symmetric(vertical: 12),
                        title: Text(
                          span.requireData[index].user.name,
                          style: TextStyle(fontWeight: FontWeight.w500),
                        ),
                      ),
                    ),
                  ),
                  childCount: span.requireData.length,
                ));
              }
              return const SliverToBoxAdapter();
            }
            return const SliverToBoxAdapter();
          },
        ),
      ],
    );
  }

  @override
  ChatUserListBloc provideBloc() {
    return ChatUserListBloc();
  }
}
