import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import { ReactComponent as Banner } from '../assets/banner_new.svg';
import SortMode from '../components/common/SortMode';
import { useEffect, useState } from 'react';
import NewContainer from '../containers/NewContainer';
import PaginationButton from '../components/common/PaginationButton';
import { useDispatch, useSelector } from 'react-redux';
import { getNewUser } from '../modules/user';

const NewBlock = styled(Responsive)``;

const New = () => {
  const [viewMode, setViewMode] = useState('list');
  const news = useSelector((state) => state.news.news);
  const users = useSelector((state) => state.otherUser.otherUsers.newUsers);
  const count = news && news.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortData, setSortData] = useState(news);
  const [resultSortType, setResultSortType] = useState('results');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewUser());
  }, []);

  return (
    <section className="new">
      <NewBlock>
        <Banner style={{ width: '24.4rem' }} />
        <SortMode
          setViewMode={setViewMode}
          viewMode={viewMode}
          setResultSortType={setResultSortType}
          setSortData={setSortData}
          data={news}
          user={users}
        />
        <NewContainer
          viewMode={viewMode}
          currentPage={currentPage}
          sortData={sortData}
          data={news}
          resultSortType={resultSortType}
        />
        <PaginationButton
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalCount={count}
        />
      </NewBlock>
    </section>
  );
};

export default New;
