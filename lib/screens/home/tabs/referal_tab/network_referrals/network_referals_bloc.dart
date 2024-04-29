import 'package:buylink_flutter/screens/home/tabs/referal_tab/network_referrals/recomend_filter.dart';
import '../../../../../data/network/response/recommendation_response.dart';
import '../../../../../domain/entities/pagination.dart';
import '../../../../../domain/repositories/auth_repository.dart';
import '../../../../../main.dart';
import '../../../../../presentation/bloc/paginable_bloc.dart';

class NetworkReferralsBloc extends PaginableBloc<RecommendationResponse> {
  final _authRepository = sl.get<AuthRepository>();
  RecomendFilter? status;

  final Stream onReflash;

  NetworkReferralsBloc(this.onReflash);

  @override
  void init() {
    super.init();
    onReflash.listen((event) {
      load(refresh: true);
    });
  }

  @override
  Future<Pagination<RecommendationResponse>> provideSource(int page) async {
    return _authRepository.gatNetworkRecommendation(page, null, null, status ?? RecomendFilter.pending);
  }
}
