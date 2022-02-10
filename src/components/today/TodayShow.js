import React, { useState } from 'react';
import TodayTitle from './TodayTitle';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { IconPointTime } from '../common/PointTime';
import UserInfo from '../common/UserInfo';
import { Comment } from '../common/Comment';
import random from '../../utils/random';
import TitleColor from '../common/TitleColor';
import UrlIcon from '../common/UrlIcon';
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
  .user {
    .user-icon {
      fill: #727272;
    }
    .id {
      color: #727272;
    }
  }
`;
const TodayShow = ({ todayShow }) => {
  const [randomArray, setRandomArray] = useState([1, 2, 3, 4, 5]);

  const onRandom = () => {
    setRandomArray(random(todayShow));
  };

  return (
    <TodayShowBlock>
      <TodayTitle link={'/show'} onRandom={onRandom}>
        Today's Show
      </TodayTitle>
      <div className="show">
        {todayShow.length >= 55 &&
          randomArray.map((index) => (
            <div className="list" key={index}>
              {todayShow[index].url && <UrlIcon url={todayShow[index].url} />}
              <div
                className="title"
                style={{
                  marginBottom: todayShow[index].url === undefined && '1rem',
                }}
              >
                <TitleColor
                  className="url-icon"
                  title={todayShow[index].title}
                  url={todayShow[index].url}
                />
              </div>
              <IconPointTime
                style={{ borderBottom: '1px solid #DFDFDF' }}
                score={todayShow[index].score}
                time={todayShow[index].time}
              />
              <User>
                <UserInfo id={todayShow[index].by} className="user" />
                <Comment
                  count={todayShow[index].descendants}
                  link={todayShow[index].id}
                />
              </User>
            </div>
          ))}
      </div>
    </TodayShowBlock>
  );
};

export default TodayShow;
