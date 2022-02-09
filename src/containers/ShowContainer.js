import React from 'react';
import styled from 'styled-components';
import ShowItem from '../components/ShowItem';
import { getStory } from '../services/API';

const ShowContainerBlock = styled.div`
  padding: 0 1.25rem;
`;

const ShowContainer = ({ viewMode }) => {
  return (
    <ShowContainerBlock>
      <ShowItem viewMode={viewMode} />
    </ShowContainerBlock>
  );
};

export default ShowContainer;
