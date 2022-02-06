import React from 'react';
import styled from 'styled-components';
import TopUserItem from '../components/TopUserItem';

const TopUserContainerBlock = styled.div``;

const TopUserContainer = () => {
  return (
    <TopUserContainerBlock>
      <TopUserItem />
    </TopUserContainerBlock>
  );
};

export default TopUserContainer;
