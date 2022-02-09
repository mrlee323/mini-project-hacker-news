import React from 'react';
import styled from 'styled-components';
import { ListBox } from '../components/common/Box';

const ComentBox = styled(ListBox)`
  letter-spacing: 0.01rem;
  h3 {
    line-height: 1.3;
    font-weight: 500;
  }
  a {
    color: #b7b7b7;
    font-size: 0.75rem;
  }
`;

const UserFavorite = () => {
  return (
    <ComentBox>
      <h3>
        <span></span>
      </h3>
    </ComentBox>
  );
};

export default UserFavorite;
