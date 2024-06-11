import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import create from '../../images/action-icon/create.svg';
import Pagination from '../../core/pagination/Pagination';
import Tbody from './Tbody';
import { useFetchProducPaginationQuery } from '../../features/product/apiSlice';
import { pageLength } from '../../features/pagination/paginationSlice';
import { RootState } from '../../app/api/store';
import TableSkeleton from '../../skeleton/TableSkeleton';
import TbodyResponsive from './TbodyResponsive';
import { CreateBtn, Search, TableLayout, Thead, Title } from '../ui/Title';

const CreateForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { page } = useSelector((store: RootState) => store.PaginationSlice);
  const { isSuccess, isLoading, data } = useFetchProducPaginationQuery(page);

  useEffect(() => {
    if (isSuccess && data) {
      const currentpage = Math.ceil(data.meta.total / data.meta.per_page);
      dispatch(pageLength(currentpage));
    }
  }, [isSuccess, data, dispatch]);

  const content =
    isSuccess &&
    data &&
    data.data.map((item: any, index: number) => (
      <Tbody item={item} key={index} />
    ));

  const responsiveContent = useMemo(() => {
    if (isSuccess && data) {
      return data.data.map((item: any, index: number) => (
        <TbodyResponsive key={index} item={item} />
      ));
    }
    return null;
  }, [isSuccess, data]);
  const titles = [
    t('product.2'),
    t('product.3'),

    t('product.5'),
    t('product.6'),
    t('product.7'),
    t('product.8'),
  ];
  return (
    <>
      <div className="flex justify-between flex-wrap">
        <div className="flex flex-col w-60">
          <Title>{t('product.0')}</Title>
          <Search />
        </div>

        <CreateBtn img={create} link="product/:id">
          {t('product.1')}
        </CreateBtn>
      </div>

      {isLoading ? (
        <TableSkeleton count="10" height="40" />
      ) : (
        <>
          <TableLayout>
            <Thead titles={titles} />
            <tbody>{content}</tbody>
          </TableLayout>

          {responsiveContent}

          <Pagination />
        </>
      )}
    </>
  );
};

export default CreateForm;
