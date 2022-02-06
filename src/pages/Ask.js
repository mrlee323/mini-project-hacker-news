import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import { ReactComponent as Banner } from '../assets/banner_ask.svg';
import DropDown from '../components/common/DropDown';
import AskContainer from '../containers/AskContainer';
import PaginationButton from '../components/common/PaginationButton';

const AskBlock = styled(Responsive)``;

const StyledDropDown = styled(DropDown)`
  padding: 1.5rem 1.25rem;
  box-sizing: border-box;
`;

const Ask = () => {
  return (
    <section className="ask">
      <AskBlock>
        <Banner style={{ width: '24.4rem' }} />
        <StyledDropDown />
        <AskContainer />
        <PaginationButton />
      </AskBlock>
    </section>
  );
};

export default Ask;
