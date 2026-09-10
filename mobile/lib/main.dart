import 'dart:async';

import 'package:buylink_flutter/pages/edit_bank_account.dart';
import 'package:buylink_flutter/presentation/bloc/bloc_provider.dart';
import 'package:buylink_flutter/presentation/resourses/app_colors.dart';
import 'package:buylink_flutter/screens/home/home_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/chat/chat_tabs.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/chat/chat_user/chat_user_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/notifications/notifications_screen.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/partner/partner_screen.dart';
import 'package:buylink_flutter/screens/splesh/splesh_screen.dart';
import 'package:buylink_flutter/utils/file_output.dart';
import 'package:buylink_flutter/utils/notifications_payload_helper.dart';
import 'package:dio/dio.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_messaging/firebase_messaging.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:get_it/get_it.dart';
import 'package:hive_flutter/adapters.dart';
import 'package:logger/logger.dart' hide FileOutput;
import 'package:path_provider/path_provider.dart';
import 'app_bloc.dart';
import 'call_interceptor.dart';
import 'data/cache/cache_manager.dart';
import 'data/cache/data_cache_manager.dart';
import 'data/network/api/auth_api.dart';
import 'data/network/response/user.dart';
import 'data/repositories/data_auth_repository.dart';
import 'domain/repositories/auth_repository.dart';
import 'firebase_options.dart';
import 'generated/l10n.dart';

final GetIt sl = GetIt.instance;
final logger = Logger(printer: SimplePrinter());
// const baseUrl = 'http://192.168.89.134:8000/api/';
const baseUrl = 'https://api.buylink.info/api/';
final RouteObserver<ModalRoute<void>> routeObserver = RouteObserver<ModalRoute<void>>();
final navigatorKey = GlobalKey<NavigatorState>();
final flutterLocalNotificationsPlugin = FlutterLocalNotificationsPlugin();

@pragma('vm:entry-point')
Future<void> _firebaseMessagingBackgroundHandler(RemoteMessage message) async {
  print("Seeend");
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
  final data = message.data;
  final deeplink = data["deeplink"];
  final title = data["title"];
  final body = data["body"];
  if (title != null && body != null) {
    _showNotification(
      title: title,
      body: body,
      notificationId: message.sentTime?.millisecond ?? 1,
      payload: deeplink,
    );
  }
}

// late AndroidNotificationChannel channel;
late FileOutput fileLogger;
const importance_channel = 'high_importance_channel';
const importance_notifications = 'High Importance Notifications';

final StreamController<NotificationResponse> didReceiveLocalNotificationStream =
    StreamController<NotificationResponse>.broadcast();

Future<void> _showNotification({
  required String title,
  required String body,
  required int notificationId,
  String? payload,
}) async {
  try {
    await flutterLocalNotificationsPlugin.show(
        notificationId,
        title,
        body,
        NotificationDetails(
          android: AndroidNotificationDetails("channel.id", "channel.name",
              channelDescription: "channel.description",
              // TODO add a proper drawable resource to android, for now using
              icon: 'ic_notification',
              color: AppColors.appColor),
        ),
        payload: payload);
  } catch (e) {
    print(e);
  }
}

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );
  final file = await createLogFile();

  fileLogger = FileOutput(file);

  final dir = await getApplicationDocumentsDirectory();
  FirebaseMessaging.onBackgroundMessage(_firebaseMessagingBackgroundHandler);

  Hive
    ..init(dir.path)
    ..registerAdapter(UserAdapter());
  _registerDependency();
  await initLoacallNotif();

  runApp(BaylinkBlocApp());
}

Future<void> initLoacallNotif() async {
  const AndroidInitializationSettings initializationSettingsAndroid = AndroidInitializationSettings('ic_notification');

  final DarwinInitializationSettings initializationSettingsDarwin = DarwinInitializationSettings(
    requestAlertPermission: false,
    requestBadgePermission: false,
    requestSoundPermission: false,
    // onDidReceiveLocalNotification: (int id, String? title, String? body, String? payload) async {
    //   didReceiveLocalNotificationStream.add(
    //     ReceivedNotification(
    //       id: id,
    //       title: title,
    //       body: body,
    //       payload: payload,
    //     ),
    //   );
    // },
  );

  final InitializationSettings initializationSettings = InitializationSettings(
    android: initializationSettingsAndroid,
    iOS: initializationSettingsDarwin,
  );
  await flutterLocalNotificationsPlugin.initialize(
    initializationSettings,
    onDidReceiveNotificationResponse: didReceiveLocalNotificationStream.add,
  );
}

void _registerDependency() {
  final dio = _initDio();
  sl.registerLazySingleton<AuthApi>(() => AuthApi(dio));
  sl.registerLazySingleton<AuthRepository>(() => DataAuthRepository());
  sl.registerLazySingleton<CacheManager>(() => DataCacheManager());
}

Dio _initDio() {
  final dio = Dio();

  dio.options.headers["content-type"] = "application/json";
  dio.options.headers["accept"] = "application/json";
  dio.options.connectTimeout = 120000;
  dio.options.receiveTimeout = 120000;
  dio.options.sendTimeout = 120000;
  dio.interceptors.add(CallInterceptor());
  dio.interceptors.add(LogInterceptor(requestBody: true, responseBody: true, logPrint: logger.d));
  sl.registerLazySingleton<Dio>(() => dio);

  return dio;
}

class BaylinkBlocApp extends StatefulWidget {
  @override
  _BaylinkBlocAppState createState() => _BaylinkBlocAppState();
}

class _BaylinkBlocAppState extends State<BaylinkBlocApp> {
  @override
  Widget build(BuildContext context) {
    return BlocProvider<AppBloc>(bloc: AppBloc(), child: BuyLinkApp());
  }
}

class BuyLinkApp extends StatefulWidget {
  const BuyLinkApp({super.key});

  @override
  State<BuyLinkApp> createState() => _BuyLinkAppState();
}

class _BuyLinkAppState extends State<BuyLinkApp> {
  late final StreamSubscription onMessageSubscription;

  @override
  void initState() {
    super.initState();
    FirebaseMessaging.onMessage.listen((RemoteMessage message) {
      RemoteNotification? notification = message.notification;
      // AndroidNotification? android = message.notification?.android;
      if (notification != null && !kIsWeb) {
        _showNotification(
          title: notification.title ?? "",
          body: notification.body ?? "",
          notificationId: message.sentTime?.millisecond ?? 1,
        );
      } else {
        final data = message.data;
        final deeplink = data["deeplink"];
        final title = data["title"];
        final body = data["body"];
        final appBloc = BlocProvider.of<AppBloc>(context);

        appBloc.messages.add(message);
        final (chatId, _) = getChatPayload(deeplink);

        if (title != null && body != null && (chatId == null || chatId != appBloc.currentChatId)) {
          _showNotification(
            title: title,
            body: body,
            notificationId: chatId ?? message.sentTime?.millisecond ?? 1,
            payload: deeplink,
          );
        }
      }
    });
    didReceiveLocalNotificationStream.stream.listen(
      (event) {
        final deeplink = event.payload;
        if (deeplink?.isNotEmpty == true) {
          final (chatId, userId) = getChatPayload(deeplink);
          if (chatId != null && userId != null) {
            navigatorKey.currentState?.push(
              MaterialPageRoute(
                builder: (BuildContext context) {
                  return ChatUserScreen(
                    conversationId: chatId,
                    userId: userId,
                    userName: 'test',
                  );
                },
              ),
            );
            return;
          }
          final isPayment = isPaymentPayload(deeplink);
          if (isPayment) {
            navigatorKey.currentState?.pushAndRemoveUntil(MaterialPageRoute(
              builder: (BuildContext context) {
                return HomeScreen(
                  initialTabIndex: 3,
                );
              },
            ), (settings) => false);
          }
          final isNavigatorNotif = isNavigatorNotificationScreen(deeplink);
          if (isNavigatorNotif) {
            navigatorKey.currentState?.push(
              MaterialPageRoute(
                builder: (BuildContext context) {
                  return Notifications();
                },
              ),
            );
          }
        }
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final bloc = BlocProvider.of<AppBloc>(context);

    // return StreamBuilder<Locale?>(
    //   stream: bloc.locale,
    //   builder: (context, snapshot) {
    //     if (snapshot.connectionState == ConnectionState.waiting) {
    //       return SizedBox();
    //     }
    //     return MaterialApp(
    //       debugShowCheckedModeBanner: false,
    //       title: 'BuyLink',
    //       color: AppColors.appBarbgColor,
    //       navigatorKey: navigatorKey,
    //       routes: {
    //         '/': (context) => SpleshScreen(),
    //         '/chats': (context) => ChatTab(),
    //         '/store': (context) => PartnerScreen(
    //               partnerId: '',
    //             ),
    //         '/transactions': (context) => Transactions(),
    //         '/bank_accounts': (context) => BankAccounts(),
    //         '/electron_wallets': (context) => ElectronWallets(),
    //         '/payment_history': (context) => PaymentHistory(),
    //         '/languages': (context) => Languages(),
    //         '/contacts': (context) => MyContacts(),
    //         '/withdrawal': (context) => Withdrawal(),
    //         '/edit_bank_account': (context) => EditBankAccount(ModalRoute.of(context)!.settings.arguments as bool),
    //       },
    //       navigatorObservers: [routeObserver],
    //       localizationsDelegates: [
    //         S.delegate,
    //         GlobalMaterialLocalizations.delegate,
    //         GlobalCupertinoLocalizations.delegate,
    //         GlobalWidgetsLocalizations.delegate,
    //       ],
    //       localeListResolutionCallback: (locales, supportedLocales) {
    //         if (snapshot.hasData) {
    //           return snapshot.requireData;
    //         }
    //         for (Locale locale in locales ?? List.empty()) {
    //           for (Locale supportedLocale in supportedLocales) {
    //             if (supportedLocale.languageCode == locale.languageCode) {
    //               bloc.setLocale(locale);
    //               return locale;
    //             }
    //           }
    //         }
    //         const currentLocale = Locale("az");
    //         bloc.setLocale(currentLocale);
    //         return currentLocale;
    //       },
    //       supportedLocales: S.delegate.supportedLocales,
    //       locale: snapshot.data,
    //     );
    //   },
    // );

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'BuyLink',
      color: AppColors.appBarbgColor,
      navigatorKey: navigatorKey,
      routes: {
        '/': (context) => SpleshScreen(),
        '/chats': (context) => ChatTab(),
        '/store': (context) => PartnerScreen(
              partnerId: '',
            ),
        '/edit_bank_account': (context) => EditBankAccount(ModalRoute.of(context)!.settings.arguments as bool),
      },
      navigatorObservers: [routeObserver],
      localizationsDelegates: [
        S.delegate,
        GlobalMaterialLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
      ],
      localeListResolutionCallback: (locales, supportedLocales) {
        // if (snapshot.hasData) {
        //   return snapshot.requireData;
        // }
        // for (Locale locale in locales ?? List.empty()) {
        //   for (Locale supportedLocale in supportedLocales) {
        //     if (supportedLocale.languageCode == locale.languageCode) {
        //       bloc.setLocale(locale);
        //       return locale;
        //     }
        //   }
        // }
        const currentLocale = Locale("az");
        bloc.setLocale(currentLocale);
        return currentLocale;
      },
      supportedLocales: S.delegate.supportedLocales,
      // locale: snapshot.data,
    );
  }

  @override
  void dispose() {
    onMessageSubscription.cancel();
    super.dispose();
  }
}

class ReceivedNotification {
  ReceivedNotification({
    required this.id,
    required this.title,
    required this.body,
    required this.payload,
  });

  final int id;
  final String? title;
  final String? body;
  final String? payload;
}
