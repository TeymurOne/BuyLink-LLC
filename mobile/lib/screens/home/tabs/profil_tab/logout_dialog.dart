import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../../../../../generated/l10n.dart';
import '../../../../../presentation/resourses/app_colors.dart';

class LogoutDialog extends StatelessWidget {
  final String title;
  final VoidCallback postDelete;

  const LogoutDialog({Key? key, required this.title, required this.postDelete}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SimpleDialog(
      elevation: 10,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.all(Radius.circular(22.0))),
      contentPadding: EdgeInsets.zero,
      children: [
        Container(
            decoration: const BoxDecoration(
                borderRadius: BorderRadius.all(Radius.circular(22.0)), color: Colors.white),
            child: Padding(
              padding: EdgeInsets.only(
                top: MediaQuery.of(context).padding.top * 6,
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const SizedBox(
                    height: 25,
                  ),
                  Padding(
                    padding: const EdgeInsets.all(15.0),
                    child: Center(
                      child: Text(
                        title,
                        style: TextStyle(fontSize: 18, fontWeight: FontWeight.w500),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(bottom: 10, top: 10),
                    child: Row(
                      children: [
                        const Spacer(),
                        GestureDetector(
                          onTap: () {
                            Navigator.pop(context);
                          },
                          child: Container(
                            width: MediaQuery.of(context).size.width * 0.26,
                            height: 50,
                            decoration: BoxDecoration(
                                color: Colors.grey.withOpacity(0.2),
                                borderRadius: BorderRadius.circular(30)),
                            child: Center(
                                child: Text(
                              S.of(context).no,
                              style: TextStyle(color: Colors.black, fontWeight: FontWeight.w600),
                            )),
                          ),
                        ),
                        Spacer(),
                        GestureDetector(
                          onTap: () {
                            postDelete();
                            Navigator.pop(context);
                          },
                          child: Container(
                            width: MediaQuery.of(context).size.width * 0.26,
                            height: 50,
                            decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(30),
                                color: AppColors.appColor,
                                gradient: LinearGradient(
                                  begin: Alignment.centerRight,
                                  end: Alignment.centerLeft,
                                  colors: [AppColors.appColor, AppColors.textColor],
                                )),
                            child: Center(
                                child: Text(
                              S.of(context).yes,
                              style: TextStyle(color: Colors.white, fontWeight: FontWeight.w600),
                            )),
                          ),
                        ),
                        Spacer(),
                      ],
                    ),
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                ],
              ),
            )),
      ],
    );
  }
}
