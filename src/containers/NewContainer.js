import React from 'react';
import styled from 'styled-components';
import NewItem from '../components/NewItem';

const NewContainerBlock = styled.div`
  padding: 0 1.25rem;
`;

const NewContainer = ({ viewMode }) => {
  return (
    <NewContainerBlock>
      <NewItem viewMode={viewMode} />
    </NewContainerBlock>
  );
};

export default NewContainer;
