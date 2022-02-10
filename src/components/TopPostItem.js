import React from 'react';
import styled from 'styled-components';
import { CardBox, ListBox } from './common/Box';
import { Comment } from './common/Comment';
import { IconPointTime, PointTime } from './common/PointTime';
import UserInfo from './common/UserInfo';
import TitleColor from './common/TitleColor';
import { NavLink } from 'react-router-dom';

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

const TopPostItem = ({ viewMode, post }) => {
  const { by, descendants, kids, score, time, title, url, id } = post;

  return (
    <>
      {viewMode === 'list'
        ? post && (
            <ListBox style={{ height: '8rem' }}>
              <h3 style={{ height: '3.1rem' }}>
                <TitleColor title={title} url={url} />
              </h3>
              <ListUser>
                <div className="info">
                  <NavLink
                    to={`/user/${by}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <UserInfo id={by} />
                  </NavLink>

                  <PointTime time={time} score={score} />
                </div>
                <Comment count={descendants} link={id} />
              </ListUser>
            </ListBox>
          )
        : post && (
            <CardBox url={url}>
              <a href={`${url}`} target="_blank" rel="noreferrer">
                <h3>{title}</h3>
              </a>
              <CardUser>
                <IconPointTime time={time} score={score} />
                <div className="info">
                  <UserInfo className="id" id={by} />
                  <Comment count={descendants} link={id} />
                </div>
              </CardUser>
            </CardBox>
          )}
    </>
  );
};

export default TopPostItem;
