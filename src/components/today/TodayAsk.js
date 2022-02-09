import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import TitleColor from '../common/TitleColor';
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

const TodayAsk = () => {
  return (
    <TodayAskBlock>
      {/* <TodayTitle link={'/ask'}>Today's Ask</TodayTitle>
      <div className="ask">
        <TitleColor title={title} />
      </div>
      <div className="ask">
        <TitleColor title={title} />
      </div> */}
    </TodayAskBlock>
  );
};
export default TodayAsk;
