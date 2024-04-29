import 'package:buylink_flutter/data/network/response/network_user.dart';
import 'package:rxdart/rxdart.dart';
import '../../../../../../data/network/request/create_conversation.dart';
import '../../../../../../data/network/request/send_fewnd_request.dart';
import '../../../../../../data/network/response/create_conversation_response_data.dart';
import '../../../../../../data/network/response/recommendation_response.dart';
import '../../../../../../data/network/response/user.dart';
import '../../../../../../domain/entities/pagination.dart';
import '../../../../../../domain/repositories/auth_repository.dart';
import '../../../../../../main.dart';
import '../../../../../../presentation/bloc/paginable_bloc.dart';
import '../../../../data/network/response/user_details_response.dart';

class ProfileTabBloc extends PaginableBloc<RecommendationResponse> {
  final authRepository = sl.get<AuthRepository>();


  late final Stream<User> userDetails =
  ValueConnectableStream(authRepository.userDetails).autoConnect();

  @override
  Future<Pagination<RecommendationResponse>> provideSource(int page) async {
    return authRepository.gatRecommendation(page, null, null);
  }


  Future<UserDetailsResponse> getUserDetails() {
    return authRepository.getUserDetails();
  }

  Future<CreateConversationResponseData> createConversation(CreateConversation request) =>
      authRepository.createConversation(request);

  late final BehaviorSubject<NetworkUser> profileDetails = BehaviorSubject();

}
