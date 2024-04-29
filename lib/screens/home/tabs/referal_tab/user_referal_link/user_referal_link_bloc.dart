import 'package:buylink_flutter/presentation/bloc/base_bloc.dart';

import '../../../../../data/network/request/add_basket_request.dart';
import '../../../../../domain/repositories/auth_repository.dart';
import '../../../../../main.dart';

class UserReferalLinkBloc extends BaseBloc{
  final AuthRepository _authRepository = sl.get<AuthRepository>();




  Future<void> addBasket(AddBasketRequest request) {
    return run(_authRepository.addBasket(request));
  }
}