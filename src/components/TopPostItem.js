import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { CardBox, ListBox } from './common/Box';
import { Comment } from './common/Comment';
import { IconPointTime, PointTime } from './common/PointTime';
import UserInfo from './common/UserInfo';

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

const TopPostItem = ({ viewMode, postId }) => {
  const [post, setPost] = useState({});

  return (
    <>
      {viewMode === 'list' ? (
        <ListBox>
          <a href={`${post.url}`} target="_blank" rel="noreferrer">
            <h3>
              We're migrating many of our servers from Linux to FreeBSD
              {post.title}
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
          <a href={`${post.url}`} target="_blank" rel="noreferrer">
            <h3>
              We're migrating many of our servers from Linux to FreeBSD
              {post.title}
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

export default TopPostItem;
