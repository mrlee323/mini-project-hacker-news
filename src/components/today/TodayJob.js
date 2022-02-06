import React from 'react';
import TodayTitle from './TodayTitle';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { IconPointTime } from '../common/PointTime';
import Url from '../common/Url';
import { JobCategory } from '../common/JobCategory';

const TodayJobBlock = styled(Responsive)`
  background: ${({ theme }) => theme.navColor};
  padding-bottom: 3.5rem;
  .job {
    display: flex;
    align-items: center;
    overflow-x: scroll;
    padding: 1.25rem;
    ::-webkit-scrollbar {
      display: none;
    }
    .list {
      flex-shrink: 0;
      width: 13.75rem;
      height: 10.9rem;
      margin-right: 1rem;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1),
        0px 3px 6px rgba(0, 0, 0, 0.05);
      border-radius: 0.7rem;
      background: #eaf4f8;
      padding: 1rem 0.75rem;
      box-sizing: border-box;
      .title {
        margin-top: 0.625rem;
        font-size: 0.9rem;
        font-weight: 600;
        line-height: 1.3;
        height: 3.75rem;
        margin-bottom: 0.2rem;
        color: #202020;
      }
      .url {
        font-size: 0.75rem;
        color: #727272;
        margin-bottom: 0.75rem;
      }
    }
  }
`;

const Time = styled(IconPointTime)`
  .score {
    display: none;
  }
  .point {
    display: none;
  }
`;
const TodayJob = ({
  url = 'https://www.paperspace.com/careers#open-positions',
  title = 'Bitmovin (YC S15) Is Hiring Software Engineers in Support in EMEA',
}) => {
  return (
    <TodayJobBlock>
      <TodayTitle link={'/job'}>Today's Job</TodayTitle>
      <div className="job">
        <div className="list">
          <JobCategory title={title} />
          <div className="title">
            Reverie Labs (YC W18) is hiring senior software engineers to tackle
            cancer
          </div>
          {url && <div className="url">{Url(url)}</div>}
          <Time />
        </div>
        <div className="list">
          <JobCategory title={title} />
          <div className="title">
            Reverie Labs (YC W18) is hiring senior software engineers to tackle
            cancer
          </div>
          <div className="url">replit.com</div>
          <Time />
        </div>
        <div className="list">
          <JobCategory title={title} />
          <div className="title">
            Reverie Labs (YC W18) is hiring senior software engineers to tackle
            cancer
          </div>
          <div className="url">replit.com</div>
          <Time />
        </div>
      </div>
    </TodayJobBlock>
  );
};

export default TodayJob;