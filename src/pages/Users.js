import React from 'react';
import styled from 'styled-components';
import { ListBox } from '../components/common/Box';
import Responsive from '../components/common/Responsive';
import { ReactComponent as Joined } from '../assets/joined.svg';
import { ReactComponent as Karma } from '../assets/karma.svg';
import { Ago } from '../components/common/Time';

const UsersBlock = styled(Responsive)`
  padding: 1.9rem 0;
  box-sizing: border-box;
`;

const UserBox = styled(ListBox)`
  .info {
    margin-top: 1rem;
    display: flex;
    font-size: 0.75rem;
    color: ${({ theme }) => theme.textColor};
    align-items: center;
    svg {
      margin-right: 0.3rem;
    }
    span {
      margin-right: 0.5rem;
    }
  }
`;

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

const Users = ({ user = { id: 'norvig', items: 1678930422 } }) => {
  return (
    <UsersBlock>
      <UserBox>
        <h2>{user.id}</h2>
        <div className="info">
          <Joined />
          <span>{Ago(user.times)}</span>
          <Karma />
          <span>{user.karma}</span>{' '}
        </div>
      </UserBox>
      <ComentBox>
        <h3>
          <span style={{ color: '#ED702D' }}>Show HN:</span> Bulk convert //
          Images online without sending to server //{' '}
        </h3>
        <a href="http://">webutils.app</a>
      </ComentBox>
    </UsersBlock>
  );
};

export default Users;
