import 'package:buylink_flutter/presentation/bloc/base_bloc.dart';

import '../../../../../data/network/response/most_recommended.dart';
import '../../../../../domain/entities/pagination.dart';
import '../../../../../domain/repositories/auth_repository.dart';
import '../../../../../main.dart';
import '../../../../../presentation/bloc/paginable_bloc.dart';

class SeeAllPartnerBloc extends PaginableBloc<MostRecommended> {
  final authRepository = sl.get<AuthRepository>();
  final Stream onReflash;
  final String id;
  final String type;

  SeeAllPartnerBloc(this.onReflash, this.id, this.type);

  @override
  Future<Pagination<MostRecommended>> provideSource(int page) {
    return authRepository.getPartnerByType(page, type);
  }
}
