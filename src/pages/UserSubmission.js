import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ListBox } from '../components/common/Box';
import TitleColor from '../components/common/TitleColor';
import { PointTime } from '../components/common/PointTime';
import UserInfo from '../components/common/UserInfo';
import { Comment } from '../components/common/Comment';
import { useDispatch, useSelector } from 'react-redux';
import urlSlice from '../utils/urlSlice';
import { useParams } from '../../node_modules/react-router/index';
import createRequestUserInfo from '../libs/createRequestUserInfo';
import { GET_USER_INFO } from '../modules/userInfo';
import { getStory, getUser } from '../services/API';

const ComentBox = styled(ListBox)`
  letter-spacing: 0.01rem;
  h3 {
    line-height: 1.3;
    font-weight: 500;
    padding: 0;
    margin-bottom: 0.3rem;
  }
  a {
    color: #b7b7b7;
    font-size: 0.75rem;
  }
`;
const User = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  .info {
    flex: 1;
    display: flex;
    align-items: center;
  }
`;
const UserSubmission = () => {
  const story = useSelector((state) => state.userInfo.userInfos.type.story);
  // const comment = useSelector((state) => state.userInfo.userInfos.type.comment);
  const dispatch = useDispatch();
  const params = useParams();
  const userId = params.username;

  const getUserInfoData = createRequestUserInfo(
    GET_USER_INFO,
    getStory,
    getUser,
    userId,
  );
  useEffect(() => {
    dispatch(getUserInfoData());
  }, [dispatch]);

  return (
    <>
      {story !== undefined &&
        (story.length > 1 ? (
          story.map((data) => (
            <ComentBox>
              <h3>{data && <TitleColor title={data.title} />}</h3>
              <a href={data.url}>{data.url}</a>
              <User>
                <div className="info">
                  <UserInfo id={data.id} />
                  <PointTime score={data.score} time={data.time} />
                </div>
                <Comment
                  count={data.descendants}
                  link={`/comment/${data.id}`}
                />
              </User>
            </ComentBox>
          ))
        ) : (
          <ComentBox>
            <h3>
              <TitleColor title={story[0].title} url={story[0].url} />
            </h3>
            <a href={story[0].url}>{urlSlice(story[0].url)}</a>
            <User>
              <div className="info">
                <UserInfo id={story[0].id} />
                <PointTime score={story[0].score} time={story[0].time} />
              </div>
              <Comment
                count={story[0].descendants}
                link={`/comment/${story[0].id}`}
              />
            </User>
          </ComentBox>
        ))}
    </>
  );
};

export default UserSubmission;
