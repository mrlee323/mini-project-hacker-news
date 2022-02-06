import React from 'react';
import styled from 'styled-components';
import BannerApply from '../assets/banner_apply.svg';
import BannerApply2 from '../assets/banner_apply2.svg';
import { ListBox } from './common/Box';
import Favicon from './common/Favicon';
import { JobCategory, JobTitle } from './common/JobCategory';
import { PointTime } from './common/PointTime';
import Url from './common/Url';

const ApplyBannerBlock = styled.div`
  position: relative;
  margin-bottom: 1.25rem;
  .apply {
    font-size: 3rem;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.1rem;
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

const Box = styled.div`
  position: absolute;
  width: 24.37rem;
  top: 6rem;
  left: 0;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const JobBox = styled(ListBox)`
  flex-shrink: 0;
  padding: 0.6rem 0.75rem;
  box-sizing: border-box;
  top: 8rem;
  left: 1.3rem;
  text-align: center;
  margin: 0 1.3rem 0 1.3rem;
  .category {
    text-align: left;
    margin-bottom: 0.2rem;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .name {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.1rem;
  }
  .text {
    margin: 0 auto;
    width: 18rem;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.2;
    padding-bottom: 0.4rem;
  }
`;

const Random = (jobs) => {
  const random = [];
  for (let i = 0; i < jobs.length; i++) {
    const count = Math.floor(Math.random() * jobs.length) + 1;
    random.push(count);
    if ([...new Set(random)].length === 5) {
      break;
    }
  }
  const randomArray = [...new Set(random)];
  return randomArray;
};

export const ApplyBanner = ({
  applyText = 'Eng Manager to Build the Future of Tabletop RPGs',
  url = 'https://www.paperspace.com/careers#open-positions',
  company = 'Multiverse (YC W20)',
}) => {
  //   const RandomGet = () => {
  //     setTimeout(() => {
  //     Random()
  //     }, 60000)

  //     const random = Random(jobs)
  // }
  return (
    <ApplyBannerBlock>
      <img src={BannerApply} alt="apply-banner" />
      <div className="apply">APPLYNOW</div>
      <Box className="box">
        {/* {jobs.length !== 0 &&
          random.map((num) => {
            const { company, applyText } = JobTitle(jobs[num].title);
            return ( */}
        <JobBox>
          <JobCategory className="category" title={applyText} />
          <Favicon url={url} className="favicon" />
          <h3 className="name">{company}</h3>
          <p className="text">{applyText}</p>
        </JobBox>
        <JobBox>
          <JobCategory className="category" title={applyText} />
          <Favicon url={url} className="favicon" />
          <h3 className="name">{company}</h3>
          <p className="text">{applyText}</p>
        </JobBox>
        {/* );
          })} */}
      </Box>
    </ApplyBannerBlock>
  );
};

const ApplyBanner2Block = styled.div`
  position: relative;
  margin-bottom: 1.25rem;
  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ApplyBanner2 = ({
  applyText = 'Eng Manager to Build the Future of Tabletop RPGs',
  url = 'https://www.paperspace.com/careers#open-positions',
  company = 'Multiverse (YC W20)',
}) => {
  return (
    <ApplyBanner2Block>
      <img src={BannerApply2} alt="apply-banner2" />
      <div className="box">
        <JobBox style={{ display: 'flex', alignItems: 'center' }}>
          <Favicon
            url={url}
            className="favicon"
            style={{ marginRight: '1rem' }}
          />
          <h3 className="name">{company}</h3>
        </JobBox>
      </div>
    </ApplyBanner2Block>
  );
};
