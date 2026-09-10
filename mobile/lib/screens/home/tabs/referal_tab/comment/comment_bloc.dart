import 'package:buylink_flutter/presentation/bloc/base_bloc.dart';
import 'package:rxdart/rxdart.dart';

import '../../../../../data/network/request/create_comment_request.dart';
import '../../../../../data/network/response/commwnts_list.dart';
import '../../../../../domain/repositories/auth_repository.dart';
import '../../../../../main.dart';

class CommentBloc extends BaseBloc {
  final AuthRepository _authRepository = sl.get<AuthRepository>();
  final String commentId;
  CommentBloc(this.commentId);

  late final PublishSubject<CommentsList> getCommentsList = PublishSubject();

  @override
  void init() {
    super.init();
    load();
  }

  Future<void> load() {
    return run(_authRepository.getCommentsList(commentId))
        .then((value) => getCommentsList.add(value));
  }

  Future<void> createComment(CreateCommentRequest request) =>
      _authRepository.createComment(request);
}
