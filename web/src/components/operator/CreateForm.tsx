import create from '../../images/action-icon/create.svg';

import { useFetchOperatorQuery } from '../../features/operator/apiSlice';
import Tbody from './Tbody';
import Loader from '../../common/Loader';
import { CreateBtn, TableLayout, Thead, Title } from '../ui/Title';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import TbodyResponsive from './TbodyResponsive.tsx';

export interface IitemApiOperator {
  branch: IitemBranch;
  email: string;
  id: number;
  name: string;
}

export interface IitemBranch {
  id: number;
  name: string;
  address: string;
  lat: string;
  lng: string;
}

const CreateForm = () => {
  let content;
  const { t } = useTranslation();

  const { isSuccess, isLoading, data } = useFetchOperatorQuery('');
  const items = isSuccess && Array.isArray(data?.data) ? data.data : [];
  if (isSuccess) {
    content = items.map((item: IitemApiOperator, index: number) => {
      return <Tbody item={item} key={index} />;
    });
  }

  const responsiveContent = useMemo(() => {
    if (isSuccess && data) {
      return items.map((item: IitemApiOperator, index: number) => (
        <TbodyResponsive key={index} item={item} />
      ));
    }
    return null;
  }, [items, isSuccess]);

  const titles = [
    t('operator.3'),
    t('operator.13'),
    t('operator.4'),
    t('operator.5'),
  ];

  return (
    <>
      <div className="flex flex-wrap justify-between">
        <div className="mb-10 flex w-60 flex-col">
          <Title>{t('operator.0')}</Title>
        </div>
        <CreateBtn img={create} link="operator/create">
          {t('operator.1')}
        </CreateBtn>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TableLayout>
            <Thead titles={titles} />
            <tbody>{content}</tbody>
          </TableLayout>
          <div className="my-8">{responsiveContent}</div>
        </>
      )}
    </>
  );
};

export default CreateForm;
