import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

import '../../../../../../presentation/resourses/app_colors.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

import '../../../../../../presentation/resourses/app_colors.dart';

class DateSelector extends StatefulWidget {
  final DateTime? initialDate;
  final ValueChanged<DateTime?> onChanged;
  final String labelText;
  final bool? timeType;

  const DateSelector({
    Key? key,
    this.initialDate,
    required this.labelText,
    this.timeType = false,
    required this.onChanged,
  });

  @override
  State<DateSelector> createState() => _DateSelectorState();
}

class _DateSelectorState extends State<DateSelector> {
  late DateTime? _selectedDateTime = widget.initialDate;
  final DateFormat _dateFormatDelivery = DateFormat('dd-MM-yyyy');
  final DateFormat _dateFormatUser = DateFormat('dd-MM-yyyy');
  late final TextEditingController _textController = TextEditingController(
    text: _selectedDateTime == null
        ? ""
        : (widget.timeType == true
            ? _dateFormatUser.format(_selectedDateTime!)
            : _dateFormatDelivery.format(_selectedDateTime!)),
  );

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        GestureDetector(
          onTap: _showTimePicker,
          child: Container(
            padding: EdgeInsets.only(left: 10),
            height: 70,
            decoration: BoxDecoration(
              color: AppColors.appColor.withOpacity(0.1),
              borderRadius: BorderRadius.circular(5),
            ),
            child: TextField(
              style: TextStyle(color: Colors.black, fontWeight: FontWeight.w400),
              decoration: InputDecoration(
                  disabledBorder: InputBorder.none,
                  labelText: widget.labelText,
                  labelStyle: TextStyle(fontSize: 20, color: AppColors.appColor),
                  contentPadding: EdgeInsets.only(top: 10, left: 5)),
              controller: _textController,
              enabled: false,
            ),
          ),
        ),
        Positioned.fill(
          child: Align(
            alignment: Alignment.centerRight,
            child: IconButton(
              onPressed: () {
                setState(() {
                  _selectedDateTime = null;
                  widget.onChanged(null);
                  _textController.text = "";
                });
              },
              icon: Icon(Icons.clear),
            ),
          ),
        )
      ],
    );
  }

  Future<void> _showTimePicker() async {
    final DateTime? pickedDate = await showDatePicker(
      context: context,
      initialDate: _selectedDateTime ?? DateTime.now(),
      firstDate: DateTime(1900),
      lastDate: DateTime.now(),
    );

    if (pickedDate != null) {
      setState(() {
        _selectedDateTime = pickedDate;
        _textController.text =
            widget.timeType == true ? _dateFormatUser.format(pickedDate) : _dateFormatDelivery.format(pickedDate);
        widget.onChanged(pickedDate);
      });
    }
  }
}
