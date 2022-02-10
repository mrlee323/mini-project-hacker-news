import React from 'react';
import styled, { css } from 'styled-components';
import NewItem from '../components/NewItem';

const NewContainerBlock = styled.div`
  padding: 0 1.25rem;

  ${(props) =>
    props.viewMode === 'card' &&
    css`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    `}
`;

const NewContainer = ({
  viewMode,
  currentPage,
  sortData,
  data,
  resultSortType,
}) => {
  const lastIndex = currentPage * 20;
  const firstIndex = lastIndex - 20;
  return (
    <NewContainerBlock viewMode={viewMode}>
      {data &&
        resultSortType !== 'karma' &&
        (sortData || data)
          .slice(firstIndex, lastIndex)
          .map((news) => (
            <NewItem viewMode={viewMode} news={news} key={news.id} />
          ))}
      {data &&
        resultSortType === 'karma' &&
        sortData.map((by) =>
          data
            .slice(firstIndex, lastIndex)
            .map(
              (news) =>
                by === news.by && (
                  <NewItem viewMode={viewMode} news={news} key={news.id} />
                ),
            ),
        )}
    </NewContainerBlock>
  );
};

export default NewContainer;
