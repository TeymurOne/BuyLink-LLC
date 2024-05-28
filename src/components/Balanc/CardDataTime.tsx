import { ReactNode } from 'react';

interface CardDataTimeProps {
  children: ReactNode;
  title: string;
  rate?: string | null; // rate değeri null olabilir
}

import React from 'react';
import DateCard from './DateCard';

const CardDataTime: React.FC<CardDataTimeProps> = ({ rate }) => {
  if (!rate) {
    return (
  <DateCard desc="No date time" svg="#FF0000"/>
    );
  }

  const [date] = rate.split(' ');
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const [month, day] = date.split('-');
  const monthName = months[parseInt(month) - 1];

  const svgColor = day > '0' ? '#39B554' : day == '0' ? '#FF8D24' : '#FF0000';
  const desc =
    day > '0'
      ? 'In case of late payment, there will be penalties'
      : day == '0'
      ? 'Penalties start to charge (0.1% of total amount)'
      : 'Penalties start to charge (0.1% of total amount)';

  return (
  
    <DateCard desc={desc} day={day} month={monthName} svg={svgColor}/>
  );
};

export default CardDataTime;
