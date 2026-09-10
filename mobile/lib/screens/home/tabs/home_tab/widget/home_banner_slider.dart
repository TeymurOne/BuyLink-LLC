import 'package:buylink_flutter/screens/home/tabs/home_tab/widget/partner_list.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import '../../../../../components/blue_promo.dart';
import '../../../../../data/network/response/category_response.dart';
import '../../../../../generated/l10n.dart';
import '../../../../../presentation/resourses/app_colors.dart';
import '../partner/partner_screen.dart';

class HomeBannerSlider extends StatefulWidget {
  final List<CategoryResponse> categories;

  const HomeBannerSlider({super.key, required this.categories});

  @override
  State<HomeBannerSlider> createState() => _HomeBannerSliderState();
}

class _HomeBannerSliderState extends State<HomeBannerSlider> {
  final CarouselController _controller = CarouselController();
  int _current = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        CarouselSlider(
          items: widget.categories
              .map(
                (item) => GestureDetector(
                  onTap: () => Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (BuildContext context) {
                        return PartnerList(id: item.id.toString(), title: item.name,);
                      },
                    ),
                  ),                  child: Container(
                    decoration: BoxDecoration(
                      color: AppColors.appColor,
                      borderRadius: BorderRadius.circular(10),
                    ),
                    margin: EdgeInsets.only(
                        left:
                            (_current == widget.categories.length - 1) ? 0 : 20,
                        right: (_current == widget.categories.length - 1)
                            ? 20
                            : 0),
                    width: 320,
                    child: BluePromo(
                      title: item.name,
                      desc: S.of(context).get40OffForAllDressess,
                      image: item.image,
                    ),
                  ),
                ),
              )
              .toList(),
          options: CarouselOptions(
              viewportFraction: 0.8,
              padEnds: false,
              autoPlay: true,
              enableInfiniteScroll: false,
              height: 160,
              onPageChanged: (index, reason) {
                print(index);
                setState(() {
                  _current = index;
                });
              }),
          carouselController: _controller,
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: widget.categories.asMap().entries.map((entry) {
            return GestureDetector(
              onTap: () => _controller.animateToPage(entry.key),
              child: Container(
                width: 12.0,
                height: 12.0,
                margin: EdgeInsets.symmetric(vertical: 8.0, horizontal: 4.0),
                decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: AppColors.appColor
                        .withOpacity(_current == entry.key ? 0.9 : 0.4)),
              ),
            );
          }).toList(),
        )
      ],
    );
  }
}
