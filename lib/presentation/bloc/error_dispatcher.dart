import 'dart:async';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:rxdart/rxdart.dart';

import 'base_bloc.dart';
import 'base_screen.dart';
import 'error_handler.dart';

typedef bool ErrorHandler(Object error);

mixin ErrorDispatcher<Page extends BaseScreen, Bloc extends BaseBloc>
on BaseState<Page, Bloc> {
  StreamSubscription? errorSubscription;

  @override
  void initState() {
    super.initState();
    errorSubscription = bloc.errorStream
        .transform(ThrottleStreamTransformer<Object>(
            (_) => TimerStream<Object>(true, const Duration(seconds: 2))))
        .listen((error) {
      if (error.runtimeType == DioError &&
          ((error as DioError).response?.statusCode == 404 ||
              error.response?.statusCode == 422)) {
        final responseBody = error.response?.data;
        if (responseBody is Map) {
          final errorMessage = responseBody["message"];
          if (errorMessage != null) {
            return showSnackbar(errorMessage);
          }  
        }
        return;
      }
      if (errorHandler == null) {
        showSnackbar(parseError(error, context));
      } else {
        if (errorHandler!.call(error)) {
          showSnackbar(parseError(error, context));
        }
      }
    });
  }

  @override
  void dispose() {
    errorSubscription?.cancel();
    super.dispose();
  }

  ErrorHandler? get errorHandler => null;
}
