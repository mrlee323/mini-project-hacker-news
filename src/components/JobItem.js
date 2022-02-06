import React from 'react';
import styled from 'styled-components';
import { ListBox } from './common/Box';
import { PointTime } from './common/PointTime';
import Url from './common/Url';
import Favicon from './common/Favicon';
import { JobTitle } from './common/JobCategory';
import { ApplyBanner, ApplyBanner2 } from './ApplyBanner';
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
const JobItem = ({
  url = 'https://www.paperspace.com/careers#open-positions',
  title = 'Multiverse (YC W20) Is Hiring an Eng Manager to B',
}) => {
  const arr = [
    {
      url: 'https://www.paperspace.com/careers#open-positions',
      title:
        'Multiverse (YC W20) Is Hiring an Eng Manager to Build the Future of Tabletop RPGs',
    },
    {
      url: 'https://www.paperspace.com/careers#open-positions',
      title:
        'GiveCampus (YC S15) hiring Sr engineers to increase accessibility to education',
    },
    {
      url: 'https://jobs.lever.co/givecampus/44af3199-546a-404a-95fd-a097ef37e915',
      title:
        'Multiverse (YC W20) Is Hiring an Eng Manager to Build the Future of Tabletop RPGs',
    },
    {
      url: 'https://www.ycombinator.com/companies/legion-health/jobs/Vc1e3ii-clinical-operations-lead',
      title:
        'DevCycle (YC W14) is rebuilding feature flags from the ground up – come join us',
    },
    {
      url: 'https://www.paperspace.com/careers#open-positions',
      title:
        'Multiverse (YC W20) Is Hiring an Eng Manager to Build the Future of Tabletop RPGs',
    },
    {
      url: 'https://www.paperspace.com/careers#open-positions',
      title:
        'GiveCampus (YC S15) hiring Sr engineers to increase accessibility to education',
    },
    {
      url: 'https://jobs.lever.co/givecampus/44af3199-546a-404a-95fd-a097ef37e915',
      title:
        'Multiverse (YC W20) Is Hiring an Eng Manager to Build the Future of Tabletop RPGs',
    },
    {
      url: 'https://www.ycombinator.com/companies/legion-health/jobs/Vc1e3ii-clinical-operations-lead',
      title:
        'DevCycle (YC W14) is rebuilding feature flags from the ground up – come join us',
    },
    {
      url: 'https://www.paperspace.com/careers#open-positions',
      title:
        'GiveCampus (YC S15) hiring Sr engineers to increase accessibility to education',
    },
    {
      url: 'https://jobs.lever.co/givecampus/44af3199-546a-404a-95fd-a097ef37e915',
      title:
        'Multiverse (YC W20) Is Hiring an Eng Manager to Build the Future of Tabletop RPGs',
    },
    {
      url: 'https://www.ycombinator.com/companies/legion-health/jobs/Vc1e3ii-clinical-operations-lead',
      title:
        'DevCycle (YC W14) is rebuilding feature flags from the ground up – come join us',
    },
    {
      url: 'https://www.paperspace.com/careers#open-positions',
      title:
        'GiveCampus (YC S15) hiring Sr engineers to increase accessibility to education',
    },
    {
      url: 'https://jobs.lever.co/givecampus/44af3199-546a-404a-95fd-a097ef37e915',
      title:
        'Multiverse (YC W20) Is Hiring an Eng Manager to Build the Future of Tabletop RPGs',
    },
    {
      url: 'https://www.ycombinator.com/companies/legion-health/jobs/Vc1e3ii-clinical-operations-lead',
      title:
        'DevCycle (YC W14) is rebuilding feature flags from the ground up – come join us',
    },
    {
      url: 'https://www.paperspace.com/careers#open-positions',
      title:
        'GiveCampus (YC S15) hiring Sr engineers to increase accessibility to education',
    },
    {
      url: 'https://jobs.lever.co/givecampus/44af3199-546a-404a-95fd-a097ef37e915',
      title:
        'Multiverse (YC W20) Is Hiring an Eng Manager to Build the Future of Tabletop RPGs',
    },
    {
      url: 'https://www.ycombinator.com/companies/legion-health/jobs/Vc1e3ii-clinical-operations-lead',
      title:
        'DevCycle (YC W14) is rebuilding feature flags from the ground up – come join us',
    },
  ];
  const { company, applyText } = JobTitle(title);
  return (
    <JobItemBlock>
      {arr.slice(0, 5).map((item, index) => (
        <JobBox key={index}>
          <h3 className="title">{item.title}</h3>
          <div className="info">
            {url && <div className="url">{Url(item.url)}</div>}
            <Time />
          </div>
        </JobBox>
      ))}
      <ApplyBanner />
      {arr.length > 5 &&
        arr.slice(6, 14).map((item, index) => (
          <JobBox key={index + 4}>
            <h3 className="title">{item.title}</h3>
            <div className="info">
              {url && <div className="url">{Url(item.url)}</div>}
              <Time />
            </div>
          </JobBox>
        ))}
      <ApplyBanner2 />
      {arr.length > 13 &&
        arr.slice(14).map((item, index) => (
          <JobBox key={index + 4}>
            <h3 className="title">{item.title}</h3>
            <div className="info">
              {url && <div className="url">{Url(item.url)}</div>}
              <Time />
            </div>
          </JobBox>
        ))}

      <ApplyBox>
        <div className="wrap">
          <Favicon url={url} />
          <div className="info">
            <div className="title">{company}</div>
            <div className="text">{applyText}</div>
            <Time className="time" />
          </div>
          <ApplyButton>Apply</ApplyButton>
        </div>
      </ApplyBox>
    </JobItemBlock>
  );
};

export default JobItem;
