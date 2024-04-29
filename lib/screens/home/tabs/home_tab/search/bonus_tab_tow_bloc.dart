import 'package:rxdart/rxdart.dart';

import '../../../../../data/network/response/network_user.dart';
import '../../../../../data/network/response/partner.dart';
import '../../../../../domain/entities/pagination.dart';
import '../../../../../domain/repositories/auth_repository.dart';
import '../../../../../main.dart';
import '../../../../../presentation/bloc/paginable_bloc.dart';

class BonusTabTowBloc extends PaginableBloc<Partner> {
  final userRepository = sl.get<AuthRepository>();
  final BehaviorSubject<String> _search = BehaviorSubject();

  @override
  Future<Pagination<Partner>> provideSource(int page) {
    final searchText = _search.hasValue && _search.value.isNotEmpty ? _search.value : null;
    return userRepository.searchPartner(page, "partner", searchText ?? "");
  }

  @override
  void init() {
    super.init();
    _search
        .where((event) => event.isNotEmpty)
        .debounce((_) => TimerStream(true, Duration(seconds: 1)))
        .listen((event) {
      load(cancelable: true, refresh: true);
    });
  }

  void onSearch(String text) {
    _search.add(text);
  }
}
