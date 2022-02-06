import styled from 'styled-components';
import Responsive from '../components/common/Responsive';
import { ReactComponent as Banner } from '../assets/banner_show.svg';
import SortMode from '../components/common/SortMode';
import ShowContainer from '../containers/ShowContainer';
import { useState } from 'react';
import PaginationButton from '../components/common/PaginationButton';

const ShowBlock = styled(Responsive)``;

const Show = () => {
  const [viewMode, setViewMode] = useState('list');

  return (
    <section className="show">
      <ShowBlock>
        <Banner style={{ width: '24.4rem' }} />
        <SortMode setViewMode={setViewMode} viewMode={viewMode} />
        <ShowContainer viewMode={viewMode} />
        <PaginationButton />
      </ShowBlock>
    </section>
  );
};

export default Show;
