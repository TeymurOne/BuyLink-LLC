import 'package:buylink_flutter/presentation/bloc/base_bloc.dart';
import 'package:rxdart/rxdart.dart';

import '../../../../../data/network/request/post_create_request.dart';
import '../../../../../data/network/request/send_recomended.dart';
import '../../../../../data/network/response/network.dart';
import '../../../../../data/network/response/partner_details.dart';
import '../../../../../domain/repositories/auth_repository.dart';
import '../../../../../main.dart';

class PartnerBloc extends BaseBloc {
  final authRepository = sl.get<AuthRepository>();
  String _searchText = "";

  Future<PartnerDetails> partnerDetails(String data) {
    return authRepository.partnerDetails(data);
  }

  Future<void> postCreate(PostCreateRequest post) =>
      run(authRepository.postCreate(post));

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


  Future<void> sendRecomended(SendRecomended post) => run(
    authRepository.sendRecomended(post),
  );

}
