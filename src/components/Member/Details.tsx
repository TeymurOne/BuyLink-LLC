import {  useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFetchMemberDataQuery } from '../../features/members/apiSlice';
import { FaArrowLeft } from 'react-icons/fa6';
import { TableLayout, Thead, Title } from '../ui/Title';
import Tbody from './Tbody';

const Details = () => {
  const { id } = useParams();
  const { data, isSuccess } = useFetchMemberDataQuery();
  const { t } = useTranslation();

  let member;

  if (isSuccess && id) {
    member = data?.data.find((item: any) => item.id == id);
  }
  const titles = [t('member.2'), t('member.3'), t('member.4'), t('member.5')];

  return (
    <>
      <Title>
        Member <FaArrowLeft onClick={() => window.history.back()} />{' '}
      </Title>

      <TableLayout>
        <Thead titles={titles} />
        {member && <Tbody item={member} />}
      </TableLayout>
    </>
  );
};

export default Details;
