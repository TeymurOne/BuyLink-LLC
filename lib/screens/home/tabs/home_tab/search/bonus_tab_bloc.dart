

import 'package:buylink_flutter/data/network/response/user.dart';
import 'package:rxdart/rxdart.dart';

import '../../../../../data/network/response/network.dart';
import '../../../../../data/network/response/network_user.dart';
import '../../../../../domain/entities/pagination.dart';
import '../../../../../domain/repositories/auth_repository.dart';
import '../../../../../main.dart';
import '../../../../../presentation/bloc/paginable_bloc.dart';

class BonusTabBloc extends PaginableBloc<NetworkUser> {
  final userRepository = sl.get<AuthRepository>();
  final BehaviorSubject<String> _search = BehaviorSubject();



  @override
  Future<Pagination<NetworkUser>> provideSource(int page) {
    final searchText = _search.hasValue && _search.value.isNotEmpty ? _search.value : null;
    return userRepository.search(page,"people",searchText ?? "");
  }


  @override
  void init() {
    super.init();
    _search
        .where((event) => event.isNotEmpty)
        .debounce((_) => TimerStream(true, Duration(seconds: 1)))
        .listen((event) {
      load(cancelable: true,refresh: true);
    });
  }

  void onSearch(String text) {
    _search.add(text);
  }
}
