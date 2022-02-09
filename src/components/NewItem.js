import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { CardBox, ListBox } from './common/Box';
import { Comment } from './common/Comment';
import { IconPointTime, PointTime } from './common/PointTime';
import UserInfo from './common/UserInfo';
import { ReactComponent as Github } from '../assets/github.svg';
import UrlIcon from './common/UrlIcon';
import TitleColor from './common/TitleColor';

const StyledBox = styled(ListBox)`
  padding-top: 0.9rem;
  padding-bottom: 0.9rem;
  height: 9.25rem;
  box-sizing: border-box;
  h3 {
    line-height: 1.5;
    height: 3.1rem;
  }
`;

const ListUser = styled.div`
  display: flex;
  align-items: center;
  .info {
    flex: 1;
    display: flex;
    align-items: center;
  }
`;
const CardUser = styled.div`
  .info {
    display: flex;
    align-items: center;
    .id {
      flex: 1;
    }
  }
`;

const NewItem = ({ viewMode, news }) => {
  const { by, descendants, kids, score, time, title, url, id } = news;

  return (
    <>
      {viewMode === 'list'
        ? news && (
            <StyledBox>
              {url && <UrlIcon url={url} />}
              <h3 style={{ margin: url ? '.7rem 0 1.5rem' : '.5rem 0 2.5rem' }}>
                <TitleColor title={title} url={url} />
              </h3>

              <ListUser>
                <div className="info">
                  <UserInfo id={by} />
                  <PointTime time={time} score={score} />
                </div>
                <Comment count={descendants} link={`/comment/${id}`} />
              </ListUser>
            </StyledBox>
          )
        : news && (
            <CardBox>
              {url && <UrlIcon url={url} />}
              <a href={`${url}`} target="_blank" rel="noreferrer">
                <h3 style={{ margin: url ? '.5rem 0 1rem' : '0 0 2.5rem' }}>
                  {title}
                </h3>
              </a>
              <CardUser>
                <IconPointTime time={time} score={score} />
                <div className="info">
                  <UserInfo className="id" id={by} />
                  <Comment count={descendants} link={`/comment/${id}`} />
                </div>
              </CardUser>
            </CardBox>
          )}
    </>
  );
};

export default NewItem;
