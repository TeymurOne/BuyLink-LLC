import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/presentation/resourses/app_colors.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/network/user_details/user_detals_bloc.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/network/user_details/widget/folowing_item.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/user_details_edit/widget/category_navigator_pop.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../../../../../../components/recommendation.dart';
import '../../../../../../data/network/request/create_conversation.dart';
import '../../../../../../data/network/response/network_user.dart';
import '../../../../../../data/network/response/recommendation_response.dart';
import '../../../../../../data/network/response/user.dart';
import '../../../../../../generated/l10n.dart';
import '../../../../../../presentation/bloc/utils.dart';
import '../../../home_tab/chat/chat_user/chat_user_screen.dart';
import '../../logout_dialog.dart';
import '../../settings/settings_screen.dart';
import '../../user_details_edit/user_details_screen.dart';
import '../network_screen.dart';

class UserDetailsScreen extends BaseScreen {
  final NetworkUser? user;

  const UserDetailsScreen({super.key, this.user});

  @override
  State<UserDetailsScreen> createState() => _UserDetailsScreenState();
}

class _UserDetailsScreenState extends BaseState<UserDetailsScreen, UserDetailsBloc> {
  final ScrollController _scrollController = ScrollController();

  @override
  void initState() {
    super.initState();
    bloc.load();
    _scrollController.addListener(() {
      hideKeyboardOnScroll(context, _scrollController);
      if (_scrollController.position.extentAfter <= MediaQuery.of(context).size.height) {
        bloc.load();
      }
    });
  }

  @override
  Widget body() {
    return CustomScrollView(
      slivers: [
        SliverToBoxAdapter(
          child: StreamBuilder<User>(
            stream: bloc.userDetails,
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                return Stack(
                  children: [
                    Padding(
                      padding: EdgeInsets.only(top: 50, left: 20, right: 20),
                      child: Row(
                        children: [
                            Container(
                              child: GestureDetector(
                                behavior: HitTestBehavior.translucent,
                                onTap: () => Navigator.pop(context),
                                child: Container(
                                  width: 35,
                                  height: 35,
                                  child: Padding(
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
                          Spacer(),
                          if (widget.user == null)
                            GestureDetector(
                              onTap: () => Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder: (BuildContext context) => SettingsScreen(
                                    user: snapshot.requireData,
                                  ),
                                ),
                              ),
                              child: Icon(
                                Icons.settings,
                                color: Colors.grey,
                              ),
                            )
                        ],
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(top: 100, left: 20, right: 20),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Stack(
                                children: [
                                  Container(
                                    height: 80,
                                    width: 80,
                                    child: AspectRatio(
                                      aspectRatio: 1,
                                      child: ClipRRect(
                                        borderRadius: BorderRadius.circular(100),
                                        child: Image.network(
                                          widget.user?.image ?? (snapshot.requireData.image ?? ""),
                                          fit: BoxFit.cover,
                                        ),
                                      ),
                                    ),
                                  ),
                                  Positioned(
                                    right: 0,
                                    bottom: 0,
                                    child: GestureDetector(
                                      onTap: () => Navigator.push(
                                        context,
                                        MaterialPageRoute(
                                          builder: (BuildContext context) => UserDetailsEditScreen(
                                            user: snapshot.requireData,
                                            isRegistered: true,
                                          ),
                                        ),
                                      ),
                                      child: Container(
                                          width: 22,
                                          height: 22,
                                          decoration: BoxDecoration(
                                              color: AppColors.appColor, borderRadius: BorderRadius.circular(50)),
                                          child: Icon(
                                            Icons.edit,
                                            color: Colors.white,
                                            size: 12,
                                          )),
                                    ),
                                  )
                                ],
                              ),
                              Spacer(),
                              FolowingItem(
                                count: widget.user?.refererCount ?? (snapshot.requireData.refererCount ?? 0),
                                title: S.of(context).refers,
                              ),
                              FolowingItem(
                                count: widget.user?.fiendsCount ?? (snapshot.requireData.fiendsCount ?? 0),
                                title: S.of(context).network,
                              ),
                              FolowingItem(
                                count: widget.user?.transactionCount ?? (snapshot.requireData.transactionCount ?? 0),
                                title: S.of(context).deals,
                              ),
                              Spacer(),
                            ],
                          ),
                          Padding(
                            padding: const EdgeInsets.only(top: 15, bottom: 10),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  widget.user?.name ?? (snapshot.requireData.name),
                                  style: TextStyle(fontWeight: FontWeight.w500, fontSize: 16),
                                ),
                                Text(
                                  "@" + (widget.user?.username ?? (snapshot.requireData.username ?? "null")),
                                  style: TextStyle(fontWeight: FontWeight.w400, fontSize: 14, color: Colors.grey),
                                ),
                              ],
                            ),
                          )
                        ],
                      ),
                    ),
                  ],
                );
              }
              return const SizedBox();
            },
          ),
        ),
        if (widget.user != null)
          SliverToBoxAdapter(
            child: StreamBuilder<NetworkUser>(
              stream: bloc.profileDetails,
              builder: (_, snapshot) {
                if (snapshot.hasData) {
                  final snap = snapshot.requireData;
                  return GestureDetector(
                      onTap: () {
                        if (snap.friendStatus == 1) {
                          showDialog(
                            context: context,
                            builder: (_) {
                              return LogoutDialog(
                                title: S.of(context).dostunuSilmekIsteirsen,
                                postDelete: () {
                                  bloc.changedFriendStatus(snap.friendStatus ?? 5);
                                },
                              );
                            },
                          );
                        } else {
                          bloc.changedFriendStatus(snap.friendStatus ?? 5);
                        }
                      },
                      child: Row(
                        children: [
                          Expanded(
                            child: Container(
                              margin: EdgeInsets.all(20),
                              width:
                                  snap.friendStatus == 1 ? MediaQuery.of(context).size.width * 0.43 : double.infinity,
                              height: 47,
                              decoration: BoxDecoration(
                                  border: Border.all(
                                      color: snap.friendStatus == 0
                                          ? Colors.grey.withOpacity(0.1)
                                          : snap.friendStatus == 1
                                              ? Colors.grey.withOpacity(0.1)
                                              : snap.friendStatus == 2
                                                  ? Colors.red.withOpacity(0.5)
                                                  : AppColors.appColor),
                                  color: snap.friendStatus == 0
                                      ? Colors.grey.withOpacity(0.3)
                                      : snap.friendStatus == 1
                                          ? Colors.grey.withOpacity(0.2)
                                          : snap.friendStatus == 2
                                              ? Colors.red.withOpacity(0.5)
                                              : AppColors.appColor,
                                  borderRadius: BorderRadius.circular(5)),
                              child: Center(
                                child: Row(
                                  crossAxisAlignment: CrossAxisAlignment.center,
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    if (snap.friendStatus != 0 && snap.friendStatus != 1 && snap.friendStatus != 2)
                                      Image.asset(
                                        "assets/vector/user-add-fill.png",
                                        width: 17,
                                      ),
                                    if (snap.friendStatus == 0) Image.asset("assets/vector/time.png", width: 17),
                                    if (snap.friendStatus == 1)
                                      Image.asset(
                                        "assets/vector/user-aded-fill.png",
                                        width: 17,
                                      ),
                                    SizedBox(
                                      width: 10,
                                    ),
                                    Text(
                                        snap.friendStatus == 0
                                            ? S.of(context).requested
                                            : snap.friendStatus == 1
                                                ? S.of(context).accepted
                                                : snap.friendStatus == 2
                                                    ? S.of(context).decline
                                                    : S.of(context).connect,
                                        style: TextStyle(
                                            color: snap.friendStatus == 0
                                                ? null
                                                : snap.friendStatus == 1
                                                    ? null
                                                    : snap.friendStatus == 2
                                                        ? Colors.white
                                                        : Colors.white,
                                            fontSize: 16,
                                            fontWeight: FontWeight.w500)),
                                  ],
                                ),
                              ),
                            ),
                          ),
                          if (snap.friendStatus == 1)
                            GestureDetector(
                              onTap: () async {
                                await bloc
                                    .createConversation(
                                      CreateConversation(
                                        recipientId: snap.id ?? 0,
                                      ),
                                    )
                                    .then(
                                      (value) => Navigator.push(
                                        context,
                                        MaterialPageRoute(
                                          builder: (BuildContext context) => ChatUserScreen(
                                            userId: snap.id ?? 0,
                                            conversationId: value.data.id,
                                            userName: snap.username ?? "null",
                                          ),
                                        ),
                                      ),
                                    );
                              },
                              child: Container(
                                  margin: EdgeInsets.only(right: 20),
                                  decoration:
                                      BoxDecoration(color: AppColors.appColor, borderRadius: BorderRadius.circular(5)),
                                  height: 47,
                                  width: MediaQuery.of(context).size.width * 0.43,
                                  child: Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: [
                                      Image.asset("assets/vector/send.png", width: 17, color: Colors.white),
                                      SizedBox(
                                        width: 10,
                                      ),
                                      Text(
                                        S.of(context).message,
                                        style: TextStyle(color: Colors.white),
                                      ),
                                    ],
                                  )),
                            )
                        ],
                      ));
                }
                return SizedBox();
              },
            ),
          ),
        //Todo if widget.user.friendStatus == 1
        // if (widget.user.friendStatus == 1)
        StreamBuilder<List<RecommendationResponse>>(
          stream: bloc.paginableList,
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              if (snapshot.requireData.isNotEmpty) {
                return SliverPadding(
                  sliver: SliverList(
                    delegate: SliverChildBuilderDelegate(
                      (_, index) => Padding(
                        padding: const EdgeInsets.only(bottom: 10),
                        child: Recommendation(
                          recommendationResponse: snapshot.requireData[index],
                        ),
                      ),
                      childCount: snapshot.requireData.length,
                    ),
                  ),
                  padding: EdgeInsets.only(bottom: 10, left: 10, right: 20),
                );
              }
              return SliverToBoxAdapter(
                child: Center(
                  child: Column(
                    children: [
                      Padding(
                        padding: const EdgeInsets.only(left: 40,right: 40,top: 10),
                        child: Image.asset("assets/raster/referal_not_myn.png"),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(left: 20, right: 20),
                        child: Text(
                          S.of(context).thereIsNoPostsForNow,
                          style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.w700,
                          ),
                        ),
                      ),

                    ],
                  ),
                ),
              );
            }
            return SliverToBoxAdapter();
          },
        ),
      ],
    );
  }

  @override
  UserDetailsBloc provideBloc() {
    return UserDetailsBloc(widget.user?.id.toString() ?? "0");
  }
}
