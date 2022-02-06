import React from 'react';
import styled from 'styled-components';
import { ReactComponent as User } from '../../assets/user.svg';
const UserInfoBlock = styled.div`
  display: flex;
  align-items: center;
  div {
    font-size: 0.75rem;
    font-weight: 500;
    color: #727272;
    margin-left: 0.2rem;
  }
`;
const UserInfo = ({ id, ...rest }) => {
  return (
    <UserInfoBlock {...rest}>
      <User fill="#727272" />
      <div className="id">{id}</div>
    </UserInfoBlock>
  );
};

export default UserInfo;
