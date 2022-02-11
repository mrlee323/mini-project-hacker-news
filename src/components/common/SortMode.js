import React from 'react';
import styled from 'styled-components';
import DropDown from './DropDown';
import BoxMode from './BoxMode';

const SortModeBlock = styled.div`
  padding: 1.5rem 1.25rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SortMode = (props) => {
  const {
    setResultSortType,
    setTimeSortType,
    setSortData,
    data,
    user,
    setViewMode,
    viewMode,
    ...rest
  } = props;
  return (
    <SortModeBlock {...rest}>
      <DropDown
        setResultSortType={setResultSortType}
        setSortData={setSortData}
        data={data}
        user={user}
      />
      <BoxMode setViewMode={setViewMode} viewMode={viewMode} />
    </SortModeBlock>
  );
};

export default SortMode;
