import React from 'react';
import styled from 'styled-components';
import TopUserTitle from '../components/TopUserTitle';
import TopUserContainer from '../containers/TopUserContainer';

const TopUserBlock = styled.div`
  background: ${({ theme }) => theme.navColor};
`;

const TopUser = () => {
  return (
    <TopUserBlock className="top-user">
      <TopUserTitle />
      <TopUserContainer />
    </TopUserBlock>
  );
};

export default TopUser;
