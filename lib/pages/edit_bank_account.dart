import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '../generated/l10n.dart';
import '../utils/util.dart';

class EditBankAccount extends StatefulWidget {
  late bool editMode;
  EditBankAccount(this.editMode, {super.key});

  @override
  State<EditBankAccount> createState() => _EditBankAccountState();
}

class _EditBankAccountState extends State<EditBankAccount> {
  String? currency = 'usd';
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: CustomColors.white,
      appBar: AppBar(
        backgroundColor: CustomColors.white,
        foregroundColor: CustomColors.gray,
        shadowColor: Colors.transparent,
      ),
      bottomNavigationBar: SafeArea(
        child: Container(
          padding: EdgeInsets.all(18),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            mainAxisSize: MainAxisSize.min,
            children: [
              TextButton(
                onPressed: () => Navigator.of(context).pop(),
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(S.of(context).save),
                ),
                style: ButtonStyle(
                  backgroundColor:
                      MaterialStatePropertyAll<Color>(CustomColors.blue),
                  foregroundColor:
                      MaterialStatePropertyAll<Color>(Colors.white),
                ),
              ),
              SizedBox(
                height: 10,
              ),
              TextButton(
                onPressed: () => Navigator.of(context).pop(),
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(S.of(context).cancel),
                ),
                style: ButtonStyle(
                  backgroundColor:
                      MaterialStatePropertyAll<Color>(CustomColors.white),
                  foregroundColor:
                      MaterialStatePropertyAll<Color>(CustomColors.blue),
                  side: MaterialStatePropertyAll<BorderSide>(
                      BorderSide(color: CustomColors.blue)),
                ),
              ),
            ],
          ),
        ),
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(18),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              widget.editMode ? S.of(context).editBankAccount : S.of(context).addNewBankAccount,
              style: Theme.of(context).textTheme.headlineSmall,
            ),
            SizedBox(
              height: 20,
            ),
            Text(
              S.of(context).bankName,
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w500,
              ),
            ),
            SizedBox(
              height: 10,
            ),
            TextField(
              decoration: InputDecoration(
                floatingLabelBehavior: FloatingLabelBehavior.never,
                enabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                  borderSide: BorderSide(
                    color: CustomColors.gray.withOpacity(0.4),
                  ),
                ),
                hintText: S.of(context).bankOfAmerica,
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
              ),
            ),
            SizedBox(
              height: 20,
            ),
            Text(
              S.of(context).company,
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w500,
              ),
            ),
            SizedBox(
              height: 10,
            ),
            TextField(
              decoration: InputDecoration(
                floatingLabelBehavior: FloatingLabelBehavior.never,
                enabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                  borderSide: BorderSide(
                    color: CustomColors.gray.withOpacity(0.4),
                  ),
                ),
                hintText: S.of(context).loremIpsumIncLimited,
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
              ),
            ),
            SizedBox(
              height: 20,
            ),
            Text(
              S.of(context).accountNumber,
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w500,
              ),
            ),
            SizedBox(
              height: 10,
            ),
            TextField(
              decoration: InputDecoration(
                floatingLabelBehavior: FloatingLabelBehavior.never,
                enabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                  borderSide: BorderSide(
                    color: CustomColors.gray.withOpacity(0.4),
                  ),
                ),
                hintText: "194jfjfb299330i488585".toUpperCase(),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
              ),
            ),
            SizedBox(
              height: 20,
            ),
            Text(
              S.of(context).swift,
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w500,
              ),
            ),
            SizedBox(
              height: 10,
            ),
            TextField(
              decoration: InputDecoration(
                floatingLabelBehavior: FloatingLabelBehavior.never,
                enabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                  borderSide: BorderSide(
                    color: CustomColors.gray.withOpacity(0.4),
                  ),
                ),
                hintText: "BAM9877".toUpperCase(),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
              ),
            ),
            SizedBox(
              height: 20,
            ),
            Text(
              S.of(context).currency,
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w500,
              ),
            ),
            SizedBox(
              height: 10,
            ),
            Container(
              padding: EdgeInsets.symmetric(horizontal: 8, vertical: 6),
              decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(8),
                  border: Border.all(color: CustomColors.lightGray, width: 2)),
              child: DropdownButton<String>(
                  // dec
                  value: currency,
                  isExpanded: true,
                  underline: SizedBox.shrink(),
                  items: [
                    DropdownMenuItem(
                      value: 'usd',
                      child: Text(S.of(context).usDollar),
                    ),
                    DropdownMenuItem(
                      value: 'eur',
                      child: Text(S.of(context).euro),
                    ),
                  ],
                  onChanged: (val) {
                    setState(() {
                      currency = val;
                    });
                  }),
            ),
            SizedBox(
              height: 20,
            ),
            Text(
              'Beneficiary Bank',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w500,
              ),
            ),
            SizedBox(
              height: 10,
            ),
            TextField(
              decoration: InputDecoration(
                floatingLabelBehavior: FloatingLabelBehavior.never,
                enabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                  borderSide: BorderSide(
                    color: CustomColors.gray.withOpacity(0.4),
                  ),
                ),
                hintText: S.of(context).beneficiaryBank,
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
              ),
            ),
            SizedBox(
              height: 20,
            ),
            Text(
              S.of(context).address,
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w500,
              ),
            ),
            SizedBox(
              height: 10,
            ),
            TextField(
              decoration: InputDecoration(
                floatingLabelBehavior: FloatingLabelBehavior.never,
                enabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                  borderSide: BorderSide(
                    color: CustomColors.gray.withOpacity(0.4),
                  ),
                ),
                hintText: S.of(context).address,
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(8),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
