import create from '../../images/action-icon/create.svg';
import { useFetchBranchAllQuery } from '../../features/branch/apiSlice';
import Tbody from './Tbody';

import { useTranslation } from 'react-i18next';

import TableSkeleton from '../../skeleton/TableSkeleton';
import Map from './Map';
import MapSkeleton from '../../skeleton/Map';
import { CreateBtn, TableLayout, Thead, Title } from '../ui/Title';
import TbodyResponsive from './TbodyResponsive';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageLength } from '../../features/pagination/paginationSlice';
import Pagination from '../../core/pagination/Pagination';

const CreateForm = () => {
  let content: any;

  let allCoordinates: { lat: number | string; lng: number | string }[] = []; // butun datanin kordinatlari
  const dispatch = useDispatch();
  const { page } = useSelector((store: any) => store.PaginationSlice);
  const { isSuccess, isLoading, data } = useFetchBranchAllQuery(page);

  if (isSuccess) {
    content = data.data?.map((item: any, index: number) => {
      allCoordinates.push({ lat: item?.lat, lng: item?.lng }); // butun datanin lat ve lng almaq ucun
      return <Tbody item={item} key={index} />;
    });
  }
  const responsiveContent = useMemo(() => {
    if (isSuccess && data) {
      return data.data.map((item: any, index: number) => (
        <TbodyResponsive key={index} item={item} />
      ));
    }
    return null;
  }, [data, isSuccess]);

  useEffect(() => {
    if (isSuccess && data) {
      const currentpage = Math.ceil(data.meta?.total / data.meta?.per_page);
      dispatch(pageLength(currentpage));
    }
  }, [isSuccess, data, dispatch]);

  const { t } = useTranslation();
  const titles = [
    t('branch.2'),
    t('branch.5'),
    t('branch.3'),
    t('branch.4'),
    t('branch.14'),
    t('branch.6'),
  ];

  return (
    <>
      <div className="flex flex-wrap justify-between">
        <div className="mb-10 flex w-60 flex-col">
          <Title>{t('branch.0')}</Title>
        </div>
        <CreateBtn img={create} link="branch/create">
          {t('branch.1')}
        </CreateBtn>
      </div>
      {isLoading ? (
        <>
          <MapSkeleton />
          <TableSkeleton />
        </>
      ) : (
        <>
          <div className="mb-8 h-auto w-full ">
            <Map allCoordinates={allCoordinates} />
            {/*  butun kordinatlari Map gonderib orda hamisini gostermek */}
          </div>

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
