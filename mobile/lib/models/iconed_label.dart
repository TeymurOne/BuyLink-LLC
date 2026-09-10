class IconedLabel {
  String asset;
  String label;

  IconedLabel(this.asset, this.label);

  String get vectorAssetPath => 'assets/vector/$asset.svg';
  String get rasterAssetPath => 'assets/raster/$asset.png';
  String get riveAssetPath => 'assets/rive/$asset.riv';
}
