import 'package:buylink_flutter/presentation/common/input_number.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:rxdart/rxdart.dart';
import '../../../../../../../data/network/request/post_create_request.dart';
import '../../../../../../../data/network/request/send_recomended.dart';
import '../../../../../../../data/network/response/network.dart';
import '../../../../../../../data/network/response/partner_details_response.dart';
import '../../../../../../../generated/l10n.dart';
import '../../../../../../../presentation/bloc/bloc_provider.dart';
import '../../../../../../../presentation/common/input_text.dart';
import '../../../../../../../presentation/resourses/app_colors.dart';
import '../../../../profil_tab/network/throttler.dart';
import '../product_details_bloc.dart';
import '../share_on_a_post.dart';

class RecomendedList extends StatefulWidget {
  final Stream<List<Network>> getMyNetwork;
  final PartnerDetailsResponse partner;

  final ValueChanged<PostCreateRequest> postCreate;
  final ValueChanged<String> onSearchChanged;
  final ValueChanged<PostCreateRequest> shareOnPost;
  final ValueChanged<SendRecomended> sendRecomended;
  final int partnetId;

  const RecomendedList({
    super.key,
    required this.getMyNetwork,
    required this.partnetId,
    required this.partner,
    required this.shareOnPost,
    required this.onSearchChanged,
    required this.sendRecomended,
    required this.postCreate,
  });

  @override
  State<RecomendedList> createState() => _RecomendedListState();
}

class _RecomendedListState extends State<RecomendedList> {
  bool isButtonEnable = true;
  TextEditingController _textController = TextEditingController();
  final TextEditingController _searchTextController = TextEditingController();
  final Throttler searchThrottler = Throttler();

  List<int> selectedProducts = [];

  @override
  void initState() {
    super.initState();
    _searchTextController.addListener(
      () {
        searchThrottler.run(
          () {
            widget.onSearchChanged(_searchTextController.text.trim());
          },
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return StreamBuilder<List<Network>>(
      stream: widget.getMyNetwork,
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          return DraggableScrollableSheet(
            expand: false,
            minChildSize: 0.6,
            maxChildSize: 0.9,
            initialChildSize: 0.6,
            builder: (BuildContext context, ScrollController scrollController) {
              return Container(
                decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(20)),
                child: Stack(
                  children: [
                    Column(
                      children: [
                        Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Container(
                              margin: EdgeInsets.only(top: 30, bottom: 10),
                              width: 120,
                              height: 5,
                              decoration: BoxDecoration(
                                  color: Colors.grey.withOpacity(0.4), borderRadius: BorderRadius.circular(40)),
                            ),
                          ],
                        ),
                        Padding(
                          padding: const EdgeInsets.only(left: 20, right: 20),
                          child: TextFildd(
                            labelText: S.of(context).search,
                            controller: _searchTextController,
                          ),
                        ),
                        if (selectedProducts.isEmpty)
                          Container(
                            height: 85,
                            child: Row(
                              children: [
                                GestureDetector(
                                  onTap: () => showDialog(
                                    context: context,
                                    builder: (_) {
                                      return ShareOnAPost(
                                        postCreate: (PostCreateRequest request) => widget.postCreate(request),
                                        partner: widget.partner,
                                      );
                                    },
                                  ),
                                  child: Container(
                                    margin: EdgeInsets.only(left: 20),
                                    padding: EdgeInsets.only(left: 10, right: 15, top: 10, bottom: 10),
                                    decoration: BoxDecoration(
                                        color: AppColors.appColor, borderRadius: BorderRadius.circular(8)),
                                    child: Row(
                                      children: [
                                        Padding(
                                          padding: const EdgeInsets.only(right: 3),
                                          child: Icon(
                                            Icons.add,
                                            color: Colors.white,
                                            size: 18,
                                          ),
                                        ),
                                        Text(
                                          S.of(context).shareOnAPost,
                                          style: TextStyle(fontWeight: FontWeight.w500, color: Colors.white),
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                                const SizedBox(
                                  width: 10,
                                ),
                              ],
                            ),
                          ),
                        if (selectedProducts.isNotEmpty)
                          Padding(
                            padding: const EdgeInsets.only(bottom: 15, left: 20, right: 20),
                            child: TextFildd(
                              colorsGrey: true,
                              controller: _textController,
                              labelText: S.of(context).writeAMessage,
                            ),
                          ),
                        ListView.separated(
                          controller: scrollController,
                          itemCount: snapshot.requireData.length,
                          clipBehavior: Clip.none,
                          shrinkWrap: true,
                          itemBuilder: (BuildContext context, int index) {
                            return CheckboxListTile(
                              checkboxShape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
                              activeColor: AppColors.appColor,
                              title: Container(
                                height: 60,
                                width: 60,
                                padding: const EdgeInsets.only(left: 5),
                                child: ListTile(
                                  leading: AspectRatio(
                                    aspectRatio: 1,
                                    child: ClipRRect(
                                      borderRadius: BorderRadius.circular(100),
                                      child: Image.network(
                                        snapshot.requireData[index].user.image,
                                        fit: BoxFit.cover,
                                      ),
                                    ),
                                  ),
                                  contentPadding: EdgeInsets.symmetric(vertical: 0),
                                  title: Text(
                                    snapshot.requireData[index].user.name,
                                    style: TextStyle(fontWeight: FontWeight.w500),
                                  ),
                                ),
                              ),
                              value: selectedProducts.contains(snapshot.requireData[index].user.id),
                              onChanged: (bool? value) {
                                setState(() {
                                  if (value == true) {
                                    selectedProducts.add(snapshot.requireData[index].user.id ?? 0);
                                  } else {
                                    selectedProducts.remove(snapshot.requireData[index].user.id);
                                  }
                                });
                              },
                            );
                          },
                          separatorBuilder: (BuildContext context, int index) {
                            return SizedBox();
                          },
                        ),
                      ],
                    ),
                    if (selectedProducts.isNotEmpty)
                      Align(
                        alignment: Alignment.bottomCenter,
                        child: Container(
                          margin: EdgeInsets.all(20),
                          height: 50,
                          width: double.infinity,
                          child: ElevatedButton(
                            style: ElevatedButton.styleFrom(
                                disabledBackgroundColor: AppColors.appColor.withOpacity(0.3),
                                backgroundColor: AppColors.appColor,
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(5.0),
                                ),
                                textStyle: const TextStyle(
                                  fontSize: 18,
                                  fontWeight: FontWeight.bold,
                                )),
                            onPressed: isButtonEnable ? _shere : null,
                            child: Text(
                              S.of(context).share,
                              style: TextStyle(color: Colors.white, fontWeight: FontWeight.w600, fontSize: 15),
                            ),
                          ),
                        ),
                      ),
                  ],
                ),
              );
            },
          );
        }
        return SizedBox();
      },
    );
  }

  _shere() {
    setState(() {
      isButtonEnable = false;
    });
    widget.sendRecomended(
      SendRecomended(
        partnerId: widget.partnetId,
        recipientId: selectedProducts,
        text: _textController.text.trim(),
      ),
    );
  }
}
