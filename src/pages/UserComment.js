import React from 'react';
import styled from 'styled-components';
import { ListBox } from '../components/common/Box';
import TitleColor from '../components/common/TitleColor';
import { PointTime } from '../components/common/PointTime';
import UserInfo from '../components/common/UserInfo';
import { Comment } from '../components/common/Comment';
import { useSelector } from 'react-redux';
import urlSlice from '../utils/urlSlice';
import replaceText from '../utils/replaceText';

const ComentBox = styled(ListBox)`
  letter-spacing: 0.01rem;
  p {
    line-height: 1.5;
    font-size: 0.9rem;
    padding: 0;
    margin-bottom: 0.3rem;
    word-break: break-all;
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

const Time = styled(PointTime)`
  .score {
    display: none;
  }
`;

const UserComment = () => {
  const comment = useSelector((state) => state.userInfo.userInfos.type.comment);
  return (
    <>
      {comment && comment.length > 1 ? (
        comment.map((data) => (
          <ComentBox key={data.id}>
            {data.text !== undefined && (
              <p className="text">{replaceText(data.text)}</p>
            )}
            <User>
              <div className="info">
                <UserInfo id={data.by} />
                <Time time={data.time} />
              </div>
              {data.kids && <Comment count={data.kids.length} link={data.id} />}
            </User>
          </ComentBox>
        ))
      ) : (
        <ComentBox key={comment[0].id}>
          <p className="text">{replaceText(comment[0].text)}</p>
          <User>
            <div className="info">
              <UserInfo id={comment[0].by} />
              <Time time={comment[0].time} />
            </div>
            <Comment count={comment[0].kids.length} link={comment[0].id} />
          </User>
        </ComentBox>
      )}
    </>
  );
};

export default UserComment;
