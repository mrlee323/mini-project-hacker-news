import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { Ago } from '../common/Time';
import TodayTitle from './TodayTitle';

const TodayTopBlock = styled(Responsive)`
  background: ${({ theme }) => theme.navColor};
  margin-bottom: 0.75rem;
  padding-bottom: 4.5rem;
  .top {
    width: 21.9rem;
    margin: 1.25rem auto;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
    border-radius: 0.7rem;
    background: ${({ theme }) => theme.postColor};
    border: ${({ theme }) => theme.topBoxBorderColor};
    .list {
      padding: 1rem 0.9rem;
      height: 6.1rem;
      box-sizing: border-box;
      display: flex;

      .rank {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--orange);
        width: 3.1rem;
      }
      .text {
        .title {
          width: 17rem;
          font-weight: 600;
          font-size: 1rem;
          line-height: 1.3;
          height: 2.7rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .info {
          margin-top: 0.6rem;
          font-size: 0.75rem;
          color: #727272;
          span + span {
            margin-left: 0.7rem;
          }
        }
      }
    }
  }
`;

const TodayTop = ({ top }) => {
  return (
    <TodayTopBlock>
      <TodayTitle link={'/top/post'}>Today's Top</TodayTitle>

      <div className="top">
        <div className="list">
          <div className="rank">1</div>
          <div className="text">
            <div className="title">title</div>
            <div className="info">
              <span>alfla6528</span>
              <span>100 point</span>
              <span>2 hours ago</span>
            </div>
          </div>
        </div>
        <div className="list">
          <div className="rank">1</div>
          <div className="text">
            <div className="title">title</div>
            <div className="info">
              <span>alfla6528</span>
              <span>100 point</span>
              <span>2 hours ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* <ul className="top">
        {top &&
          top.map((post, index) => (
            <li key={index}>
              <ul className="list">
                <li className="rank">{index + 1}</li>
                <li className="text">
                  <div className="title">{post.title}</div>
                  <div className="info">
                    <span>{post.by}</span>
                    <span>100 point</span>
                    <span>{Ago(post.time)}</span>
                  </div>
                </li>
              </ul>
            </li>
          ))}
      </ul> */}
    </TodayTopBlock>
  );
};

export default TodayTop;
