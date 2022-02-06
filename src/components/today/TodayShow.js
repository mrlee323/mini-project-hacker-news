import React from 'react';
import TodayTitle from './TodayTitle';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { ReactComponent as Github } from '../../assets/github.svg';
import { IconPointTime } from '../common/PointTime';
import UserInfo from '../common/UserInfo';
import { Comment } from '../common/Comment';

const TodayShowBlock = styled(Responsive)`
  background: ${({ theme }) => theme.navColor};
  margin-bottom: 0.75rem;
  padding-bottom: 3.5rem;
  .show {
    display: flex;
    align-items: center;
    overflow-x: scroll;
    padding: 1.25rem;
    ::-webkit-scrollbar {
      display: none;
    }
    .list {
      flex-shrink: 0;
      width: 12.5rem;
      height: 14rem;
      margin-right: 1rem;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1),
        0px 3px 6px rgba(0, 0, 0, 0.05);
      border-radius: 0.7rem;
      background: #eaf4f8;
      padding: 1rem 0.75rem;
      box-sizing: border-box;
      .github {
        path {
          &:first-child {
            fill: #f49664;
          }
          &:last-child {
            fill: #f5f5f5;
          }
        }
      }
      .title {
        height: 6.4rem;
        font-size: 0.9rem;
        color: #202020;
        font-weight: 600;
        line-height: 1.3;
        padding-top: 0.4rem;
        box-sizing: border-box;
      }
    }
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.7rem;
`;
const TodayShow = () => {
  return (
    <TodayShowBlock>
      <TodayTitle link={'/show'}>Today's Show</TodayTitle>
      <div className="show">
        <div className="list">
          <Github className="github" />
          <div className="title">
            Show HN: Mercury:Publish Jupyter Notebook as web app by adding YAML
            header
          </div>
          <IconPointTime style={{ borderBottom: '1px solid #DFDFDF' }} />
          <User>
            <UserInfo />
            <Comment />
          </User>
        </div>
        <div className="list">
          <Github className="github" />
          <div className="title">
            Show HN: Mercury:Publish Jupyter Notebook as web app by adding YAML
            header
          </div>
          <IconPointTime style={{ borderBottom: '1px solid #DFDFDF' }} />
          <User>
            <UserInfo />
            <Comment />
          </User>
        </div>
      </div>
    </TodayShowBlock>
  );
};

export default TodayShow;
