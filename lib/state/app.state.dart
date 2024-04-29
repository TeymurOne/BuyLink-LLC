
import 'package:flutter/material.dart';

import '../models/category.dart';
import '../models/user.dart';
import '../services/api.service.dart';

class AppState extends ChangeNotifier {
  int selectedNavigationIndex = 0;
  User? currentUser;
  String? logInError;
  late List<Category> categories;
  AppState() {
    categories = [
      Category(
          title: 'All categories',
          description: '120000 partners',
          imgUrl:
              'https://unsplash.com/photos/qpNkETcVzfc/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgxMzg4MzA1&force=true&w=320'),
      Category(
          title: 'Clothes',
          description: '350 Shops',
          ranges: 'Range 5-15%',
          imgUrl:
              'https://unsplash.com/photos/-NyPn9up_7o/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgxMzg4Mjg1&force=true&w=320'),
      Category(
          title: 'Vehicles',
          description: '246 Auto-shows',
          ranges: 'Range 5-10%',
          imgUrl:
              'https://unsplash.com/photos/YApiWyp0lqo/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgxMzg2NDM5&force=true&w=320'),
      Category(
          title: 'Eat & Drink',
          description: '1543 Restaurants & Bars',
          ranges: 'Range 10-20%',
          imgUrl:
              'https://unsplash.com/photos/jUPOXXRNdcA/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgxMzg3MDYy&force=true&w=320'),
      Category(
          title: 'Shops',
          description: '45665 Shops',
          ranges: 'Range 5-20%',
          imgUrl:
              'https://unsplash.com/photos/FoeIOgztCXo/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgxMzg4NTcy&force=true&w=320'),
      Category(
          title: 'Medicine',
          description: '23834 clinics',
          ranges: 'Range 5-15%',
          imgUrl:
              'https://unsplash.com/photos/eRJCXdb3Q48/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgxMzg3NDcz&force=true&w=320'),
      Category(
          title: 'Real Estate',
          description: '23834 companies',
          ranges: 'Range 5-15%',
          imgUrl:
              'https://unsplash.com/photos/PhYq704ffdA/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgxMzg0OTc1&force=true&w=320'),
    ];
  }


  fetchUser() async {
    currentUser = await ApiService.getInstance.getUser();
    notifyListeners();
  }

  setNavigationIndex(int index) {
    selectedNavigationIndex = index;
    notifyListeners();
  }

  Future<bool> logIn(String email, String password) async {
    logInError = null;
    notifyListeners();
    var result = await ApiService.getInstance.logIn(email, password);
    if (result.errorMessage == null) {
      currentUser = result.user;
      notifyListeners();
      return true;
    } else {
      logInError = result.errorMessage;
      notifyListeners();
      return false;
    }
  }

  void logOut() {
    currentUser = null;
    notifyListeners();
  }
}
