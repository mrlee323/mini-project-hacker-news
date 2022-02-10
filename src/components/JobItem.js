import React from 'react';
import styled from 'styled-components';
import { ListBox } from './common/Box';
import { PointTime } from './common/PointTime';
import urlSlice from '../utils/urlSlice';
import Favicon from './common/Favicon';
import { JobTitle } from './common/JobCategory';

const JobItemBlock = styled.div`
  padding: 0.75rem 0;
`;

const JobBox = styled(ListBox)`
  padding: 0.75rem;
  h3 {
    margin-bottom: 0.75rem;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .url {
      font-size: 0.75rem;
      color: #b7b7b7;
    }
  }
`;

const Time = styled(PointTime)`
  .time {
    color: #b7b7b7;
  }
  .score {
    display: none;
  }
`;

const ApplyBox = styled.div`
  padding: 0 0.5rem;
  box-sizing: border-box;
  height: 6.3rem;
  .wrap {
    background: ${({ theme }) => theme.navColor};
    display: flex;
    align-items: center;
    border-bottom: ${({ theme }) => theme.borderColor};
    box-sizing: border-box;
    height: 6.3rem;
    margin: auto;
    padding: 0.6rem 0.5rem;
    .info {
      flex: 1;
      margin: 0 0.75rem;
      .title {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 0.6rem;
      }
      .text {
        font-size: 0.85rem;
        font-weight: 400;
        margin-bottom: 0.3rem;
        line-height: 1.3;
      }
      .time {
        margin: 0;
      }
    }
  }
`;
const ApplyButton = styled.div`
  width: 3.9rem;
  height: 1.8rem;
  background: var(--orange);
  border-radius: 0.3rem;
  text-align: center;
  padding-top: 0.4rem;
  box-sizing: border-box;
  font-size: 0.85rem;
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.005rem;
`;
const JobItem = ({ job }) => {
  const { company, applyText } = JobTitle(job.title);
  return (
    <JobItemBlock>
      <ApplyBox>
        <div className="wrap">
          {job.url !== undefined ? (
            <Favicon url={job.url} className="favicon" />
          ) : (
            <img
              src="/favicon.ico"
              alt="defalutImage"
              style={{ width: '3.25rem', height: '3.25rem' }}
            />
          )}
          <div className="info">
            <div className="title">{company}</div>
            <div className="text">{applyText}</div>
            <Time className="time" time={job.time} />
          </div>
          <a
            href={job.url}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <ApplyButton>Apply</ApplyButton>
          </a>
        </div>
      </ApplyBox>
    </JobItemBlock>
  );
};

export default JobItem;
