import 'dart:async';
import 'dart:io';

import 'package:buylink_flutter/data/network/response/category_response.dart';
import 'package:device_info_plus/device_info_plus.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:rxdart/rxdart.dart';

import '../../../../data/network/request/firebase_notif.dart';
import '../../../../data/network/response/most_recommended_response.dart';
import '../../../../data/network/response/user.dart';
import '../../../../data/network/response/user_details_response.dart';
import '../../../../domain/repositories/auth_repository.dart';
import '../../../../main.dart';
import '../../../../presentation/bloc/base_bloc.dart';
import '../../../../utils/notifications_payload_helper.dart';

class HomeTabBloc extends BaseBloc {
  final authRepository = sl.get<AuthRepository>();
  late final Future<List<CategoryResponse>> categories = authRepository.categories();
  late final StreamSubscription _tokenSubscription;
  late final StreamSubscription _messageSubscription;

  late final PublishSubject<MostRecommendedResponse> topDiscount = PublishSubject();
  late final PublishSubject<MostRecommendedResponse> popularPartners = PublishSubject();
  late final PublishSubject<MostRecommendedResponse> mostRecommended = PublishSubject();
  CategoryResponse? category;
  final PublishSubject<int> unReadNotificationCount = PublishSubject();
  final PublishSubject<int> unResetUnreadChatCount = PublishSubject();

  @override
  void init() {
    super.init();
    _getUnReadNotificationCount();
    _getUnreadChatCount();
    _getPartners();
    FirebaseMessaging.instance
        .getToken()
        .then(_updateFirebaseToken)
        .onError((error, stackTrace) => print("Eroooooooooooor $error"));
    _tokenSubscription = FirebaseMessaging.instance.onTokenRefresh.listen((event) async {
      await _updateFirebaseToken(event);
    });
  }

  void handlePushMessage(RemoteMessage message, int? currentChatId) {
    final data = message.data;
    final deeplink = data["deeplink"];
    final (chatId, userId) = getChatPayload(deeplink);
    if (isNavigatorNotificationScreen(deeplink)) {
      _getUnReadNotificationCount();
    } else if (chatId != null && userId != null && chatId != currentChatId) {
      _getUnreadChatCount();
    }
  }

  Future<void> _updateFirebaseToken(String? event) async {
    if (event != null) {
      print("Tokeeeen " + event);
      final deviceInfoPlugin = DeviceInfoPlugin();
      var deviceId = '';
      if (Platform.isIOS) {
        final iosInfo = await deviceInfoPlugin.iosInfo;
        deviceId = iosInfo.identifierForVendor ?? '';
      } else {
        final androidInfo = await deviceInfoPlugin.androidInfo;
        deviceId = androidInfo.id ?? '';
      }
      await authRepository.updateFirebaseToken(FirebaseNotif(
        deviceId: deviceId,
        firebaseToken: event,
        deviceType: Platform.isIOS ? '2' : "1",
      ));
    }
  }

  Future<UserDetailsResponse> getUserDetails() {
    return authRepository.getUserDetails();
  }

  Future<MostRecommendedResponse> industry(String id) {
    return authRepository.industry(id: id);
  }

  late final Stream<User> userDetails = ValueConnectableStream(authRepository.userDetails).autoConnect();

  Future<void> reload() {
    final Completer completer = Completer();
    Future.wait([
      authRepository.topDiscount().then((value) => topDiscount.add(value)),
      authRepository.popularPartners().then((value) => popularPartners.add(value)),
      authRepository.mostRecommended().then((value) => mostRecommended.add(value)),
    ]).then((value) => completer.complete());
    return completer.future;
  }

  void setCategory(CategoryResponse category) {
    print("Categorryyyyyy " + category.id.toString());
    this.category = category;
    _getPartners();
  }

  void _getPartners() {
    run(authRepository.topDiscount(id: category?.id.toString())).then((value) => topDiscount.add(value));
    run(authRepository.popularPartners(id: category?.id.toString())).then((value) => popularPartners.add(value));
    run(authRepository.mostRecommended(id: category?.id.toString())).then((value) => mostRecommended.add(value));
  }

  Future<void> _getUnReadNotificationCount() async {
    final count = await authRepository.getUnReadNotificationCount();
    unReadNotificationCount.add(count);
  }

  void resetUnReadNotificationCount() {
    unReadNotificationCount.add(0);
  }

  Future<void> _getUnreadChatCount() async {
    final count = await authRepository.getUnreadChatCount();
    unResetUnreadChatCount.add(count);
  }

  void resetUnreadChatCount() {
    unResetUnreadChatCount.add(0);
  }

  @override
  void dispose() {
    _messageSubscription.cancel();
    _tokenSubscription.cancel();
    super.dispose();
  }
}
