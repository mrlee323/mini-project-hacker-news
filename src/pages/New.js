import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import { ReactComponent as Banner } from '../assets/banner_new.svg';
import SortMode from '../components/common/SortMode';
import { useState } from 'react';
import NewContainer from '../containers/NewContainer';
import PaginationButton from '../components/common/PaginationButton';

const NewBlock = styled(Responsive)``;

const New = () => {
  const [viewMode, setViewMode] = useState('list');

  return (
    <section className="new">
      <NewBlock>
        <Banner style={{ width: '24.4rem' }} />
        <SortMode setViewMode={setViewMode} viewMode={viewMode} />
        <NewContainer viewMode={viewMode} />
        <PaginationButton />
      </NewBlock>
    </section>
  );
};

export default New;
