import React from 'react';
import styled from 'styled-components';
import AskItem from '../components/AskItem';

const AskContainerBlock = styled.div``;
const AskContainer = () => {
  return (
    <AskContainerBlock>
      <AskItem />
    </AskContainerBlock>
  );
};

export default AskContainer;
