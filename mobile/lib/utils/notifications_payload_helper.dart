
(int?, int?) getChatPayload(String? payload) {
  if(payload == null){
    return (null, null);
  }
  final params = Uri.parse("http://local?$payload").queryParameters;
  if (params.length == 2) {
    final chatId = int.tryParse(params["chat"] ?? "");
    final userId = int.tryParse(params["user_id"] ?? "");
    return (chatId, userId);
  }
  return (null, null);
}

bool isPaymentPayload(String? payload){
  if(payload == null){
    return false;
  }
  final params = Uri.parse("http://local?$payload").queryParameters;
  return params.length == 1 && params.entries.first.key == "payment";
}


bool isNavigatorNotificationScreen(String? payload){
  if(payload == null){
    return false;
  }
  final params = Uri.parse("http://local?$payload").queryParameters;
  return params.length == 1 && params.entries.first.key == "notification";
}
