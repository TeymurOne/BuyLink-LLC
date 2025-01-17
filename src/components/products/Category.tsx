import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import create from '../../images/action-icon/create.svg';
import { Link } from 'react-router-dom';
import { useFetchProducttypeQuery } from '../../features/product/apiSlice';
import Loader from '../../common/Loader';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterData, setLanguage } from '../../features/category/categorySlice';
import { RootState } from '../../app/api/store';
import { Search, Title } from '../ui/Title';

const Category = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const { language, filteredData } = useSelector(
    (store: RootState) => store.categorySlice,
  );

  const local = t('default.0');
  const { isSuccess, isLoading, data } = useFetchProducttypeQuery('');

  const [orderedData, setOrderedData] = useState([]);

  useEffect(() => {
    dispatch(setLanguage(local));
  }, [local]);

  useEffect(() => {
    if (isSuccess && data) {
      const initialData = data?.data || [];
      dispatch(setFilterData(initialData));
      setOrderedData(initialData); // Initialize the ordered data
    }
  }, [isSuccess, data]);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const newOrder = [...orderedData];
    const [movedItem] = newOrder.splice(result.source.index, 1);
    newOrder.splice(result.destination.index, 0, movedItem);
    setOrderedData(newOrder);
  };

  const filteredItems = orderedData.filter((item) =>
    item.name[language]
      ?.toLocaleLowerCase()
      .includes(search.trim().toLocaleLowerCase()),
  );

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (!isSuccess) return null;

  return (
    <>
      <Title>{t('product.7')}</Title>
      <Search onchange={(e: any) => setSearch(e.target.value)} />

      <div className="hidden rounded-sm shadow-default dark:border-strokedark dark:bg-boxdark md:block">
        <div className="max-w-full   rounded-lg border border-tborder">
          <div className="max-h-96 ">
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="categories">
                {(provided) => (
                  <table
                    className="w-full table-auto bg-white"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    <thead>
                      <tr className="bg-white text-left text-title-2xsm text-black dark:bg-meta-4 dark:text-white">
                        <th className="min-w-24.5 border-b border-r border-tborder px-4 py-2 font-medium dark:text-white sm:pl-0 md:pl-4 lg:pl-10">
                          {t('branch.2')}
                        </th>
                        <th className="min-w-24.5 border-b border-r border-tborder px-4 py-2 font-medium dark:text-white">
                          {t('branch.6')}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredItems?.map((item: any, index: number) => (
                        <Draggable
                          key={item.id.toString()}
                          draggableId={item.id.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <tr
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              className={`w-full border-0 hover:bg-tborderHover dark:bg-boxdark ${
                                index % 2 === 0 ? 'bg-[#F8F8F8]' : ''
                              }`}
                            >
                              <td
                                {...provided.dragHandleProps}
                                className="flex cursor-pointer items-center space-x-2 border-gray px-4 py-1 dark:border-strokedark dark:text-white xl:pl-4"
                              >
                                <button
                                  {...provided.dragHandleProps}
                                  className="bg-gray-200 hover:bg-gray-300 cursor-move rounded-md py-1 pr-3"
                                >
                                  <span className="text-xl">⇼</span>
                                </button>
                                <button className="w-full border-0 bg-transparent text-left focus:outline-none">
                                  {language && item.name[language]}
                                </button>
                              </td>

                              <td className="px-4 py-3 dark:border-strokedark">
                                <Link
                                  to={`/admin/product/create?categoryid=${item.id}`}
                                  className="mb-4 flex h-10 w-full max-w-35 items-center justify-center space-x-2 rounded-md bg-white text-xs font-medium shadow-sm dark:bg-boxdark dark:text-white dark:shadow-8 dark:hover:bg-zinc-900 sm:mb-0 md:mb-0 lg:mb-0"
                                >
                                  <img src={create} alt="Create icon" />
                                  <p>{t('product.1')}</p>
                                </Link>
                              </td>
                            </tr>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </tbody>
                  </table>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
