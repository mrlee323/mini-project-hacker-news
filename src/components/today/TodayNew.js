import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as UserIcon } from '../../assets/user.svg';
import Responsive from '../common/Responsive';
import TodayTitle from './TodayTitle';
import { agoTime } from '../../utils/time';
import { PointTime } from '../common/PointTime';
import TitleColor from '../common/TitleColor';
import random from '../../utils/random';

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
      height: 7.8rem;
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
        margin-bottom: 0.3rem;
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

const Time = styled(PointTime)`
  margin: 0;
  .score {
    display: none;
  }
`;

const TodayNew = ({ todayNew }) => {
  const [randomArray, setRandomArray] = useState([1, 2, 3, 4, 5]);

  const onRandom = () => {
    setRandomArray(random(todayNew));
  };
  return (
    <TodayNewBlock>
      <TodayTitle link={'/new'} onRandom={onRandom}>
        Today's New
      </TodayTitle>
      <div className="new">
        {todayNew.length >= 500 &&
          randomArray.map((index) => (
            <div className="list" key={todayNew[index].id}>
              <div>
                <Time time={todayNew[index].time} />
                <div className="title">
                  {todayNew[index].title !== undefined && (
                    <TitleColor
                      title={todayNew[index].title}
                      url={todayNew[index].url}
                    />
                  )}
                </div>
                <div className="user">
                  <UserIcon fill="#727272" />
                  <div className="id">{todayNew[index].by}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </TodayNewBlock>
  );
};

export default TodayNew;
