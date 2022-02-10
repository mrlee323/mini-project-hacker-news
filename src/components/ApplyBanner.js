import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BannerApply from '../assets/banner_apply.svg';
import BannerApply2 from '../assets/banner_apply2.svg';
import { ListBox } from './common/Box';
import Favicon from './common/Favicon';
import { JobCategory, JobTitle } from './common/JobCategory';
import { PointTime } from './common/PointTime';
import urlSlice from '../utils/urlSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import random from '../utils/random';
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
  width: 24.4rem;
  height: 19.4rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  .swiper {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

export const ApplyBanner = ({ jobs }) => {
  const [randomArray, setRandomArray] = useState([1, 3, 5, 7, 9]);
  useEffect(() => {
    let id = setInterval(() => {
      setRandomArray(random(jobs));
    }, 600000);
    return () => clearInterval(id);
  }, []);
  return (
    <ApplyBannerBlock>
      <div className="apply">APPLYNOW</div>
      <Box className="box" style={{ backgroundImage: `url(${BannerApply})` }}>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="job2Swiper"
        >
          {jobs.length >= 60 &&
            randomArray.map((index) => (
              <SwiperSlide key={jobs[index].id}>
                <a
                  href={jobs[index].url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <JobBox style={{ width: '22rem', height: '10rem' }}>
                    <JobCategory
                      className="category"
                      title={JobTitle(jobs[index].title).applyText}
                    />
                    {jobs[index].url !== undefined ? (
                      <Favicon url={jobs[index].url} className="favicon" />
                    ) : (
                      <img
                        src="/favicon.ico"
                        alt="defalutImage"
                        style={{ width: '3.25rem', height: '3.25rem' }}
                      />
                    )}
                    <h3 className="name">
                      {JobTitle(jobs[index].title).company}
                    </h3>
                    <p className="text">
                      {JobTitle(jobs[index].title).applyText}
                    </p>
                  </JobBox>
                </a>
              </SwiperSlide>
            ))}
        </Swiper>
      </Box>
    </ApplyBannerBlock>
  );
};

const ApplyBanner2Block = styled.div`
  position: relative;
  margin-bottom: 1.25rem;

  .box {
    width: 24.4rem;
    height: 11.1rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    .swiper {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const ApplyBanner2 = ({ jobs }) => {
  const [randomArray, setRandomArray] = useState([2, 4, 6, 8, 10]);
  useEffect(() => {
    let id = setInterval(() => {
      setRandomArray(random(jobs));
    }, 600000);
    return () => clearInterval(id);
  }, []);

  return (
    <ApplyBanner2Block>
      <div className="box" style={{ backgroundImage: `url(${BannerApply2})` }}>
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="jobSwiper"
        >
          {jobs.length >= 60 &&
            randomArray.map((index) => (
              <SwiperSlide key={jobs[index].id}>
                <a
                  href={jobs[index].url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <JobBox style={{ display: 'flex', alignItems: 'center' }}>
                    {jobs[index].url !== undefined ? (
                      <Favicon
                        url={jobs[index].url}
                        className="favicon"
                        style={{ marginRight: '1rem' }}
                      />
                    ) : (
                      <img
                        src="/favicon.ico"
                        alt="defalutImage"
                        style={{ width: '3.25rem', height: '3.25rem' }}
                      />
                    )}
                    <h3 className="name">
                      {JobTitle(jobs[index].title).company}
                    </h3>
                  </JobBox>
                </a>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </ApplyBanner2Block>
  );
};
