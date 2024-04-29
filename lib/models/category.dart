class Category {
  String title;
  String description;
  String? ranges;
  String imgUrl;
  Category(
      {required this.title,
      required this.description,
      this.ranges,
      required this.imgUrl});
}
