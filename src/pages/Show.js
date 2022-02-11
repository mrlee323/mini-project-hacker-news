import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import { ReactComponent as Banner } from '../assets/banner_show.svg';
import SortMode from '../components/common/SortMode';
import ShowContainer from '../containers/ShowContainer';
import { useState } from 'react';
import PaginationButton from '../components/common/PaginationButton';
import { useSelector } from 'react-redux';

const ShowBlock = styled(Responsive)``;

const Show = () => {
  const shows = useSelector((state) => state.show.shows);
  const user = useSelector((state) => state.otherUser.otherUsers.showUsers);
  const [viewMode, setViewMode] = useState('list');
  const count = shows && shows.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortData, setSortData] = useState(shows);
  const [resultSortType, setResultSortType] = useState('results');

  return (
    <section className="show">
      <ShowBlock>
        <Banner style={{ width: '24.4rem' }} />
        <SortMode
          setViewMode={setViewMode}
          viewMode={viewMode}
          setResultSortType={setResultSortType}
          setSortData={setSortData}
          data={shows}
          user={user}
        />
        <ShowContainer
          viewMode={viewMode}
          currentPage={currentPage}
          sortData={sortData}
          shows={shows}
          resultSortType={resultSortType}
        />
        <PaginationButton
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalCount={count}
        />
      </ShowBlock>
    </section>
  );
};

export default Show;
