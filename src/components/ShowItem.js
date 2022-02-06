import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { CardBox, ListBox } from './common/Box';
import { Comment } from './common/Comment';
import { IconPointTime, PointTime } from './common/PointTime';
import UserInfo from './common/UserInfo';
import { ReactComponent as Github } from '../assets/github.svg';

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

const ShowItem = ({ viewMode }) => {
  const [show, setShow] = useState({});
  return (
    <>
      {viewMode === 'list' ? (
        <ListBox>
          <Github style={{ marginBottom: '.2rem' }} />
          <a href={`${show.url}`} target="_blank" rel="noreferrer">
            <h3>
              We're migrating many of our servers from Linux to FreeBSD
              {show.title}
            </h3>
          </a>
          <ListUser>
            <div className="info">
              <UserInfo />
              <PointTime />
            </div>
            <Comment />
          </ListUser>
        </ListBox>
      ) : (
        <CardBox>
          <a href={`${show.url}`} target="_blank" rel="noreferrer">
            <h3>
              We're migrating many of our servers from Linux to FreeBSD
              {show.title}
            </h3>
          </a>
          <CardUser>
            <IconPointTime />
            <div className="info">
              <UserInfo className="id" />
              <Comment />
            </div>
          </CardUser>
        </CardBox>
      )}
    </>
  );
};

export default ShowItem;
