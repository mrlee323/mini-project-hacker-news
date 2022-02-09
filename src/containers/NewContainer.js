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
  timeSortType,
}) => {
  const lastIndex = currentPage * 20;
  const firstIndex = lastIndex - 20;
  return (
    <NewContainerBlock viewMode={viewMode}>
      {data &&
        resultSortType !== 'karma' &&
        timeSortType === 'time' &&
        (sortData || data)
          .slice(firstIndex, lastIndex)
          .map((news) => (
            <NewItem viewMode={viewMode} news={news} key={news.id} />
          ))}
      {data &&
        resultSortType === 'karma' &&
        sortData.map((by) =>
          data.map(
            (news) =>
              by === news.by && (
                <NewItem viewMode={viewMode} news={news} key={news.id} />
              ),
          ),
        )}
      {sortData && timeSortType !== 'time' && sortData.length !== 1
        ? sortData.map((day) =>
            day.length !== 1 ? (
              day.map((news) => (
                <NewItem viewMode={viewMode} news={news} key={news.id} />
              ))
            ) : (
              <NewItem viewMode={viewMode} news={day[0]} key={day[0].id} />
            ),
          )
        : sortData.length === 1 &&
          sortData[0].map((news) => (
            <NewItem viewMode={viewMode} news={news} key={news.id} />
          ))}
    </NewContainerBlock>
  );
};

export default NewContainer;
