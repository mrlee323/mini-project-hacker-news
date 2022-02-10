import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import TodayTitle from './TodayTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { PointTime } from '../common/PointTime';
import TitleColor from '../common/TitleColor';

const TodayTopBlock = styled(Responsive)`
  background: ${({ theme }) => theme.navColor};
  margin-bottom: 0.75rem;
  padding-bottom: 2rem;
  .mySwiper {
    padding-bottom: 1.3rem;
  }
  .swiper-pagination {
    height: 2rem;
  }
  .swiper-pagination-bullet {
    position: relative;
    top: 1rem;
    left: 0;
    width: 0.5rem;
    height: 0.5rem;
  }
  .swiper-pagination-bullet-active {
    background: #ed702d;
  }
  .top {
    width: 21.9rem;
    margin: 1.25rem auto;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
    border-radius: 0.7rem;
    background: ${({ theme }) => theme.postColor};
    border: ${({ theme }) => theme.topBoxBorderColor};

    .list {
      padding: 1rem 0.9rem;
      height: 6.1rem;
      box-sizing: border-box;
      display: flex;

      .rank {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--orange);
        width: 3.1rem;
      }
      .text {
        .title {
          width: 17rem;
          font-weight: 600;
          font-size: 1rem;
          line-height: 1.3;
          height: 2.7rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .info {
          margin-top: 0.6rem;
          font-size: 0.75rem;
          color: #727272;
          display: flex;
          align-items: center;
          span + span {
            margin-left: 0.7rem;
          }
        }
      }
    }
  }
`;

const TodayTop = ({ todayTop }) => {
  const pages = [0, 5, 10];
  return (
    <TodayTopBlock>
      <TodayTitle link={'/top/post'}>Today's Top</TodayTitle>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {pages.map((page, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="top">
                {todayTop &&
                  todayTop.slice(page, page + 5).map((data, i) => (
                    <div className="list" key={data.id}>
                      <div className="rank">{page + i + 1}</div>
                      <div className="text">
                        <div className="title">
                          {data.title && (
                            <TitleColor title={data.title} url={data.url} />
                          )}
                        </div>
                        <div className="info">
                          <span>{data.by}</span>
                          <PointTime
                            style={{ color: '#727272' }}
                            score={data.score}
                            time={data.time}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </TodayTopBlock>
  );
};

export default TodayTop;
