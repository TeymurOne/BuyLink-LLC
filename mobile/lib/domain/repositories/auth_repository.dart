import 'dart:io';

import 'package:buylink_flutter/data/network/request/firebase_notif.dart';
import 'package:buylink_flutter/data/network/response/network_user.dart';

import '../../data/network/request/add_basket_request.dart';
import '../../data/network/request/create_comment_request.dart';
import '../../data/network/request/create_conversation.dart';
import '../../data/network/request/forgot_password_request.dart';
import '../../data/network/request/loqin_request.dart';
import '../../data/network/request/partner_login_request.dart';
import '../../data/network/request/pay_from_wallet_request.dart';
import '../../data/network/request/post_create_request.dart';
import '../../data/network/request/raiting_request.dart';
import '../../data/network/request/registration_request.dart';
import '../../data/network/request/scan_qr_code.dart';
import '../../data/network/request/send_fewnd_request.dart';
import '../../data/network/request/send_message_request.dart';
import '../../data/network/request/send_recomended.dart';
import '../../data/network/request/transaction_claim.dart';
import '../../data/network/request/updateUser_data_request.dart';
import '../../data/network/request/verifay_request.dart';
import '../../data/network/response/all_request_data.dart';
import '../../data/network/response/basket.dart';
import '../../data/network/response/basket_response.dart';
import '../../data/network/response/can_qr_code_response.dart';
import '../../data/network/response/category_response.dart';
import '../../data/network/response/commwnts_list.dart';
import '../../data/network/response/conversation_list_response.dart';
import '../../data/network/response/create_conversation_response_data.dart';
import '../../data/network/response/login_response.dart';
import '../../data/network/response/message.dart';
import '../../data/network/response/most_recommended.dart';
import '../../data/network/response/most_recommended_response.dart';
import '../../data/network/response/network.dart';
import '../../data/network/response/network_details.dart';
import '../../data/network/response/notifications.dart';
import '../../data/network/response/packages_response.dart';
import '../../data/network/response/partner.dart';
import '../../data/network/response/partner_details.dart';
import '../../data/network/response/partner_details_response.dart';
import '../../data/network/response/partner_profil_data.dart';
import '../../data/network/response/products.dart';
import '../../data/network/response/recommendation_response.dart';
import '../../data/network/response/register_profile.dart';
import '../../data/network/response/transaction_data.dart';
import '../../data/network/response/transaction_partnr.dart';
import '../../data/network/response/transactions_data.dart';
import '../../data/network/response/user.dart';
import '../../data/network/response/user_details_response.dart';
import '../../screens/home/tabs/referal_tab/network_referrals/recomend_filter.dart';
import '../entities/pagination.dart';

abstract class AuthRepository {
  Future<void> registerProfile(RegisterProfile request);

  Future<void> verify(VerifayRequest request);

  Future<List<Network>> getMyNetwork(String name);

  Future<Pagination<NetworkUser>> search(int page, String type, String? text);

  Future<List<CategoryResponse>> categories();

  Future<Pagination<NotificationsResponse>> notifications(int page);

  Future<void> friendDelete(int id);

  Future<void> friendAccept(int id);

  Future<void> postCreate(PostCreateRequest request);

  Future<void> profile();

  Future<void> sendRecomended(SendRecomended request);

  Future<Pagination<Partner>> searchPartner(int page, String type, String? text);

  Future<void> login(LoqinRequest request);

  Future<void> partnerLogin(PartnerLoginReguest request);

  Future<bool> userExists(String number);

  Future<ScanQRCodeResponse> scanQRCode(ScanQRCodeRequest request);

  Future<void> logout();

  Future<UserDetailsResponse> getUserDetails();

  Future<MostRecommendedResponse> mostRecommended({String? id});

  Future<MostRecommendedResponse> industry({String? id});

  Future<MostRecommendedResponse> popularPartners({String? id});

  Future<void> updateUserData(UpdateUserDataRequest request);

  Future<void> addBasket(AddBasketRequest request);

  Future<void> uploadImage(File file);

  Future<MostRecommendedResponse> topDiscount({String? id});

  Future<Pagination<Basket>> basketList(int page);

  Future<Pagination<MostRecommended>> mostRecommendedPagination(int page, String id);

  Future<Pagination<MostRecommended>> getPartnerByType(int page, String type);

  Future<Pagination<RecommendationResponse>> gatRecommendation(int page, int? industryId, String? order);

  Future<Pagination<RecommendationResponse>> gatNetworkRecommendation(
      int page, int? industryId, String? order, RecomendFilter pending);

  Future<Pagination<RecommendationResponse>> gatPost(int page, String? date);

  Future<Pagination<Products>> partnerProduct(int page, String partnerId, String categoryId);

  Future<bool> isLogged();

  Stream<User> get userDetails;

  Future<void> otpRegistration(int number);

  Future<void> sendRegistration(int number, int otpCode);

  Future<void> sendOtpLogin(int number, int otpCode);

  Future<void> registration(RegistrationRequest request);

  Future<CreateConversationResponseData> createConversation(CreateConversation request);

  Future<void> rating(String id, RaitingRequest request);

  Future<void> payFromWallet(PayFromWalletRequest request);

  Future<TransactionClaim> refererDetail(String uuid);

  Future<void> forgotPassword(ForgotPasswordrRequest request);

  Future<List<TransactionPartner>> partnerTransactions();

  Stream<PackagesResponse> packages();

  Future<ConversationListResponse> conversationList();

  Future<List<Message>> messages(int? id);

  Future<Basket> refererClaim(String uuid);

  Future<NetworkUser> profileDetails(String date);

  Future<CommentsList> getCommentsList(String date);

  Future<PartnerDetails> partnerDetails(String data);

  Future<PartnerProdileData> partnerDetailsInfo(String data);

  Future<NetworkUser> sendFewnd(SendFewndRequest request);

  Future<void> createComment(CreateCommentRequest request);

  Future<void> sendMessages(SendMessageRequest request);

  Future<TransactionsData> transactions();

  Future<TransactionsData> selfTransactions();

  Future<void> updateFirebaseToken(FirebaseNotif request);

  Future<int> getUnReadNotificationCount();
  Future<int> getUnreadChatCount();
}
