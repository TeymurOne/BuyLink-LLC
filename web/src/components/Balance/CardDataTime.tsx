import React from 'react';
import DateCard from './DateCard';
import { useTranslation } from 'react-i18next';

interface CardDataTimeProps {
  title: string;
  rate?: number;
}

const CardDataTime: React.FC<CardDataTimeProps> = ({ rate }) => {
  if (!rate) return;

  
  const { t } = useTranslation();

  const svgColor = rate > 0 ? '#39B554' : rate === 0 ? '#FF8D24' : '#FF0000';
  const desc =
    rate > 0
      ? t('balance.7')
      : rate == 0
        ? t('balance.6')
        : t('balance.5');

  const daytext =
    rate > 0
      ? t('balance.10')
      : rate === 0
        ? t('balance.8')
        : t('balance.9');
  return (
    <DateCard
      desc={desc}
      day={rate}
      daytext={daytext}
      svg={svgColor}
    />
  );
};

export default CardDataTime;
