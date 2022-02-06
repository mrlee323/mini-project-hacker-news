import React from 'react';
import ScrollTopButton from '../components/common/ScrollTopButton';
import SortMode from '../components/common/SortMode';
import styled from 'styled-components';
import TopPostContainer from '../containers/TopPostContainer';
import PaginationButton from '../components/common/PaginationButton';
import { useState } from 'react';

const TopPost = () => {
  const [viewMode, setViewMode] = useState('list');

  return (
    <div className="top-post">
      <SortMode
        style={{ paddingTop: 0 }}
        setViewMode={setViewMode}
        viewMode={viewMode}
      />
      <ScrollTopButton position={2100} />
      <TopPostContainer viewMode={viewMode} />
      <PaginationButton />
    </div>
  );
};

export default TopPost;
