import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import { ReactComponent as Banner } from '../assets/banner_ask.svg';
import DropDown from '../components/common/DropDown';
import AskContainer from '../containers/AskContainer';
import PaginationButton from '../components/common/PaginationButton';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAskUser } from '../modules/user';

const AskBlock = styled(Responsive)``;

const StyledDropDown = styled(DropDown)`
  padding: 1.5rem 1.25rem;
  box-sizing: border-box;
`;

const Ask = () => {
  const asks = useSelector((state) => state.ask.asks);
  const user = useSelector((state) => state.otherUser.otherUsers.askUsers);
  const count = asks && asks.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortData, setSortData] = useState(asks);
  const [resultSortType, setResultSortType] = useState('results');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAskUser());
  }, []);

  return (
    <section className="ask">
      <AskBlock>
        <Banner style={{ width: '24.4rem' }} />
        <StyledDropDown
          setResultSortType={setResultSortType}
          setSortData={setSortData}
          data={asks}
          user={user}
        />
        <AskContainer
          currentPage={currentPage}
          sortData={sortData}
          asks={asks}
          resultSortType={resultSortType}
        />
        <PaginationButton
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalCount={count}
        />
      </AskBlock>
    </section>
  );
};

export default Ask;
