import '../../../../../../data/network/response/products.dart';
import '../../../../../../domain/entities/pagination.dart';
import '../../../../../../domain/repositories/auth_repository.dart';
import '../../../../../../main.dart';
import '../../../../../../presentation/bloc/paginable_bloc.dart';

class ShowMoreBloc extends PaginableBloc<Products> {
  final authRepository = sl.get<AuthRepository>();
  final Stream onReflash;
  final String partnerId;
  final String categoryId;

  ShowMoreBloc(this.onReflash, this.partnerId, this.categoryId);

  @override
  Future<Pagination<Products>> provideSource(int page) {
    return authRepository.partnerProduct(page, partnerId, categoryId);
  }
}
