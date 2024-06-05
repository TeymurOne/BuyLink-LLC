import { useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { useFetchBranchAllQuery } from '../../features/branch/apiSlice';
import Loader from '../../common/Loader';
import { TableLayout, Thead, Title } from '../ui/Title';
import Tbody from './Tbody';

const Details = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { isSuccess, data } = useFetchBranchAllQuery('');
  let content;
  if (isSuccess && id) {
    content = data?.data.find((item: any) => item.id == id);
  }
  const titles = [t('branch.5'), t('branch.2'), t('branch.3'), t('branch.4')];

  return (
    <>
      {content ? (
        <>
          <Title>
            Branch
          </Title>

          <TableLayout>
            <Thead titles={titles} />
            {content && <Tbody item={content} />}
          </TableLayout>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Details;
