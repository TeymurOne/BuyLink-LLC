import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import '../../../../../data/network/response/category_response.dart';
import '../../../../../generated/l10n.dart';

class CategorySelector extends StatefulWidget {
  final Future<List<CategoryResponse>> categories;
  final ValueChanged<CategoryResponse> onChanged;

  const CategorySelector(
      {super.key, required this.categories, required this.onChanged});

  @override
  State<CategorySelector> createState() => _CategorySelectorState();
}

class _CategorySelectorState extends State<CategorySelector> {
  CategoryResponse? _selectedCategory;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(12.0),
      child: InkWell(
        onTap: showCategoriesModal,
        child: Row(children: [
          Text(
            _selectedCategory?.name ?? S.of(context).allCategories,
            style: Theme.of(context).textTheme.titleLarge,
          ),
          Icon(Icons.keyboard_arrow_down_rounded),
        ]),
      ),
    );
  }

  void showCategoriesModal() {
    showModalBottomSheet(
        context: context,
        isScrollControlled: true,
        shape: const RoundedRectangleBorder(
            borderRadius: BorderRadius.vertical(top: Radius.circular(20))),
        builder: (context) {
          return categoriesModal();
        });
  }

  Widget categoriesModal() {
    return FutureBuilder<List<CategoryResponse>>(
        future: widget.categories,
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return DraggableScrollableSheet(
              expand: false,
              minChildSize: 0.3,
              maxChildSize: 0.9,
              initialChildSize: 0.3,
              builder:
                  (BuildContext context, ScrollController scrollController) {
                return ListView(
                  children: [
                    GestureDetector(
                      onTap: () {
                        setState(() {
                          var category = CategoryResponse(id: 0, image: '', name: S.of(context).allCategory);
                          _selectedCategory = category;
                          widget.onChanged(category);
                        });
                        Navigator.pop(context);
                      },
                      child: ListTile(
                        leading: AspectRatio(
                          aspectRatio: 1,
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(8),
                            child: CachedNetworkImage(
                              imageUrl: "https://buylink.info/storage/42/download.jpg",
                              fit: BoxFit.cover,
                            ),
                          ),
                        ),
                        title: Text(S.of(context).allCategory),
                        subtitle:
                        // Text(snapshot.requireData[index].id.toString()),
                        Text(""),
                      ),
                    ),
                    ListView.separated(
                      controller: scrollController,
                      itemCount: snapshot.requireData.length ,
                      clipBehavior: Clip.none,
                      shrinkWrap: true,
                      itemBuilder: (BuildContext context, int index) {
                          return GestureDetector(
                            onTap: () {
                              setState(() {
                                var category = snapshot.requireData[index];
                                _selectedCategory = category;
                                widget.onChanged(category);
                              });
                              Navigator.pop(context);
                            },
                            child: ListTile(
                              leading: AspectRatio(
                                aspectRatio: 1,
                                child: ClipRRect(
                                  borderRadius: BorderRadius.circular(8),
                                  child: CachedNetworkImage(
                                    imageUrl: snapshot.requireData[index].image,
                                    fit: BoxFit.cover,
                                  ),
                                ),
                              ),
                              title: Text(snapshot.requireData[index].name),
                              subtitle:
                                  // Text(snapshot.requireData[index].id.toString()),
                                  Text(""),
                            ),
                          );
                      },
                      separatorBuilder: (BuildContext context, int index) {
                          return Divider();

                      },
                    ),
                  ],
                );
              },
            );
          }
          return SizedBox();
        });
  }
}
