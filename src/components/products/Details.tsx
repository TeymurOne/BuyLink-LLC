import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useFetchProducAllQuery } from '../../features/product/apiSlice';
import { TableLayout, Thead, Title } from '../ui/Title';
import Tbody from './Tbody';

const Details = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const titles = [
    t('product.2'),
    t('product.3'),
    t('product.5'),
    t('product.6'),
    t('product.7'),
  ];

  const { isSuccess, data } = useFetchProducAllQuery('');

  let content;
  if (isSuccess && id) {
    console.log(data, 'data');
    
    content = data?.data.find((item: any) => item.id == id);
  }
  console.log(content);

  return (
    <>
      {content && (
        <>
         
          <Title>{t('product.0')} {t('product.12')} {id}</Title>

          <TableLayout>
            <Thead titles={titles} />

            {content && <Tbody item={content} />}
          </TableLayout>
        </>
      )}
    </>
  );
};

export default Details;
