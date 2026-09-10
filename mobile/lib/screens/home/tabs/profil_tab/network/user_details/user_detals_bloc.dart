import 'package:buylink_flutter/data/network/response/network_user.dart';
import 'package:buylink_flutter/presentation/bloc/base_bloc.dart';
import 'package:rxdart/rxdart.dart';

import '../../../../../../data/network/request/create_conversation.dart';
import '../../../../../../data/network/request/send_fewnd_request.dart';
import '../../../../../../data/network/response/create_conversation_response_data.dart';
import '../../../../../../data/network/response/network_details.dart';
import '../../../../../../data/network/response/recommendation_response.dart';
import '../../../../../../data/network/response/user.dart';
import '../../../../../../domain/entities/pagination.dart';
import '../../../../../../domain/repositories/auth_repository.dart';
import '../../../../../../main.dart';
import '../../../../../../presentation/bloc/paginable_bloc.dart';

class UserDetailsBloc extends PaginableBloc<RecommendationResponse> {
  final authRepository = sl.get<AuthRepository>();
  final String datas;

  UserDetailsBloc(this.datas);


  late final Stream<User> userDetails =
  ValueConnectableStream(authRepository.userDetails).autoConnect();


  @override
  Future<Pagination<RecommendationResponse>> provideSource(int page) async {
    return authRepository.gatPost(page, datas);
  }


  Future<CreateConversationResponseData> createConversation(CreateConversation request) =>
      authRepository.createConversation(request);


  @override
  void init() {
    super.init();
    run(authRepository.profileDetails(datas)).then(profileDetails.add);
  }


  late final BehaviorSubject<NetworkUser> profileDetails = BehaviorSubject();

  void changedFriendStatus(int friendStatus) {
    run(authRepository
            .sendFewnd(SendFewndRequest(recipientId: int.tryParse(datas) ?? 0)))
        .then(profileDetails.add);
  }
}
