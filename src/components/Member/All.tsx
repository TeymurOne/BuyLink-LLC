import { useFetchMemberDataQuery } from '../../features/members/apiSlice';
import Tbody from './Tbody';
import { useTranslation } from 'react-i18next';
import TbodyResponsive from './TbodyResponsive';
import Pagination from '../../core/pagination/Pagination';
import { CreateBtn, Title, Thead, TableLayout, Search } from '../ui/Title';
import TableSkeleton from '../../skeleton/TableSkeleton';
import { useDispatch, useSelector } from 'react-redux';
import { pageLength } from '../../features/pagination/paginationSlice';
import { useEffect, useMemo } from 'react';
const CreateForm: React.FC = () => {
  const { t } = useTranslation();
  const { page } = useSelector((store: any) => store.PaginationSlice);
  const titles = [
    t('member.2'),
    t('member.3'),
    t('member.4'),
    t('member.5'),
    t('member.6'),
  ];
  const { data, isSuccess, isLoading } = useFetchMemberDataQuery(page);
  const dispatch = useDispatch();

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
  }, [data, isSuccess]);

  if (isLoading) return <TableSkeleton count="10" />;

  return (
    <>
      <div className="flex justify-between flex-wrap">
        <div className="flex flex-col w-60">
          <Title>{t('member.0')}</Title>
          <Search />
        </div>

        <CreateBtn link="member/create">{t('member.1')}</CreateBtn>
      </div>

      <TableLayout>
        <Thead titles={titles} />
        <tbody>{content}</tbody>
      </TableLayout>
      {responsiveContent}

      <Pagination />
    </>
  );
};

export default CreateForm;
