import React from 'react';
import styled, { css } from 'styled-components';
import ShowItem from '../components/ShowItem';
import { karmaDaySort } from '../utils/sort';

const ShowContainerBlock = styled.div`
  padding: 0 1.25rem;

  ${(props) =>
    props.viewMode === 'card' &&
    css`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    `}
`;

const ShowContainer = ({
  viewMode,
  currentPage,
  shows,
  sortData,
  resultSortType,
}) => {
  const lastIndex = currentPage * 20;
  const firstIndex = lastIndex - 20;
  return (
    <ShowContainerBlock viewMode={viewMode}>
      {shows &&
        resultSortType !== 'karma' &&
        sortData
          .slice(firstIndex, lastIndex)
          .map((show) => (
            <ShowItem viewMode={viewMode} show={show} key={show.id} />
          ))}
      {shows &&
        resultSortType === 'karma' &&
        sortData.map((by) =>
          shows
            .slice(firstIndex, lastIndex)
            .map(
              (show) =>
                by === show.by && (
                  <ShowItem viewMode={viewMode} show={show} key={show.id} />
                ),
            ),
        )}
    </ShowContainerBlock>
  );
};

export default ShowContainer;
