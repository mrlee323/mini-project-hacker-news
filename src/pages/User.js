import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ListBox } from '../components/common/Box';
import Responsive from '../components/common/Responsive';
import { ReactComponent as Joined } from '../assets/joined.svg';
import { ReactComponent as Karma } from '../assets/karma.svg';
import { agoTime } from '../utils/time';
import replaceText from '../utils/replaceText';
import { Outlet, useParams } from 'react-router';
import { UserCategory } from '../components/common/Category';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoData } from '../modules/userInfo';
import UserSubmission, { Submission } from './UserSubmission';
import { useLocation } from 'react-router';
import { useInView } from 'react-intersection-observer';

const UsersBlock = styled(Responsive)`
  padding: 1.9rem 0;
  box-sizing: border-box;
  position: relative;
  .ref {
    width: 24.4rem;
    height: 41rem;
    border: 1px solid red;
    position: absolute;
    top: 14rem;
    left: 0;
  }
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
  .about {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-top: 1.5rem;
    word-break: break-all;
  }
`;

const User = () => {
  const user = useSelector((state) => state.userInfo.userInfos.user);
  const story = useSelector((state) => state.userInfo.userInfos.type.story);
  const dispatch = useDispatch();
  const params = useParams();
  const userId = params.username;
  const { pathname } = useLocation();
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(5);

  useEffect(() => {
    dispatch(getUserInfoData(userId, page, count));
  }, [dispatch]);

  return (
    <>
      <UsersBlock className="inView">
        {user !== undefined && (
          <UserBox>
            <h2>{user.id}</h2>
            <div className="info">
              <Joined />
              <span>{agoTime(user.created)}</span>
              <Karma />
              <span>{user.karma}</span>
            </div>
            <div className="about">{replaceText(user.about)}</div>
          </UserBox>
        )}
        <UserCategory />
        {pathname.includes('comment') ||
          pathname.includes('favorite') ||
          (pathname.includes('submission') === false && (
            <Submission story={story} />
          ))}
        <Outlet />
      </UsersBlock>
    </>
  );
};

export default User;
