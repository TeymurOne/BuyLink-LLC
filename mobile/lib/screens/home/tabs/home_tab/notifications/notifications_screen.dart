import 'package:buylink_flutter/screens/home/home_screen.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:rxdart/rxdart.dart';
import '../../../../../data/network/response/notifications.dart';
import '../../../../../components/avatar.dart';
import '../../../../../generated/l10n.dart';
import '../../../../../presentation/bloc/base_screen.dart';
import '../../../../../presentation/bloc/utils.dart';
import '../../../../../utils/util.dart';
import '../../referal_tab/comment/comment_screen.dart';
import 'notifications_bloc.dart';

class Notifications extends BaseScreen {
  const Notifications({super.key});

  @override
  State<Notifications> createState() => _NotificationsState();
}

class _NotificationsState extends BaseState<Notifications, NotificationBloc> {
  final ScrollController _scrollController = ScrollController();
  final PublishSubject<void> onPacketsAdded = PublishSubject();
  final PublishSubject<void> onDeclarationAdded = PublishSubject();
  final dateFormat = DateFormat('d MMMM, y, hh:mm');

  @override
  void initState() {
    super.initState();
    bloc.load();
    _scrollController.addListener(
      () {
        hideKeyboardOnScroll(context, _scrollController);
        if (_scrollController.position.extentAfter <= MediaQuery.of(context).size.height) {
          bloc.load();
        }
      },
    );
  }

  @override
  Widget body() {
    return Scaffold(
        backgroundColor: CustomColors.white,
        appBar: AppBar(
          backgroundColor: CustomColors.white,
          foregroundColor: CustomColors.black,
          shadowColor: Colors.transparent,
          centerTitle: false,
          title: Text(
            S.of(context).notifications,
            style: TextStyle(
              fontWeight: FontWeight.w600,
              fontSize: 18,
            ),
          ),
        ),
        body: ListView(
          controller: _scrollController,
          children: [
            SizedBox(
              height: 25,
            ),
            RefreshIndicator(
              onRefresh: () => bloc.load(refresh: true),
              child: StreamBuilder<List<NotificationsResponse>>(
                stream: bloc.paginableList,
                builder: (context, snapshot) {
                  if (snapshot.hasData) {
                    if (snapshot.requireData.isNotEmpty) {
                      return SizedBox(
                        height: 500,
                        child: ListView.builder(
                          padding: EdgeInsets.only(left: 20,right: 20,top: 0),
                          itemCount: snapshot.requireData.length,
                          itemBuilder: (BuildContext context, int index) {
                            List<String> parts = snapshot.requireData[index].deepLink.split('/');
                            return GestureDetector(
                              behavior: HitTestBehavior.translucent,
                              onTap: () {
                                if (parts[0] == "comment")
                                  Navigator.push(
                                    context,
                                    MaterialPageRoute(
                                      builder: (BuildContext context) => CommentScreen(
                                        recommendationResponse: snapshot.requireData[index].postId!,
                                      ),
                                    ),
                                  );
                                if (parts[0] == "transaction")
                                  Navigator.push(
                                    context,
                                    MaterialPageRoute(
                                      builder: (BuildContext context) => HomeScreen(
                                        initialTabIndex: 3,
                                      ),
                                    ),
                                  );
                              },
                              child: ListTile(
                                contentPadding: EdgeInsets.zero,
                                dense: true,
                                leading: Avatar(snapshot.requireData[index].userId?.image ?? ""),
                                title: Text(
                                  snapshot.requireData[index].title ?? "null",
                                  style: TextStyle(fontSize: 12),
                                ),
                                subtitle: Text(
                                  snapshot.requireData[index].createdAt ?? "null",
                                ),
                                trailing: snapshot.requireData[index].friendRequest?.status == 0
                                    ? Row(mainAxisSize: MainAxisSize.min, children: [
                                        TextButton(
                                          onPressed: () async {
                                            await friendAccept(snapshot.requireData[index]);
                                          },
                                          child: Padding(
                                            padding: const EdgeInsets.all(8.0),
                                            child: Text(S.of(context).accept),
                                          ),
                                          style: ButtonStyle(
                                            backgroundColor: MaterialStatePropertyAll<Color>(CustomColors.blue),
                                            foregroundColor: MaterialStatePropertyAll<Color>(Colors.white),
                                            shape: MaterialStatePropertyAll<RoundedRectangleBorder>(
                                              RoundedRectangleBorder(
                                                borderRadius: BorderRadius.circular(8),
                                              ),
                                            ),
                                          ),
                                        ),
                                        SizedBox(
                                          width: 10,
                                        ),
                                        TextButton(
                                          onPressed: () => deletedBarber(snapshot.requireData[index]),
                                          child: Padding(
                                            padding: const EdgeInsets.all(8.0),
                                            child: Text(S.of(context).decline),
                                          ),
                                          style: ButtonStyle(
                                              backgroundColor: MaterialStatePropertyAll<Color>(CustomColors.lightGray),
                                              foregroundColor: MaterialStatePropertyAll<Color>(Colors.black),
                                              shape: MaterialStatePropertyAll<RoundedRectangleBorder>(
                                                  RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)))),
                                        ),
                                      ])
                                    : parts[0] == "friend"
                                        ? SizedBox()
                                        : parts[0] == "transaction"
                                            ? SizedBox()
                                            : Image.network(snapshot.requireData[index].postId?.partner.image ?? ""),
                              ),
                            );
                          },
                        ),
                      );
                    }
                    return Center(
                      child: Text(S.of(context).notUser),
                    );
                  }
                  return Text("");
                },
              ),
            ),
          ],
        ));
  }

  Future<void> deletedBarber(NotificationsResponse user) async {
    return bloc.deletedUser(user, user.friendRequestId ?? 0);
  }

  Future<void> friendAccept(NotificationsResponse user) async {
    return bloc.friendAccept(user, user.friendRequestId ?? 0).then((value) => bloc.load(refresh: true));
  }

  @override
  NotificationBloc provideBloc() {
    return NotificationBloc(onPacketsAdded);
  }

  @override
  void dispose() {
    onDeclarationAdded.close();
    onPacketsAdded.close();
    super.dispose();
  }
}
