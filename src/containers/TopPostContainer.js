import React from 'react';
import styled from 'styled-components';
import TopPostItem from '../components/TopPostItem';

const TopPostContainerBlock = styled.div`
  padding: 0 1.25rem;
`;

const TopPostContainer = ({ viewMode }) => {
  return (
    <TopPostContainerBlock>
      <TopPostItem viewMode={viewMode} />
    </TopPostContainerBlock>
  );
};

export default TopPostContainer;
