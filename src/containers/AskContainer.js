import React from 'react';
import styled from 'styled-components';
import AskItem from '../components/AskItem';

const AskContainerBlock = styled.div``;
const AskContainer = ({ currentPage, sortData, asks, resultSortType }) => {
  const lastIndex = currentPage * 20;
  const firstIndex = lastIndex - 20;

  return (
    <AskContainerBlock>
      {asks &&
        resultSortType !== 'karma' &&
        sortData
          .slice(firstIndex, lastIndex)
          .map((ask) => <AskItem ask={ask} key={ask.id} />)}
      {asks &&
        resultSortType === 'karma' &&
        sortData.map((by) =>
          asks
            .slice(firstIndex, lastIndex)
            .map((ask) => by === ask.by && <AskItem ask={ask} key={ask.id} />),
        )}
      <AskItem />
    </AskContainerBlock>
  );
};

export default AskContainer;
