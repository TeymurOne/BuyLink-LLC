import create from '../../images/action-icon/create.svg';

import { useFetchOperatorQuery } from '../../features/operator/apiSlice';
import Tbody from './Tbody';
import Loader from '../../common/Loader';
import { CreateBtn, TableLayout, Thead, Title } from '../ui/Title';
import { useTranslation } from 'react-i18next';
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
    content = items?.map((item: IitemApiOperator, index: number) => {
      return <Tbody item={item} key={index} />;
    });
  }

  const titles = [
    t('branch.5'),
    t('branch.2'),
    t('branch.3'),
    t('branch.4'),
    t('branch.14'),
  ];

  return (
    <>
      <div className="flex justify-between  flex-wrap">
        <div className="flex flex-col w-60 mb-10">
          <Title>Operator</Title>
        </div>
        <CreateBtn img={create} link="operator/create">
          {t('branch.1')}
        </CreateBtn>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <TableLayout>
          <Thead titles={titles} />
          <tbody>{content}</tbody>
        </TableLayout>
      )}
    </>
  );
};

export default CreateForm;
