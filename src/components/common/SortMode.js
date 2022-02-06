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
  /* margin-bottom: 1.6rem; */
`;

const SortMode = ({ setViewMode, viewMode, ...rest }) => {
  return (
    <SortModeBlock {...rest}>
      <DropDown />
      <BoxMode setViewMode={setViewMode} viewMode={viewMode} />
    </SortModeBlock>
  );
};

export default SortMode;
