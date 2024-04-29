import 'package:buylink_flutter/presentation/bloc/base_screen.dart';
import 'package:buylink_flutter/presentation/bloc/error_dispatcher.dart';
import 'package:buylink_flutter/screens/partner/partner_home_tab/tabs/partner_scaner/scaner/scaner_bloc.dart';
import 'package:buylink_flutter/screens/partner/partner_home_tab/tabs/partner_scaner/scaner/widget/scaner_true.dart';
import 'package:flutter/material.dart';
import 'package:mobile_scanner/mobile_scanner.dart';
import '../../../../../domain/entities/patterns.dart';
import '../../../../../generated/l10n.dart';
import '../../../../../presentation/common/input_text.dart';
import '../../../../../presentation/resourses/app_colors.dart';

class PartnerHome extends BaseScreen {
  PartnerHome({Key? key}) : super(key: key);

  @override
  State<PartnerHome> createState() => _PartnerHomeState();
}

class _PartnerHomeState extends BaseState<PartnerHome, ScanerBloc> with ErrorDispatcher{
  final TextEditingController _amountController = TextEditingController();
  final ValueNotifier<bool> _valueNotifier = ValueNotifier(false);
  final MobileScannerController controller = MobileScannerController(autoStart: false);
  bool isCameraStarted = false;
  final ValueNotifier<bool> valueNotifier = ValueNotifier(true);
  int seconds = 60;
  bool isTimerVisible = true;
  bool isTextVisible = false;

  @override
  void initState() {
    super.initState();
    bloc.getUserDetails();
    _amountController.addListener(_validate);
  }

  @override
  Widget body() {
    return ListView(
      children: [
        Container(
          width: double.infinity,
          height: MediaQuery.of(context).size.width * 0.9,
          margin: EdgeInsets.all(20),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(50),
            border: Border.all(color: AppColors.appColor, width: 6),
          ),
          child: Stack(
            children: [
              Container(
                clipBehavior: Clip.antiAlias,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(44),
                ),
                child: MobileScanner(
                  controller: controller,
                  onDetect: (data) async {
                    if (data.barcodes.isNotEmpty) {
                      final code = data.barcodes.first.rawValue;
                      if (code != null) {
                        await controller.stop();
                        await bloc.scanQRCode(code, _amountController.text.trim()).then(
                          (value) {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (BuildContext context) => ScanerTrue(
                                  response: value,
                                ),
                              ),
                            );
                          },
                        );
                        isCameraStarted = false;
                        await controller.stop();
                      }
                    }
                  },
                ),
              ),
              ValueListenableBuilder<bool>(
                valueListenable: valueNotifier,
                builder: (BuildContext context, value, Widget? child) {
                  if (value) {
                    return Container(
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(50),
                      ),
                      child: Center(
                        child: Image.asset(
                          "assets/vector/logo.png",
                          width: 100,
                        ),
                      ),
                    );
                  } else {
                    return SizedBox();
                  }
                },
              ),
            ],
          ),
        ),

        Padding(
          padding: const EdgeInsets.only(left: 20,right: 20,bottom: 20),
          child: TextFildd(
            labelText: S.of(context).enterTheFullPurchaseAmount,
            controller: _amountController,
          ),
        ),
        Container(
          margin: EdgeInsets.only(left: 20, right: 20),
          height: 55,
          width: double.infinity,
          decoration: BoxDecoration(
              border: Border.all(
                color: Colors.white,
              ),
              borderRadius: BorderRadius.circular(10)),
          child: ValueListenableBuilder<bool>(
            valueListenable: _valueNotifier,
            builder: (_, value, __) {
              return ElevatedButton(
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
                onPressed: value ? _login : null,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      S.of(context).scan,
                      style: TextStyle(
                          color: value ? Colors.white : Colors.white, fontWeight: FontWeight.w600, fontSize: 15),
                    ),
                  ],
                ),
              );
            },
          ),
        ),
      ],
    );
  }

  @override
  ScanerBloc provideBloc() {
    return ScanerBloc();
  }

  @override
  void dispose() {
    _amountController.dispose();
    super.dispose();
  }

  void _validate() {
    var isValid = Patterns.textField.hasMatch(_amountController.text.trim());
    _valueNotifier.value = isValid;
  }

  _login() {
    if (!isCameraStarted) {
      isCameraStarted = true;
      controller.start();
      valueNotifier.value = false;
    } else {
      isCameraStarted = false;
      controller.stop();
      valueNotifier.value = true;
    }
  }
}
