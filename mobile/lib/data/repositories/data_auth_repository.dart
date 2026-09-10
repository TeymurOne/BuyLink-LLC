import 'dart:io';

import 'package:buylink_flutter/data/network/request/loqin_request.dart';
import 'package:buylink_flutter/data/network/response/most_recommended_response.dart';
import 'package:buylink_flutter/data/network/response/network_user.dart';
import 'package:buylink_flutter/data/network/response/recommendation_response.dart';
import 'package:rxdart/rxdart.dart';

import '../../domain/entities/pagination.dart';
import '../../domain/repositories/auth_repository.dart';
import '../../main.dart';
import '../../screens/home/tabs/referal_tab/network_referrals/recomend_filter.dart';
import '../cache/cache_manager.dart';
import '../network/api/auth_api.dart';
import '../network/request/add_basket_request.dart';
import '../network/request/category.dart';
import '../network/request/create_comment_request.dart';
import '../network/request/create_conversation.dart';
import '../network/request/firebase_notif.dart';
import '../network/request/forgot_password_request.dart';
import '../network/request/notofocation_element_request.dart';
import '../network/request/partner_login_request.dart';
import '../network/request/pay_from_wallet_request.dart';
import '../network/request/post_create_request.dart';
import '../network/request/raiting_request.dart';
import '../network/request/registration_request.dart';
import '../network/request/scan_qr_code.dart';
import '../network/request/send_fewnd_request.dart';
import '../network/request/send_message_request.dart';
import '../network/request/send_recomended.dart';
import '../network/request/transaction_claim.dart';
import '../network/request/updateUser_data_request.dart';
import '../network/request/user_exists_request.dart';
import '../network/request/verifay_request.dart';
import '../network/response/all_request_data.dart';
import '../network/response/basket.dart';
import '../network/response/basket_response.dart';
import '../network/response/can_qr_code_response.dart';
import '../network/response/category_response.dart';
import '../network/response/commwnts_list.dart';
import '../network/response/conversation_list_response.dart';
import '../network/response/create_conversation_response_data.dart';
import '../network/response/message.dart';
import '../network/response/messages_response.dart';
import '../network/response/most_recommended.dart';
import '../network/response/network.dart';
import '../network/response/network_details.dart';
import '../network/response/notif_count_response.dart';
import '../network/response/notifications.dart';
import '../network/response/packages_response.dart';
import '../network/response/partner.dart';
import '../network/response/partner_details.dart';
import '../network/response/partner_details_response.dart';
import '../network/response/partner_profil_data.dart';
import '../network/response/products.dart';
import '../network/response/register_profile.dart';
import '../network/response/transaction_data.dart';
import '../network/response/transaction_partnr.dart';
import '../network/response/transactions_data.dart';
import '../network/response/user.dart';
import '../network/response/user_details_response.dart';

const tokenRefreshTimeOut = 60 * 60 * 1000;

class DataAuthRepository implements AuthRepository {
  final AuthApi _authApi = sl.get<AuthApi>();
  final CacheManager _cacheManager = sl.get<CacheManager>();

  @override
  Future<void> registerProfile(RegisterProfile request) {
    return _authApi.registerProfile(request);
  }

  @override
  Future<void> login(LoqinRequest request) async {
    final response = await _authApi.login(request);
    if (response != null) {
      await _cacheManager.saveUser(response.user);
    }
    return _cacheManager.saveAccessToken(response.token!);
  }

  @override
  Future<void> partnerLogin(PartnerLoginReguest request) async {
    final response = await _authApi.partnerLogin(request);
    return _cacheManager.saveAccessToken(response.token);
  }

  @override
  Future<bool> userExists(String number) async {
    return _authApi.userExists(UserExistsRequest(phone: number));
  }

  @override
  Future<ScanQRCodeResponse> scanQRCode(ScanQRCodeRequest request) {
    return _authApi.scanQRCode(request);
  }

  @override
  Future<void> logout() {
    return _cacheManager.clear();
  }

  @override
  Future<void> verify(VerifayRequest request) {
    return _authApi.verify(request);
  }

  @override
  Future<void> addBasket(AddBasketRequest request) {
    return _authApi.addBasket(request);
  }

  @override
  Future<List<Network>> getMyNetwork(String name) async {
    final response = await _authApi.getMyNetwork(name);
    return response.data;
  }

  @override
  Future<Pagination<NetworkUser>> search(int page, String type, String? text) async {
    final response = await _authApi.search(page, type, text);
    return response;
  }

  @override
  Future<List<CategoryResponse>> categories() async {
    final response = await _authApi.categories();
    return response.data;
  }

  @override
  Future<Pagination<NotificationsResponse>> notifications(int page) {
    return _authApi.notifications(page);
  }

  @override
  Future<void> friendDelete(int id) {
    return _authApi.friendDelete(id);
  }

  @override
  Future<void> friendAccept(int id) {
    return _authApi.friendAccept(NotofocationElementRequest(friendRequestId: id));
  }

  @override
  Future<void> postCreate(PostCreateRequest request) {
    return _authApi.postCreate(request);
  }

  @override
  Future<void> profile() {
    return _authApi.profile();
  }

  @override
  Future<void> sendRecomended(SendRecomended request) {
    return _authApi.sendRecomended(request);
  }

  @override
  Future<Pagination<Partner>> searchPartner(int page, String type, String? text) async {
    final response = await _authApi.searchPartner(page, type, text);
    return response;
  }

  @override
  Future<UserDetailsResponse> getUserDetails() async {
    final response = await _authApi.userDetails();
    if (response != null) {
      await _cacheManager.saveUser(response.data);
    }
    return response;
  }

  @override
  Future<void> updateUserData(UpdateUserDataRequest request) async {
    final response = await _authApi.updateUserData(request);
    if (response != null) {
      await _cacheManager.saveUser(response.data);
    }
    return;
  }

  @override
  Future<void> uploadImage(File file) async {
    final response = await _authApi.uploadImage(file);
    if (response != null) {
      await _cacheManager.saveUser(response.data);
    }
    return;
  }

  @override
  Future<MostRecommendedResponse> mostRecommended({String? id}) {
    return _authApi.mostRecommended(id?.toString() ?? "");
  }

  @override
  Future<MostRecommendedResponse> industry({String? id}) {
    return _authApi.industry(id?.toString() ?? "");
  }

  @override
  Future<MostRecommendedResponse> popularPartners({String? id}) {
    return _authApi.popularPartners(id?.toString() ?? "");
  }

  @override
  Future<MostRecommendedResponse> topDiscount({String? id}) {
    return _authApi.topDiscount(id?.toString() ?? "");
  }

  @override
  Future<Pagination<Basket>> basketList(int page) {
    return _authApi.basketList(page);
  }

  @override
  Future<Pagination<MostRecommended>> mostRecommendedPagination(int page, String id) {
    return _authApi.mostRecommendedPagination(page, id);
  }

  @override
  Future<Pagination<MostRecommended>> getPartnerByType(int page, String type) {
    return _authApi.getPartnerByType(page, type);
  }

  @override
  Stream<User> get userDetails => _cacheManager.userDetails.whereNotNull().asBroadcastStream();

  @override
  Future<bool> isLogged() async {
    var token = await _cacheManager.getAccessToken();
    return token != null && token.isNotEmpty;
  }

  @override
  Future<void> otpRegistration(int number) {
    return _authApi.getRegistration(number);
  }

  @override
  Future<void> sendRegistration(int number, int otpCode) async {
    final response = await _authApi.sendRegistration(number, otpCode);
    // if (response != null) {
    //   await _cacheManager.saveUser(response.user);
    // }
    return _cacheManager.saveAccessToken(response.token);
  }

  @override
  Future<void> sendOtpLogin(int number, int otpCode) async {
    final response = await _authApi.sendOtpLogin(number, otpCode);
    // if (response != null) {
    //   await _cacheManager.saveUser(response.user);
    // }
    return _cacheManager.saveAccessToken(response.token);
  }

  @override
  Future<void> registration(RegistrationRequest request) {
    return _authApi.registration(request);
  }

  @override
  Future<CreateConversationResponseData> createConversation(CreateConversation request) {
    return _authApi.createConversation(request);
  }

  @override
  Future<List<TransactionPartner>> partnerTransactions() async {
    final response = await _authApi.partnerTransactions();
    return response.data;
  }

  @override
  Future<void> rating(String id, RaitingRequest request) {
    return _authApi.rating(id, request);
  }

  @override
  Future<void> payFromWallet(PayFromWalletRequest request) {
    return _authApi.payFromWallet(request);
  }

  Future<TransactionClaim> refererDetail(String uuid) async{
    final response = await _authApi.refererDetail(uuid);
    return response.data;
  }

  @override
  Future<void> forgotPassword(ForgotPasswordrRequest request) {
    return _authApi.forgotPassword(request);
  }

  @override
  Stream<PackagesResponse> packages() {
    return _authApi.packages();
  }

  @override
  Future<ConversationListResponse> conversationList() {
    return _authApi.conversationList();
  }

  @override
  Future<List<Message>> messages(int? id) async {
    final response = await _authApi.messages(id);
    return response.data;
  }

  @override
  Future<Basket> refererClaim(String uuid) async {
    final response = await _authApi.refererClaim(uuid);
    return response.data;
  }

  @override
  Future<PartnerDetails> partnerDetails(String data) {
    return _authApi.partnerDetails(data);
  }

  @override
  Future<PartnerProdileData> partnerDetailsInfo(String data) {
    return _authApi.partnerDetailsInfo(data);
  }

  @override
  Future<void> createComment(CreateCommentRequest request) {
    return _authApi.createComment(request);
  }

  @override
  Future<void> sendMessages(SendMessageRequest request) {
    return _authApi.sendMessages(request);
  }

  @override
  Future<TransactionsData> transactions() {
    return _authApi.transactions();
  }

  @override
  Future<TransactionsData> selfTransactions() {
    return _authApi.selfTransactions();
  }

  @override
  Future<NetworkUser> sendFewnd(SendFewndRequest request) async {
    final response = await _authApi.sendFewnd(request);
    return response.user;
  }

  @override
  Future<void> updateFirebaseToken(FirebaseNotif request) {
    return _authApi.updateFirebaseToken(request);
  }

  @override
  Future<int> getUnReadNotificationCount()  async{
   final response = await _authApi.getUnReadNotificationCount();
   return response.count;
  }

  @override
  Future<int> getUnreadChatCount()  async{
   final response = await _authApi.getUnreadChatCount();
   return response.count;
  }

  @override
  Future<NetworkUser> profileDetails(String date) async {
    final response = await _authApi.profileDetails(date);
    return response.data;
  }

  @override
  Future<CommentsList> getCommentsList(
    String date,
  ) async {
    return _authApi.getCommentsList(date);
  }

  @override
  Future<Pagination<RecommendationResponse>> gatRecommendation(int page, int? industryId, String? order) {
    return _authApi.gatRecommendation(page, industryId, order);
  }

  @override
  Future<Pagination<RecommendationResponse>> gatNetworkRecommendation(int page, int? industryId, String? order,RecomendFilter pending) {
    return _authApi.gatNetworkRecommendation(page, industryId, order,pending);
  }

  @override
  Future<Pagination<RecommendationResponse>> gatPost(int page, String? date) {
    return _authApi.gatPost(page, date);
  }

  @override
  Future<Pagination<Products>> partnerProduct(int page, String partnerId, String categoryId) {
    return _authApi.partnerProduct(page, partnerId, categoryId);
  }
}
