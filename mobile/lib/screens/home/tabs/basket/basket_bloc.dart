import 'package:buylink_flutter/presentation/bloc/base_bloc.dart';
import 'package:collection/collection.dart';

import '../../../../data/network/request/raiting_request.dart';
import '../../../../data/network/response/basket.dart';
import '../../../../data/network/response/basket_response.dart';
import '../../../../domain/entities/pagination.dart';
import '../../../../domain/repositories/auth_repository.dart';
import '../../../../main.dart';
import '../../../../presentation/bloc/paginable_bloc.dart';

class BasketBloc extends PaginableBloc<Basket> {
  final userRepository = sl.get<AuthRepository>();

  final Stream onReflash;

  BasketBloc(this.onReflash);

  @override
  void init() {
    super.init();
    onReflash.listen((event) {
      load(refresh: true);
    });
  }

  @override
  Future<Pagination<Basket>> provideSource(int page) async {
    return userRepository.basketList(page);
  }

  Basket? onItemScan(String uuid) {
    final item = data.firstWhereOrNull((e) => e.id == uuid);
    if (item != null) {
      deletedItem(item);
      return item;
    }
    return null;
  }

  Future<void> refreshBasket(String uuid) async {
    final basket = await userRepository.refererClaim(uuid);
    final index = data.indexWhere((element) => element.uuid == uuid);
    if (index >= 0) {
      updateItem(basket, index);
    }
  }


  Future<void> refererDetail(String uuid) => userRepository.refererDetail(uuid);
}
