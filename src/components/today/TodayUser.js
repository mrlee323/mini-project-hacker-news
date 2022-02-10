import React from 'react';
import TodayTitle from './TodayTitle';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { ReactComponent as Star } from '../../assets/star.svg';
import { ReactComponent as Arrow } from '../../assets/arrow_right.svg';
import { ReactComponent as Joined } from '../../assets/joined.svg';
import { ReactComponent as Karma } from '../../assets/karma.svg';
import { NavLink } from 'react-router-dom';

const TodayUserBlock = styled(Responsive)`
  background: ${({ theme }) => theme.navColor};
  margin-bottom: 0.75rem;
  padding-bottom: 3.5rem;
  .user {
    display: flex;
    align-items: center;
    overflow-x: scroll;
    padding: 1.25rem;
    ::-webkit-scrollbar {
      display: none;
    }
    .list {
      flex-shrink: 0;
      width: 14.25rem;
      height: 9.1rem;
      margin-right: 1rem;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1),
        0px 3px 6px rgba(0, 0, 0, 0.05);
      border-radius: 0.7rem;
      background: ${({ theme }) => theme.postColor};
      border: ${({ theme }) => theme.topBoxBorderColor};
      padding: 1rem;
      box-sizing: border-box;
      .title {
        display: flex;
        align-items: center;
        margin-bottom: 0.625rem;
        p {
          color: #ed702d;
          font-weight: 500;
          font-size: 0.75rem;
        }
        .star {
          position: relative;
          width: 24px;
          height: 24px;
          margin-right: 0.25rem;
          span {
            position: absolute;
            left: 8px;
            top: 5px;
            color: #fff;
            font-weight: 600;
            font-size: 0.875rem;
          }
        }
      }
      .id {
        font-weight: 600;
        font-size: 1.25rem;
        margin-bottom: 1.4rem;
      }
      .info {
        display: flex;
        justify-content: space-between;
        .icon {
          display: flex;
          align-items: center;
          span {
            font-weight: 500;
            color: #727272;
            font-size: 0.75rem;
            margin-left: 0.3rem;
          }
          &:last-child {
            margin-top: 0.5rem;
          }
        }
        .arrow {
          background: rgba(76, 165, 196, 0.8);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          position: relative;
          svg {
            fill: #fff;
            position: absolute;
            left: 0;
          }
        }
      }
    }
  }
`;
const TodayUser = ({ todayUser }) => {
  return (
    <TodayUserBlock>
      <TodayTitle link={'/top/user'}>Today' User</TodayTitle>
      <div className="user">
        {todayUser.slice(0, 5).map((user, index) => (
          <div className="list" key={user.id}>
            <div className="title">
              <div className="star">
                <Star />
                <span>{index + 1}</span>
              </div>
              <p>Today's User</p>
            </div>
            <div className="id">{user.id}</div>
            <div className="info">
              <div>
                <div className="icon">
                  <Joined /> <span>{user.created}</span>
                </div>
                <div className="icon">
                  <Karma /> <span>{user.karma}</span>
                </div>
              </div>
              <div className="arrow">
                <NavLink to={`/user/${user.id}`}>
                  <Arrow />
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </TodayUserBlock>
  );
};

export default TodayUser;
