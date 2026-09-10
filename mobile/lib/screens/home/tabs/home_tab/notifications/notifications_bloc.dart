import 'package:buylink_flutter/domain/entities/pagination.dart';
import 'package:buylink_flutter/presentation/bloc/paginable_bloc.dart';

import '../../../../../data/network/response/notifications.dart';
import '../../../../../domain/repositories/auth_repository.dart';
import '../../../../../main.dart';

class NotificationBloc extends PaginableBloc<NotificationsResponse> {
  final userRepository = sl.get<AuthRepository>();

  final Stream onReflash;

  NotificationBloc(this.onReflash);

  Future<void> deletedUser(NotificationsResponse user, int id) =>
      run(userRepository.friendDelete(id)).then((value) => deletedItem(user));

  Future<void> friendAccept(NotificationsResponse user, int id) async =>
      run(userRepository.friendAccept(id)).then((value) => deletedItem(user));

  @override
  void init() {
    super.init();
    onReflash.listen((event) {
      load(refresh: true);
    });
  }

  @override
  Future<Pagination<NotificationsResponse>> provideSource(int page) async {
    return userRepository.notifications(page);
  }
}
