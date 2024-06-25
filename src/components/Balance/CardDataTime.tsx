import React from 'react';
import DateCard from './DateCard';
import { useTranslation } from 'react-i18next';

interface CardDataTimeProps {
  title: string;
  rate?: string | null;
}

const CardDataTime: React.FC<CardDataTimeProps> = ({ rate }) => {
  if (!rate) return;

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
  const { t } = useTranslation();
  console.log(rate, 'daty');

  const svgColor =
    parseInt(day) > 0 ? '#39B554' : parseInt(day) === 0 ? '#FF8D24' : '#FF0000';
  const desc =
    parseInt(day) > 0
      ? t('balance.7')
      : parseInt(day) == 0
        ? t('balance.6')
        : t('balance.5');

  const daytext =
    parseInt(day) > 0
      ? t('balance.10')
      : parseInt(day) === 0
        ? t('balance.8')
        : t('balance.9');
  return (
    <DateCard
      desc={desc}
      day={day}
      daytext={daytext}
      month={monthName}
      svg={svgColor}
    />
  );
};

export default CardDataTime;
