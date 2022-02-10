import styled, { css } from 'styled-components';
import TopPostItem from '../components/TopPostItem';

const TopPostContainerBlock = styled.div`
  padding: 0 1.25rem;

  ${(props) =>
    props.viewMode === 'card' &&
    css`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    `}
`;

const TopPostContainer = ({
  viewMode,
  currentPage,
  topPost,
  sortData,
  resultSortType,
}) => {
  const lastIndex = currentPage * 20;
  const firstIndex = lastIndex - 20;
  return (
    <TopPostContainerBlock viewMode={viewMode}>
      {topPost &&
        resultSortType !== 'karma' &&
        sortData
          .slice(firstIndex, lastIndex)
          .map((post) => (
            <TopPostItem viewMode={viewMode} post={post} key={post.id} />
          ))}
      {topPost &&
        resultSortType === 'karma' &&
        sortData.map((by) =>
          topPost.map(
            (post) =>
              by === post.by && (
                <TopPostItem viewMode={viewMode} post={post} key={post.id} />
              ),
          ),
        )}
    </TopPostContainerBlock>
  );
};

export default TopPostContainer;
