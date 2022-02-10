import React from 'react';
import styled from 'styled-components';
import { ListBox } from '../components/common/Box';
import TitleColor from '../components/common/TitleColor';
import { PointTime } from '../components/common/PointTime';
import UserInfo from '../components/common/UserInfo';
import { Comment } from '../components/common/Comment';
import urlSlice from '../utils/urlSlice';
import { useSelector } from 'react-redux';

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
const UserSubmission = ({ story }) => {
  const datas = useSelector((state) => state.userInfo.userInfos.type.story);

  return (
    <>
      {story === undefined &&
        datas &&
        datas.map((data) => (
          <ComentBox key={data.id}>
            <h3>
              {data.title !== undefined && <TitleColor title={data.title} />}
            </h3>
            <a href={data.url}>{data.url}</a>
            <User>
              <div className="info">
                <UserInfo id={data.by} />
                <PointTime score={data.score} time={data.time} />
              </div>
              <Comment count={data.descendants} link={data.id} />
            </User>
          </ComentBox>
        ))}
    </>
  );
};

export default UserSubmission;

export const Submission = ({ story }) => {
  return (
    story !== [] &&
    story.map((data) => (
      <ComentBox key={data.id}>
        <h3>{data.title !== undefined && <TitleColor title={data.title} />}</h3>
        <a href={data.url}>{data.url}</a>
        <User>
          <div className="info">
            <UserInfo id={data.by} />
            <PointTime score={data.score} time={data.time} />
          </div>
          <Comment count={data.descendants} link={data.id} />
        </User>
      </ComentBox>
    ))
  );
};
