import React from 'react';
import styled from 'styled-components';
import { ReactComponent as User } from '../../assets/user.svg';
const UserInfoBlock = styled.div`
  display: flex;
  align-items: center;
  div {
    font-size: 0.75rem;
    font-weight: 500;
    margin-left: 0.2rem;
    color: ${({ theme }) => theme.userIcon};
  }
  .user-icon {
    fill: ${({ theme }) => theme.userIcon};
  }
`;
const UserInfo = ({ id, ...rest }) => {
  return (
    <UserInfoBlock {...rest}>
      <User className="user-icon" />
      {id === undefined ? (
        <div className="id">undefined</div>
      ) : (
        <div className="id">{id}</div>
      )}
    </UserInfoBlock>
  );
};

export default UserInfo;
