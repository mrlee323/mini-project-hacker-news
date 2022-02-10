import React from 'react';
import styled from 'styled-components';
import { CardBox, ListBox } from './common/Box';
import { Comment } from './common/Comment';
import { IconPointTime, PointTime } from './common/PointTime';
import UserInfo from './common/UserInfo';
import UrlIcon from './common/UrlIcon';
import TitleColor from './common/TitleColor';
import { NavLink } from 'react-router-dom';

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
    justify-content: space-between;
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
                  <NavLink
                    to={`/user/${by}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <UserInfo id={by} className="id" />
                  </NavLink>
                  <Comment count={descendants} link={id} />
                </div>
              </CardUser>
            </CardBox>
          )}
    </>
  );
};

export default NewItem;
