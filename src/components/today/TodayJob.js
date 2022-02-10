import React, { useEffect, useState } from 'react';
import TodayTitle from './TodayTitle';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { IconPointTime } from '../common/PointTime';
import urlSlice from '../../utils/urlSlice';
import { JobCategory } from '../common/JobCategory';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import random from '../../utils/random';
import TitleColor from '../common/TitleColor';

const TodayJobBlock = styled(Responsive)`
  background: ${({ theme }) => theme.navColor};
  padding-bottom: 3.5rem;
  .job {
    display: flex;
    align-items: center;
    overflow-x: scroll;
    padding: 1.25rem 0 1.25rem 1.25rem;
    ::-webkit-scrollbar {
      display: none;
    }
    .list {
      flex-shrink: 0;
      width: 13.75rem;
      height: 10.9rem;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1),
        0px 3px 6px rgba(0, 0, 0, 0.05);
      border-radius: 0.7rem;
      background: #eaf4f8;
      padding: 1rem 0.75rem;
      box-sizing: border-box;
      .title {
        height: 6.75rem;
        margin-top: 0.625rem;
        font-size: 0.9rem;
        font-weight: 600;
        line-height: 1.3;
        height: 3.75rem;
        color: #202020;
      }
      .url {
        margin-bottom: 1rem;
      }
      a {
        font-size: 0.75rem;
        color: #727272;
        margin: 0;
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
const TodayJob = ({ todayJob }) => {
  const [randomArray, setRandomArray] = useState([1, 2, 3, 4, 5]);
  useEffect(() => {
    let id = setInterval(() => {
      setRandomArray(random(todayJob));
    }, 600000);
    return () => clearInterval(id);
  }, []);

  return (
    <TodayJobBlock>
      <TodayTitle link={'/job'}>Today's Job</TodayTitle>
      <Swiper
        slidesPerView={1.6}
        // loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // modules={[Autoplay]}
        className="mySwiper"
      >
        {randomArray.map(
          (index) =>
            todayJob[index] && (
              <SwiperSlide key={index}>
                <div className="job">
                  <div className="list">
                    <JobCategory title={todayJob[index].title} />
                    <div
                      className="title"
                      style={{
                        marginBottom:
                          todayJob[index].url === undefined && '2rem',
                      }}
                    >
                      {todayJob[index].title && (
                        <TitleColor
                          title={todayJob[index].title}
                          url={todayJob[index].url}
                        />
                      )}
                    </div>
                    {todayJob[index].url && (
                      <div className="url">
                        <a
                          href={todayJob[index].url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {urlSlice(todayJob[index].url)}
                        </a>
                      </div>
                    )}
                    <Time time={todayJob[index].time} />
                  </div>
                </div>
              </SwiperSlide>
            ),
        )}
      </Swiper>
    </TodayJobBlock>
  );
};

export default TodayJob;
