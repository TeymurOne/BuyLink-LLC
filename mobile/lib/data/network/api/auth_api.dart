import 'dart:io';

import 'package:buylink_flutter/data/network/request/category.dart';
import 'package:buylink_flutter/data/network/request/transaction_claim_data.dart';
import 'package:buylink_flutter/data/network/response/category_response.dart';
import 'package:buylink_flutter/data/network/response/create_conversation_response_data.dart';
import 'package:buylink_flutter/data/network/response/user_details_response.dart';
import 'package:buylink_flutter/domain/entities/pagination.dart';
import 'package:dio/dio.dart' hide Headers;

import 'package:retrofit/retrofit.dart';

import '../../../main.dart';
import '../../../screens/home/tabs/referal_tab/network_referrals/recomend_filter.dart';
import '../request/add_basket_request.dart';
import '../request/create_comment_request.dart';
import '../request/create_conversation.dart';
import '../request/firebase_notif.dart';
import '../request/forgot_password_request.dart';
import '../request/loqin_request.dart';
import '../request/notofocation_element_request.dart';
import '../request/partner_login_request.dart';
import '../request/pay_from_wallet_request.dart';
import '../request/post_create_request.dart';
import '../request/raiting_request.dart';
import '../request/registration_request.dart';
import '../request/scan_qr_code.dart';
import '../request/send_fewnd_request.dart';
import '../request/send_message_request.dart';
import '../request/send_recomended.dart';
import '../request/transaction_claim.dart';
import '../request/updateUser_data_request.dart';
import '../request/user_exists_request.dart';
import '../request/verifay_request.dart';
import '../response/basket.dart';
import '../response/basket_data.dart';
import '../response/basket_response.dart';
import '../response/can_qr_code_response.dart';
import '../response/commwnts_list.dart';
import '../response/conversation_list_response.dart';
import '../response/login_response.dart';
import '../response/messages_response.dart';
import '../response/most_recommended.dart';
import '../response/most_recommended_response.dart';
import '../response/network.dart';
import '../response/network_details.dart';
import '../response/network_list.dart';
import '../response/network_user.dart';
import '../response/notif_count_response.dart';
import '../response/notifications.dart';
import '../response/packages_response.dart';
import '../response/partner.dart';
import '../response/partner_details.dart';
import '../response/partner_login_response.dart';
import '../response/partner_profil_data.dart';
import '../response/products.dart';
import '../response/recommendation_response.dart';
import '../response/register_profile.dart';
import '../response/send_otp_response.dart';
import '../response/transaction_data.dart';
import '../response/transactions_data.dart';

part 'auth_api.g.dart';

@RestApi(baseUrl: baseUrl)
abstract class AuthApi {
  factory AuthApi(Dio dio, {String? baseUrl}) = _AuthApi;

  @POST('client/register')
  Future<void> registerProfile(@Body() RegisterProfile request);

  @GET('friends')
  Future<NetworkList> getMyNetwork(@Query("keyword") String name);

  @GET('notifications')
  Future<Pagination<NotificationsResponse>> notifications(
    @Query('page') int page,
  );

  @POST('friend/delete')
  Future<void> friendDelete(
    @Query('friend_request_id') int id,
  );

  @POST('friend/accept')
  Future<void> friendAccept(
    @Body() NotofocationElementRequest request,
  );

  @DELETE('/profile')
  Future<void> profile();

  @POST('post/create')
  Future<void> postCreate(
    @Body() PostCreateRequest request,
  );

  @POST('message/send')
  Future<void> sendRecomended(
    @Body() SendRecomended request,
  );

  @GET('search')
  Future<Pagination<NetworkUser>> search(
      @Query('page') int page, @Query("type") String type, @Query("text") String? text);

  @GET('industries')
  Future<Category> categories();

  @GET('search')
  Future<Pagination<Partner>> searchPartner(
    @Query('page') int page,
    @Query("type") String type,
    @Query("text") String? text,
  );

  @POST('client/login')
  Future<LoginResponse> login(
    @Body() LoqinRequest request,
  );

  @POST('client/user-exists')
  Future<bool> userExists(
    @Body() UserExistsRequest request,
  );

  @POST('partner/auth/login')
  Future<LoginResponse> partnerLogin(
    @Body() PartnerLoginReguest request,
  );

  @POST('partner/referer-use')
  Future<ScanQRCodeResponse> scanQRCode(
    @Body() ScanQRCodeRequest request,
  );

  @GET('client/partners/most-recommended/{id}')
  Future<MostRecommendedResponse> mostRecommended(
    @Path("id") String id,
  );

  @GET('industry/{id}')
  Future<MostRecommendedResponse> industry(
    @Path("id") String id,
  );

  @POST('client/verify')
  Future<void> verify(
    @Body() VerifayRequest request,
  );

  @GET('profile')
  Future<UserDetailsResponse> userDetails();

  @POST('friend/send')
  Future<Network> sendFewnd(
    @Body() SendFewndRequest request,
  );

  @POST('post/create-comment')
  Future<void> createComment(
    @Body() CreateCommentRequest request,
  );

  @POST('profile-update')
  Future<UserDetailsResponse> updateUserData(
    @Body() UpdateUserDataRequest request,
  );

  @POST('referer/add-basket')
  Future<void> addBasket(
    @Body() AddBasketRequest request,
  );

  @POST('change-image')
  Future<UserDetailsResponse> uploadImage(
    @Part(name: 'image') File file,
  );

  @GET('client/partners/popular/{id}')
  Future<MostRecommendedResponse> popularPartners(
    @Path("id") String id,
  );

  @GET('basket-list')
  Future<Pagination<Basket>> basketList(
    @Query('page') int page,
  );

  @GET('client/partners/most-recommended/{id}')
  Future<Pagination<MostRecommended>> mostRecommendedPagination(
    @Query('page') int page,
    @Path("id") String id,
  );

  @GET('client/industry/top_discount/{id}')
  Future<MostRecommendedResponse> topDiscount(
    @Path("id") String id,
  );

  @GET('client/{type}')
  Future<Pagination<MostRecommended>> getPartnerByType(
    @Query('page') int page,
    @Path("type") String type,
  );

  @GET('partner/{date}')
  Future<PartnerDetails> partnerDetails(
    @Path() String date,
  );

  @GET('partner/{date}')
  Future<PartnerProdileData> partnerDetailsInfo(
    @Path() String date,
  );

  @GET('/category/{partnerId}/{categoryId}')
  Future<Pagination<Products>> partnerProduct(
    @Query('page') int page,
    @Path() String partnerId,
    @Path() String categoryId,
  );

  @GET('profile/{date}')
  Future<NetworkDetails> profileDetails(
    @Path() String date,
  );

  @GET('post/{date}/comments')
  Future<CommentsList> getCommentsList(
    @Path() String date,
  );

  @GET('post/list/{date}')
  Future<Pagination<RecommendationResponse>> gatPost(
    @Query('page') int page,
    @Path() String? date,
  );

  @GET('recommendation/my/pending')
  Future<Pagination<RecommendationResponse>> gatRecommendation(
    @Query('page') int page,
    @Query('industry_id') int? industryId,
    @Query('order') String? order,
  );

  @GET('recommendation/network/{pending}')
  Future<Pagination<RecommendationResponse>> gatNetworkRecommendation(
    @Query('page') int page,
    @Query('industry_id') int? industryId,
    @Query('order') String? order,
    @Path() RecomendFilter pending,
  );

  @PUT('/api/sendOtp')
  Future<void> getRegistration(
    @Query("phoneNumber") int number,
  );

  @POST('/api/checkOtpRegister')
  Future<SendOtpResponse> sendRegistration(
    @Query("phoneNumber") int number,
    @Query("otpCode") int otpCode,
  );

  @POST('/api/checkOtpLogin')
  Future<SendOtpResponse> sendOtpLogin(
    @Query("phoneNumber") int number,
    @Query("otpCode") int otpCode,
  );

  @PUT('/api/registerData')
  Future<void> registration(
    @Body() RegistrationRequest request,
  );

  @GET('https://api.buylink.info/partner/transactions')
  Future<TransactionData> partnerTransactions();

  @POST('/message/create-conversation')
  Future<CreateConversationResponseData> createConversation(
    @Body() CreateConversation request,
  );

  @POST('/client/partners/{id}/rate')
  Future<void> rating(
    @Path() String id,
    @Body() RaitingRequest request,
  );

  @POST('/pay-from-wallet')
  Future<void> payFromWallet(
    @Body() PayFromWalletRequest request,
  );

  @GET('/transaction-by-referer-claim/{uuid}')
  Future<TransactionClaimData> refererDetail(
    @Path() String uuid,
  );

  @PUT('/api/updatePassword')
  Future<void> forgotPassword(
    @Body() ForgotPasswordrRequest request,
  );

  @GET('/api/packages')
  Stream<PackagesResponse> packages();

  @GET('message/conversation_list')
  Future<ConversationListResponse> conversationList();

  @GET('conversation/{date}/messages')
  Future<MessagesResponse> messages(
    @Path() int? date,
  );

  @POST('message/send')
  Future<void> sendMessages(
    @Body() SendMessageRequest request,
  );

  @GET('/transactions')
  Future<TransactionsData> transactions();

  @GET('/self-transactions')
  Future<TransactionsData> selfTransactions();

  @GET('/referer-claim/refresh/{uuid}')
  Future<BasketData> refererClaim(
    @Path() String uuid,
  );

  @POST('/update-firebase-token')
  Future<void> updateFirebaseToken(
    @Body() FirebaseNotif request,
  );

  @GET('new-notifications-count')
  Future<NotifCountResponse> getUnReadNotificationCount();

  @GET('unread-chat-count')
  Future<NotifCountResponse> getUnreadChatCount();

}
