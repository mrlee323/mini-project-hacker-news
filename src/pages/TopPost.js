import React from 'react';
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

  return (
    <div className="top-post">
      <SortMode
        style={{ paddingTop: 0 }}
        setViewMode={setViewMode}
        viewMode={viewMode}
        setResultSortType={setResultSortType}
        setSortData={setSortData}
        data={topPost}
        user={topUser}
      />

      <TopPostContainer
        viewMode={viewMode}
        currentPage={currentPage}
        sortData={sortData}
        topPost={topPost}
        resultSortType={resultSortType}
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
