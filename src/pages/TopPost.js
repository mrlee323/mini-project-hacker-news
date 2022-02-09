import React from 'react';
import ScrollTopButton from '../components/common/ScrollTopButton';
import SortMode from '../components/common/SortMode';
import TopPostContainer from '../containers/TopPostContainer';
import PaginationButton from '../components/common/PaginationButton';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const TopPost = () => {
  const topPost = useSelector((state) => state.top.tops);
  const topUser = useSelector((state) => state.user.users);
  const [viewMode, setViewMode] = useState('list');
  const count = topPost && topPost.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortData, setSortData] = useState(topPost);
  const [resultSortType, setResultSortType] = useState('results');
  const [timeSortType, setTimeSortType] = useState('time');

  return (
    <div className="top-post">
      <SortMode
        style={{ paddingTop: 0 }}
        setViewMode={setViewMode}
        viewMode={viewMode}
        setResultSortType={setResultSortType}
        setTimeSortType={setTimeSortType}
        setSortData={setSortData}
        data={topPost}
        user={topUser}
      />
      <ScrollTopButton position={1000} />
      <TopPostContainer
        viewMode={viewMode}
        currentPage={currentPage}
        sortData={sortData}
        topPost={topPost}
        resultSortType={resultSortType}
        timeSortType={timeSortType}
      />
      <PaginationButton
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalCount={count}
      />
    </div>
  );
};

export default TopPost;
