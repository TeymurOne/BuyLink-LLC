import 'package:buylink_flutter/presentation/bloc/base_bloc.dart';
import 'package:rxdart/rxdart.dart';

import '../../../../../data/network/response/network.dart';
import '../../../../../domain/repositories/auth_repository.dart';
import '../../../../../main.dart';

class NetworkBloc extends BaseBloc {
  final authRepository = sl.get<AuthRepository>();
  String _searchText = "";

  @override
  void init() {
    super.init();
    load();
  }

  Future<void> load() {
    return run(authRepository.getMyNetwork(_searchText))
        .then((value) => getMyNetwork.add(value));
  }

  void onSearchChanged(String text) {
    _searchText = text;
    load();
  }



  late final BehaviorSubject<List<Network>> getMyNetwork = BehaviorSubject();
}
