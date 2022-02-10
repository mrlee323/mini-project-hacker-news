import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { CardBox, ListBox } from './common/Box';
import { Comment } from './common/Comment';
import { IconPointTime, PointTime } from './common/PointTime';
import UserInfo from './common/UserInfo';
import { AskTitleColor } from './common/TitleColor';
import UrlIcon from './common/UrlIcon';

const StyledBox = styled(ListBox)`
  padding-top: 0.8rem;
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
const ShowTitleColor = styled(AskTitleColor)``;
const ShowItem = ({ show, viewMode }) => {
  return (
    <>
      {viewMode === 'list'
        ? show && (
            <StyledBox style={{ height: '9.25rem' }}>
              {show.url && <UrlIcon url={show.url} />}
              <h3
                style={{
                  margin: show.url ? '.7rem 0 1.5rem' : '.5rem 0 2.5rem',
                }}
              >
                {show.title && (
                  <ShowTitleColor title={show.title} link={show.id} />
                )}
              </h3>
              <ListUser>
                <div className="info">
                  <UserInfo id={show.by} />
                  <PointTime score={show.score} time={show.time} />
                </div>
                <Comment count={show.descendants} link={show.id} />
              </ListUser>
            </StyledBox>
          )
        : show && (
            <CardBox>
              {show.url && <UrlIcon url={show.url} />}
              <h3 style={{ margin: show.url ? '.5rem 0 1rem' : '0 0 2.5rem' }}>
                <ShowTitleColor title={show.title} link={show.id} />
              </h3>
              <CardUser>
                <IconPointTime time={show.time} score={show.score} />
                <div className="info">
                  <UserInfo className="id" id={show.by} />
                  <Comment count={show.descendants} link={show.id} />
                </div>
              </CardUser>
            </CardBox>
          )}
    </>
  );
};

export default ShowItem;
