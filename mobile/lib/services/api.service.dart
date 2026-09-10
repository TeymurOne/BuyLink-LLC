
import 'package:dio/dio.dart';

import '../models/responses/login_response.dart';
import '../models/user.dart';
import '../utils/util.dart';

class ApiService {
  static ApiService? _instance;
  late Dio dioClient;
  ApiService._() {
    dioClient = Dio(
      BaseOptions(
        baseUrl: Util.apiUrl,
      ),
    );
    dioClient.interceptors.clear();
    dioClient.interceptors.addAll(
      [
        InterceptorsWrapper(onRequest: (requestOptions, requestHandler) {
          requestHandler.next(requestOptions);
        }, onError: (err, errHandler) async {
          print('ERROR happened ${err.message ?? 'Unexpected error'}');
          print('ERROR happened ${err.requestOptions.path}');

          // if (err.response?.statusCode == 401 && err.requestOptions.path != 'refresh') {
          // } else if (err.response?.statusCode == 401) {
          //   await LocalData.getInstance.setToken(null);
          //   ChatService.getInstance.logoutFromChat();
          //   errHandler.resolve(err.response);
          //   return;
          // } else if (err.response?.statusCode == 404) {
          //   errHandler.resolve(err.response);
          //   return;
          // }

          // final message =
          //     err.response?.data == null ? Localized('Internet yoxdur').value : err.response?.data['message'];
          // String exceptionMessage = message is List ? message?.first : message;
          // ErrorResponse errorResponse;
          // if (err.response?.data['data'] is Map) {
          //   errorResponse = ErrorResponse.fromMap(err.response.data);
          //   exceptionMessage = errorResponse.data.values.elementAt(0)[0];
          // }
          // if (err.response == null) {
          //   NotificationService.getInstance.showNoInternetConnectionAlert();
          //   return errHandler.resolve(null);
          // }
          // if (message != null) {
          //   print(err.response.data);
          //   NotificationService.getInstance.setNotification(
          //     CustomNotification(
          //       text: Localized(exceptionMessage).value,
          //       type: NotificationType.Error,
          //     ),
          //   );
          // }
          // return errHandler.resolve(err.response);
        }),
        // other interceptor
      ],
    );
  }

  static ApiService get getInstance => _instance ??= ApiService._();



  Future<Response<dynamic>> _retry(
      {Options? options, required RequestOptions requestOptions}) async {
    final opts = options ??
        Options(
          method: requestOptions.method,
          headers: requestOptions.headers,
        );
    return await dioClient.request<dynamic>(
      requestOptions.path,
      data: requestOptions.data,
      queryParameters: requestOptions.queryParameters,
      options: opts,
    );
  }

  Future<LoginResponse> logIn(String email, String password) async {
    var result = await dioClient
        .post('auth/login', data: {"email": email, "password": password});
    if (result.statusCode == 200) {
      return LoginResponse.fromJson(result.data);
    }
    return LoginResponse(errorMessage: result.statusMessage);
  }

  Future<User?> getUser({bool forceRefresh = true}) async {
    var result = await dioClient.get('auth/user');
    if (result.statusCode == 200) {
      var user = User.fromJson(result.data['user']);
      return user;
    }
    return null;
  }

  // Future<LoginResult> refreshToken() async {
  //   Response result = await dioClient.post('refresh', options: Options(headers: headersComputed()));
  //   if (result.statusCode == 200) {
  //     return LoginResult(User.fromJson(result.data['user']['original']['user']), result.data['meta']['token']);
  //   } else {
  //     return null;
  //   }
  // }
}
