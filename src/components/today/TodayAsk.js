import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import random from '../../utils/random';
import Responsive from '../common/Responsive';
import { AskTitleColor } from '../common/TitleColor';
import TodayTitle from './TodayTitle';

const TodayAskBlock = styled(Responsive)`
  background: ${({ theme }) => theme.navColor};
  margin-bottom: 0.75rem;
  padding-bottom: 3.5rem;
  .ask {
    width: 21.9rem;
    height: 4.75rem;
    margin: 1.25rem auto;
    padding: 0.9rem;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
    border-radius: 0.7rem;
    background: ${({ theme }) => theme.postColor};
    border: ${({ theme }) => theme.topBoxBorderColor};
  }
`;

const TitleColorStyled = styled(AskTitleColor)`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const TodayAsk = ({ todayAsk }) => {
  const [randomArray, setRandomArray] = useState([1, 2, 3, 4, 5]);

  const onRandom = () => {
    setRandomArray(random(todayAsk));
  };

  return (
    <TodayAskBlock>
      <TodayTitle link={'/ask'} onRandom={onRandom}>
        Today's Ask
      </TodayTitle>
      {todayAsk &&
        todayAsk.length > 100 &&
        randomArray.map((index) => (
          <div className="ask" key={todayAsk[index].id}>
            {todayAsk[index].title && (
              <TitleColorStyled
                title={todayAsk[index].title}
                link={todayAsk[index].id}
              />
            )}
          </div>
        ))}
    </TodayAskBlock>
  );
};
export default TodayAsk;
