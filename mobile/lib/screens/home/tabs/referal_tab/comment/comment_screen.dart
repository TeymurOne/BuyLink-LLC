import 'dart:async';

import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/presentation/resourses/app_colors.dart';
import 'package:buylink_flutter/screens/home/tabs/profil_tab/user_details_edit/widget/category_navigator_pop.dart';
import 'package:buylink_flutter/screens/home/tabs/referal_tab/comment/widget/commet_item.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../../../../components/avatar.dart';
import '../../../../../components/recommendation.dart';
import '../../../../../data/network/request/create_comment_request.dart';
import '../../../../../data/network/response/commwnts_list.dart';
import '../../../../../data/network/response/recommendation_response.dart';
import '../../../../../domain/entities/patterns.dart';
import '../../../../../generated/l10n.dart';
import '../../../../../presentation/bloc/error_dispatcher.dart';
import '../../../../../presentation/common/input_with_suffix_icon.dart';
import 'comment_bloc.dart';

class CommentScreen extends BaseScreen {
  final RecommendationResponse recommendationResponse;
  final bool? isUserRecommendationLinks;

  const CommentScreen({super.key, this.isUserRecommendationLinks, required this.recommendationResponse});

  @override
  State<CommentScreen> createState() => _CommentScreenState();
}

class _CommentScreenState extends BaseState<CommentScreen, CommentBloc> with ErrorDispatcher, TickerProviderStateMixin {
  final TextEditingController _commentController = TextEditingController();
  final ScrollController _scrollController = ScrollController();
  final ValueNotifier<bool> _valueNotifier = ValueNotifier(false);
  Timer? timer;

  @override
  void initState() {
    super.initState();
    _commentController.addListener(_validate);
    // timer = Timer.periodic(Duration(seconds: 3), (Timer t) => bloc.load());
  }

  @override
  Widget body() {
    return RefreshIndicator(
      onRefresh: bloc.load,
      child: Stack(
        children: [
          Padding(
            padding: const EdgeInsets.only(top: 20, bottom: 50, left: 20, right: 20),
            child: CustomScrollView(
              controller: _scrollController,
              slivers: [
                SliverToBoxAdapter(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                       Padding(
                        padding: EdgeInsets.only(top: 25, bottom: 5),
                        child: CategoryNavigatorPop(
                          title: S.of(context).comments,
                        ),
                      ),
                      Recommendation(
                        isComment: false,
                        isUserRecommendationLinks: widget.isUserRecommendationLinks,
                        recommendationResponse: widget.recommendationResponse,
                      ),
                      Container(
                        margin: EdgeInsets.only(top: 5, bottom: 25),
                        height: 1,
                        width: double.infinity,
                        color: Colors.grey.withOpacity(0.2),
                      ),
                    ],
                  ),
                ),
                StreamBuilder<CommentsList>(
                  stream: bloc.getCommentsList,
                  builder: (BuildContext context, snapshot) {
                    if (snapshot.hasData) {
                      if (snapshot.requireData.data.isNotEmpty) {
                        return SliverPadding(
                          sliver: SliverList(
                              delegate: SliverChildBuilderDelegate(
                            (_, index) => CommentItem(
                              recommendationResponse: snapshot.requireData.data[index],
                            ),
                            childCount: snapshot.requireData.data.length,
                          )),
                          padding: EdgeInsets.only(bottom: 40),
                        );
                      }
                      return SliverToBoxAdapter(
                          child: Center(
                        child: Text(S.of(context).notComment),
                      ));
                    }
                    return const SliverToBoxAdapter();
                  },
                ),
              ],
            ),
          ),
          Align(
            alignment: Alignment.bottomCenter,
            child: Container(
              padding: EdgeInsets.only(bottom: 10),
              width: double.infinity,
              color: Colors.white,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Container(
                    margin: EdgeInsets.only(top: 20, left: 5),
                    height: 40,
                    child: Row(
                      children: [
                        Avatar(
                          widget.recommendationResponse.user.image,
                          online: false,
                        ),
                      ],
                    ),
                  ),
                  Container(
                    width: MediaQuery.of(context).size.width * 0.75,
                    child: TextInputWithIcon(
                      height: 50,
                      labelText: S.of(context).addComment,
                      controller: _commentController,
                    ),
                  ),
                  Spacer(),
                  Container(
                    margin: EdgeInsets.only(top: 20),
                    height: 50,
                    width: 50,
                    decoration: BoxDecoration(
                        border: Border.all(
                          color: Colors.white,
                        ),
                        borderRadius: BorderRadius.circular(10)),
                    child: ValueListenableBuilder<bool>(
                      valueListenable: _valueNotifier,
                      builder: (_, value, __) {
                        return ElevatedButton(
                            style: ElevatedButton.styleFrom(
                              padding: EdgeInsets.only(right: 0),
                              disabledBackgroundColor: AppColors.appColor.withOpacity(0.3),
                              backgroundColor: AppColors.appColor,
                              shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(5.0),
                              ),
                              textStyle: const TextStyle(
                                fontSize: 18,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                            onPressed: () async {
                              FocusScope.of(context).unfocus();
                              await _sendComment();
                              _commentController.clear();
                              await bloc.load();
                              WidgetsBinding.instance.addPostFrameCallback(_scrollToEnd);
                            },
                            child: Center(
                                child: Icon(
                              Icons.send,
                              color: Colors.white,
                            )));
                      },
                    ),
                  ),
                ],
              ),
            ),
          )
        ],
      ),
    );
  }

  @override
  CommentBloc provideBloc() {
    return CommentBloc(widget.recommendationResponse.id.toString());
  }

  void _validate() {
    var isValid = Patterns.textField.hasMatch(_commentController.text.trim());
    _valueNotifier.value = isValid;
  }

  _sendComment() {
    final comment = _commentController.text.trim();
    bloc.createComment(CreateCommentRequest(postId: widget.recommendationResponse.id.toString(), comment: comment));
  }

  @override
  void dispose() {
    _commentController.clear();
    super.dispose();
  }

  void _scrollToEnd(Duration timeStamp) {
    _scrollController.animateTo(_scrollController.position.maxScrollExtent, duration: Duration(milliseconds: 300), curve: Curves.easeIn);
  }
}
