import 'package:buylink_flutter/presentation/bloc/base_bloc.dart';

import '../../../../../data/network/response/recommendation_response.dart';
import '../../../../../domain/entities/pagination.dart';
import '../../../../../domain/repositories/auth_repository.dart';
import '../../../../../main.dart';
import '../../../../../presentation/bloc/paginable_bloc.dart';

class MyReferralsBloc extends PaginableBloc<RecommendationResponse>{
  final _authRepository = sl.get<AuthRepository>();

  @override
  Future<Pagination<RecommendationResponse>> provideSource(int page) async {
    return _authRepository.gatRecommendation(page, null, null);
  }
}