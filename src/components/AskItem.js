import React from 'react';
import styled from 'styled-components';
import { Comment } from './common/Comment';
import { PointTime } from './common/PointTime';
import { agoTime } from '../utils/time';
import UserInfo from './common/UserInfo';

const AskItemBlock = styled.div`
  background: ${({ theme }) => theme.navColor};
  .title {
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
    padding: 0.75rem 1.25rem 0.5rem;
    line-height: 1.4;
    span {
      color: var(--orange);
    }
  }
  .content {
    color: #727272;
    height: 3.5rem;
    font-size: 0.88rem;
    line-height: 1.3;
    padding: 0 1.25rem;
    margin-bottom: 0.8rem;
    box-sizing: border-box;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .times {
    display: flex;
    justify-content: space-between;
    padding: 0 1.25rem 0.8rem;
    border-bottom: 1px solid #a7a7a7;
    .time {
      color: #949494;
      font-size: 0.8rem;
      right: 0;
    }
  }
  .shadow {
    background: ${({ theme }) => theme.topbackColor};
    height: 0.75rem;
    box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.05);
  }
`;
const User = styled.div`
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  margin: 0.9rem 0;
  .user {
    flex: 1;
    display: flex;
    align-items: center;
  }
`;
const Point = styled(PointTime)`
  .time {
    display: none;
  }
`;
const AskItem = ({
  time,
  title = 'Ask HN: alfladlsms dhsmfeh qkatosek lfladlsms dhsmfeh qkatosek',
}) => {
  return (
    <>
      <AskItemBlock>
        {title.includes('Ask HN:') ? (
          <h3 className="title">
            <span> {title.slice(0, 7)} </span> {title.slice(7)}
          </h3>
        ) : (
          <h3 className="title">{title}</h3>
        )}
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus non
          elementum neque pulvinar consectetur nunc tellus nullam viverra. Nulla
          amet diam dignissim diam,Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lectus non elementum neque pulvinar consectetur nunc
          tellus nullam viverra. Nulla amet diam dignissim diam,
        </p>
        <div className="times">
          <div />
          <p className="time">{agoTime(time)}2 minutes ago</p>
        </div>
        <User>
          <div className="user">
            <UserInfo />
            <Point />
          </div>
          <Comment />
        </User>
        <div className="shadow" />
      </AskItemBlock>
      <AskItemBlock>
        {title.includes('Ask HN:') ? (
          <h3 className="title">
            <span> {title.slice(0, 7)} </span> {title.slice(7)}
          </h3>
        ) : (
          <h3 className="title">{title}</h3>
        )}
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus non
          elementum neque pulvinar consectetur nunc tellus nullam viverra. Nulla
          amet diam dignissim diam,Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lectus non elementum neque pulvinar consectetur nunc
          tellus nullam viverra. Nulla amet diam dignissim diam,
        </p>
        <div className="times">
          <div />
          <p className="time">{agoTime(time)}2 minutes ago</p>
        </div>
        <User>
          <div className="user">
            <UserInfo />
            <Point />
          </div>
          <Comment />
        </User>
        <div className="shadow" />
      </AskItemBlock>
    </>
  );
};

export default AskItem;
