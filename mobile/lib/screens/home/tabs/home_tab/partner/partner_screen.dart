import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/presentation/common/input_text.dart';
import 'package:buylink_flutter/presentation/resourses/app_colors.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/partner/partner_bloc.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/partner/product_details/widget/recomended_list.dart';
import 'package:buylink_flutter/screens/home/tabs/home_tab/partner/show_partner_product/show_product_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter_svg/svg.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:top_snackbar_flutter/custom_snack_bar.dart';
import 'package:top_snackbar_flutter/top_snack_bar.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../../../components/avatar.dart';
import '../../../../../components/product.dart';
import '../../../../../components/switch.dart';
import '../../../../../data/network/request/post_create_request.dart';
import '../../../../../data/network/request/send_recomended.dart';
import '../../../../../data/network/response/network.dart';
import '../../../../../data/network/response/partner.dart';
import '../../../../../data/network/response/partner_details.dart';
import '../../../../../data/network/response/partner_details_response.dart';
import '../../../../../generated/l10n.dart';
import '../../../../../utils/util.dart';
import '../../../home_screen.dart';
import '../../profil_tab/network/user_details/user_details_screen.dart';
import '../widget/open_package.dart';
import 'map.dart';
import 'maps_all/maps_see_all_screen.dart';

class PartnerScreen extends BaseScreen {
  final String partnerId;

  PartnerScreen({required this.partnerId});

  @override
  State<PartnerScreen> createState() => _PartnerScreenState();
}

class _PartnerScreenState extends BaseState<PartnerScreen, PartnerBloc> {
  int selectedSwitchIndex = 0;

  @override
  PreferredSizeWidget? appBar() {
    return AppBar(
      backgroundColor: CustomColors.white,
      foregroundColor: CustomColors.gray,
      shadowColor: Colors.transparent,
    );
  }

  @override
  Widget body() {
    return FutureBuilder<PartnerDetails>(
      future: bloc.partnerDetails(widget.partnerId),
      builder: (_, snapshot) {
        if (snapshot.hasData) {
          final snap = snapshot.requireData.data;
          return Stack(
            children: [
              SafeArea(
                child: Padding(
                  padding: const EdgeInsets.all(18.0),
                  child: SingleChildScrollView(
                    clipBehavior: Clip.none,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        ListTile(
                          contentPadding: EdgeInsets.zero,
                          leading: SizedBox(
                            width: 60,
                            height: 60,
                            child: Avatar(
                              snap.image,
                              online: false,
                            ),
                          ),
                          title: Text(
                            snap.title,
                            style: TextStyle(fontWeight: FontWeight.w600, fontSize: 22),
                          ),
                          subtitle: SizedBox(
                            height: 30,
                            child: Row(crossAxisAlignment: CrossAxisAlignment.center, children: [
                              Icon(
                                Icons.star,
                                color: Color(0xffFCD34D),
                              ),
                              Text(
                                (snap.rating ?? 0.0).toString(),
                                style: TextStyle(fontWeight: FontWeight.w600, color: Colors.black, fontSize: 15),
                              ),
                              VerticalDivider(
                                thickness: 1,
                                color: Colors.grey,
                                indent: 6,
                                endIndent: 6,
                              ),
                              Text(
                                '${snap.recommendationsCount} ' + S.of(context).recommendations,
                                style: TextStyle(fontWeight: FontWeight.w300, color: Colors.black, fontSize: 13),
                              ),
                            ]),
                          ),
                        ),
                        SizedBox(
                          height: 10,
                        ),
                        CustomSwitch<int>(
                          {0: S.of(context).products, 1: S.of(context).about},
                          (index) {
                            selectedSwitchIndex = index;
                            setState(() {});
                          },
                          initialValue: selectedSwitchIndex,
                        ),
                        SizedBox(
                          height: 20,
                        ),
                        SizedBox(
                            height: MediaQuery.of(context).size.height,
                            child: selectedSwitchIndex == 0 ? _productPage(snap) : _aboutPage(snap)),
                      ],
                    ),
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(16.0),
                child: Align(
                  alignment: Alignment.bottomCenter,
                  child: GestureDetector(
                    onTap: () => showCategoriesModal(snapshot.requireData.data),
                    child: Container(
                      width: double.infinity,
                      height: 48,
                      decoration: BoxDecoration(color: AppColors.appColor, borderRadius: BorderRadius.circular(8)),
                      child: Center(
                        child: Text(
                          S.of(context).recommend,
                          style: TextStyle(color: Colors.white, fontWeight: FontWeight.w500),
                        ),
                      ),
                    ),
                  ),
                ),
              )
            ],
          );
        }
        return SizedBox();
      },
    );
  }

  @override
  PartnerBloc provideBloc() {
    return PartnerBloc();
  }

  void showCategoriesModal(PartnerDetailsResponse partner) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(20))),
      builder: (context) => RecomendedList(
        getMyNetwork: bloc.getMyNetwork,
        postCreate: (PostCreateRequest value) => bloc.postCreate(value).then((value) {
          Navigator.pop(context);
          Navigator.pushReplacement(
            context,
            MaterialPageRoute(
              builder: (BuildContext context) => HomeScreen(
                initialTabIndex: 4,
              ),
            ),
          );
        }),
        sendRecomended: (SendRecomended value) => bloc.sendRecomended(value).then((value) => Navigator.pop(context)),
        partnetId: int.tryParse(widget.partnerId) ?? 0,
        onSearchChanged: (String value) => bloc.onSearchChanged(value),
        shareOnPost: (PostCreateRequest value) => bloc.postCreate(value),
        partner: partner,
      ),
    );
  }

  Widget _productPage(PartnerDetailsResponse snap) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 60),
      child: Column(
        key: Key('products'),
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            height: 10,
          ),
          Text(
            snap.description ?? "",
            style: TextStyle(fontSize: 16),
          ),
          SizedBox(
            height: 10,
          ),
          Expanded(
            child: ListView.builder(
              itemCount: snap.catalogue?.length ?? 0,
              itemBuilder: (BuildContext context, int index) {
                return Column(
                  children: [
                    Row(
                      children: [
                        Text(
                          snap.catalogue?[index].name ?? "",
                          style: TextStyle(fontWeight: FontWeight.w600, fontSize: 20),
                        ),
                        Spacer(),
                        TextButton(
                          onPressed: () => Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (BuildContext context) => ShowProductScreen(
                                        partnerId: snap.id.toString(),
                                        categoryId: snap.catalogue![index].products.firstOrNull!.category.id.toString(),
                                        categoryName: snap.catalogue![index].products.firstOrNull!.category.name,
                                        partner: snap,
                                      ))),
                          style: ButtonStyle(
                            backgroundColor: MaterialStatePropertyAll<Color>(CustomColors.lightGray),
                            foregroundColor: MaterialStatePropertyAll<Color>(CustomColors.black),
                          ),
                          child: Text(
                            S.of(context).seeAll,
                            style: TextStyle(fontWeight: FontWeight.w300),
                          ),
                        ),
                      ],
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    SizedBox(
                      height: 190,
                      child: Product(
                        catalogue: snap.catalogue?[index] ?? null,
                        partnerId: widget.partnerId,
                        partner: snap,
                      ),
                    ),
                  ],
                );
              },
            ),
          ),
          SizedBox(
            height: 300,
          ),
        ],
      ),
    );
  }

  Widget _aboutPage(PartnerDetailsResponse snap) {
    return snap.branches.length == null
        ? Container()
        : Column(
            key: Key('about'),
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(
                height: 20,
              ),
              Text(
                S.of(context).locationsAndContacts,
                style: TextStyle(fontWeight: FontWeight.w600, fontSize: 18),
              ),
              SizedBox(
                height: 20,
              ),
              Row(
                children: [
                  Padding(
                    padding: const EdgeInsets.only(top: 15, bottom: 15),
                    child: Text(S.of(context).nearestBranchToYou),
                  ),
                  Spacer(),
                  if (snap.branches!.length > 1 && snap.branches?.length != null)
                    TextButton(
                      onPressed: () => Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (BuildContext context) => MapsSeeAllScreen(
                                    snap: snap,
                                  ))),
                      style: ButtonStyle(
                        backgroundColor: MaterialStatePropertyAll<Color>(CustomColors.lightGray),
                        foregroundColor: MaterialStatePropertyAll<Color>(CustomColors.black),
                      ),
                      child: Text(
                        S.of(context).seeAllBranches,
                        style: TextStyle(fontWeight: FontWeight.w300),
                      ),
                    ),
                ],
              ),
              LocationProduct(
                location: LatLng(double.parse(snap.location.lat ?? "0.0"), double.parse(snap.location.lng ?? "0.0")),
              ),
              SizedBox(
                height: 10,
              ),
              if (snap.branches.firstOrNull?.address != null)
                GestureDetector(
                  onTap: () {
                    openMapsSheet(
                        context, double.parse(snap.location.lat ?? "0.0"), double.parse(snap.location.lng ?? "0.0"));
                  },
                  child: Row(
                    children: [
                      SvgPicture.asset('assets/vector/location.svg'),
                      SizedBox(
                        width: 10,
                      ),
                      Text(snap.branches.firstOrNull?.address ?? "")
                    ],
                  ),
                ),
              if (snap.phone != null)
                GestureDetector(
                  onTap: () => _launchPhone(snap.phone ?? ""),
                  child: Row(
                    children: [
                      SvgPicture.asset('assets/vector/phone.svg'),
                      SizedBox(
                        width: 10,
                      ),
                      Text(snap.phone ?? "")
                    ],
                  ),
                ),
              SizedBox(
                height: 10,
              ),
              if (snap.email != null)
                Row(
                  children: [
                    SvgPicture.asset('assets/vector/mail.svg'),
                    SizedBox(
                      width: 10,
                    ),
                    Text(snap.email ?? "")
                  ],
                ),
              if (snap.socials?.facebook != null)
                GestureDetector(
                  onTap: () => _launchURL(snap.socials?.facebook ?? ""),
                  child: Row(
                    children: [
                      Icon(Icons.facebook),
                      SizedBox(
                        width: 10,
                      ),
                      Text(snap.email ?? "")
                    ],
                  ),
                ),
              if (snap.socials?.instagram != null)
                GestureDetector(
                  onTap: () => _launchURL(snap.socials?.instagram ?? ""),
                  child: Row(
                    children: [
                      Icon(Icons.facebook),
                      SizedBox(
                        width: 10,
                      ),
                      Text(snap.email ?? "")
                    ],
                  ),
                ),
            ],
          );
  }

  Future<void> _launchPhone(String url) async {
    print("object");
    if (!await launch("tel://$url")) {
      throw 'Could not launch';
    }
  }

  Future<void> _launchURL(String url) async {
    print("object");
    if (!await launch("$url")) {
      throw 'Could not launch';
    }
  }
}
