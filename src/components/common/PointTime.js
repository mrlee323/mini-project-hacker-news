import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Point } from '../../assets/point.svg';
import { ReactComponent as Time } from '../../assets/time_small.svg';
import { Ago } from './Time';

const PointTimeBlock = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.3rem;
  font-size: 0.75rem;
  .score {
    color: #949494;
    margin-right: 0.4rem;
  }
  .time {
    color: #949494;
  }
`;
export const PointTime = ({ score, time, ...rest }) => {
  return (
    <PointTimeBlock {...rest}>
      <p className="score">{score} points</p>
      <p className="time">{Ago(time)}</p>
    </PointTimeBlock>
  );
};

const IconPointTimeBlock = styled.div`
  display: flex;
  align-items: center;
  color: #727272;
  font-size: 0.7rem;
  padding: 0.75rem 0;
  svg {
    margin-right: 0.1rem;
    circle {
      stroke: #727272;
    }
    path {
      fill: #727272;
    }
  }
  .score {
    margin-right: 0.3rem;
  }
`;

export const IconPointTime = ({ score, time, ...rest }) => {
  return (
    <IconPointTimeBlock {...rest}>
      <Point className="point" />
      <p className="score">{score}</p>
      <Time className="timeIcon" />
      <p className="time">{Ago(time)}</p>
    </IconPointTimeBlock>
  );
};
