import React from 'react';
import styled from 'styled-components';
import { ReactComponent as UserIcon } from '../../assets/user.svg';
import Responsive from '../common/Responsive';
import TodayTitle from './TodayTitle';
import { Ago } from '../common/Time';

const TodayNewBlock = styled(Responsive)`
  background: ${({ theme }) => theme.navColor};
  margin-bottom: 0.75rem;
  padding-bottom: 3.5rem;
  .new {
    width: 21.9rem;
    margin: 1.25rem auto;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
    border-radius: 0.7rem;
    background: ${({ theme }) => theme.postColor};
    border: ${({ theme }) => theme.topBoxBorderColor};
    padding: 0 0.9rem;
    box-sizing: border-box;

    .list {
      padding: 0.9rem 0;
      box-sizing: border-box;
      border-bottom: ${({ theme }) => theme.borderColor};
      .time {
        color: #4ca5c4;
        font-weight: 500;
        font-size: 0.6rem;
        width: 5.5rem;
        height: 2em;
        background: rgba(76, 165, 196, 0.15);
        border-radius: 0.7rem;
        padding: 0.3rem 0.5rem;
        box-sizing: border-box;
        margin-bottom: 0.5rem;
      }
      .title {
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.4;
        height: 2.7rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-bottom: 0.8rem;
      }
      .user {
        display: flex;
        align-items: center;
        color: var(--gray500);
        font-weight: 500;
        font-size: 0.75rem;
        padding-bottom: 0.8rem;
        svg {
          margin-right: 0.3rem;
        }
      }
    }
  }
`;

const TodayNew = ({ news }) => {
  return (
    <TodayNewBlock>
      <TodayTitle link={'/new'}>Today's New</TodayTitle>
      <div className="new">
        <div className="list">
          <div>
            <div className="time">1 minutes ago</div>
            <div className="title">오늘 안에는 정리끝낼수 있겠지</div>
            <div className="user">
              <UserIcon fill="#727272" />
              <div className="id">alfla6528</div>
            </div>
          </div>
        </div>
        <div className="list">
          <div>
            <div className="time">1 minutes ago</div>
            <div className="title">오늘 안에는 정리끝낼수 있겠지</div>
            <div className="user">
              <UserIcon fill="#727272" />
              <div className="id">alfla6528</div>
            </div>
          </div>
        </div>
      </div>
      {/* <ul className="new">
        {news &&
          news.map((item, index) => (
            <li key={index}>
              <ul className="list">
                <li className="time">{Ago(item.time)}</li>
                <li className="title">{item.title}</li>
                <li className="user">
                  <UserIcon fill="#727272" />
                  <div className="id">{item.by}</div>
                </li>
              </ul>
            </li>
          ))}
      </ul>
       */}
    </TodayNewBlock>
  );
};

export default TodayNew;
