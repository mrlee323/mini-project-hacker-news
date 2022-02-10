import styled from 'styled-components';
import { PointTime } from '../components/common/PointTime';
import Responsive from '../components/common/Responsive';
import { ReactComponent as UserIcon } from '../assets/user.svg';
import TitleColor from '../components/common/TitleColor';
import CommentContainer from '../containers/CommentContainer';
import { useNavigate, useParams } from 'react-router';
import { getStory } from '../services/API';
import { useEffect, useState } from 'react';
import replaceText from '../utils/replaceText';

const CommentBlock = styled(Responsive)`
  background: ${({ theme }) => theme.topbackColor};
  .button {
    background: ${({ theme }) => theme.navColor};
    height: 9.6rem;
    padding: 2.9rem 9rem;
    box-sizing: border-box;
    point: cursor;
  }
`;
const Main = styled.div`
  background: ${({ theme }) => theme.navColor};
  padding: 0 0.5rem;
  box-sizing: border-box;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  border-top: ${({ theme }) => theme.borderColor};
  border-bottom: ${({ theme }) => theme.borderColor};
  padding: 1.2rem 0.6rem;
  .info {
    margin-left: 1rem;
    .id {
      font-size: 1.1rem;
      font-weight: 500;
      margin-bottom: 0.3rem;
    }
    .point-time {
      font-weight: 400;
      margin: 0;
      .score {
        position: relative;
        margin-right: 1rem;
        &::after {
          content: '';
          width: 0.18rem;
          height: 0.18rem;
          border-radius: 50%;
          background: #ccc;
          position: absolute;
          right: -0.6rem;
          top: 0.3rem;
        }
      }
    }
  }
  svg {
    width: 2.1rem;
    height: 2.1rem;
    fill: ${({ theme }) => theme.textColor};
  }
`;

const Contents = styled.div`
  padding: 0.75rem 0.6rem;
  margin-bottom: 1rem;
  .title {
    margin-bottom: 1rem;
  }
  .text {
    color: ${({ theme }) => theme.userIconColor};
    line-height: 1.7;
    font-size: 1.1rem;
    letter-spacing: 0.01rem;
    font-weight: 400;
  }
`;

const Comments = styled.div`
  background: ${({ theme }) => theme.navColor};
  padding: 1rem 1.25rem;
  .bar {
    display: flex;
    align-items: center;
    margin-bottom: 1.375rem;
    .sort {
      flex: 1;
      display: flex;
      align-items: center;
      color: #727272;
      font-size: 0.9rem;
      font-weight: 500;
      .registered {
        margin-left: 1rem;
        margin-right: 1.7rem;
        position: relative;
        &::after {
          content: '';
          width: 0.375rem;
          height: 0.375rem;
          background: #c4c4c4;
          position: absolute;
          border-radius: 50%;
          left: -0.8rem;
          top: 0.3rem;
        }
      }
      .newest {
        position: relative;
        &::after {
          content: '';
          width: 0.375rem;
          height: 0.375rem;
          background: #c4c4c4;
          position: absolute;
          border-radius: 50%;
          left: -0.8rem;
          top: 0.3rem;
        }
      }
    }
  }
`;
const BackButton = styled.div`
  width: 6.5rem;
  height: 2.6rem;
  border: 1px solid ${({ theme }) => theme.userIcon};
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor};
  border-radius: 2.2rem;
  padding: 0.7rem 2.2rem;
  box-sizing: border-box;
  margin: 0; auto;
`;
const Comment = () => {
  const params = useParams().id;
  const [data, setData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    getStory(params).then((story) => story && setData(story));
  }, []);

  const goBack = () => {
    navigate(-1);
  };
  return (
    <CommentBlock>
      {data !== {} && (
        <>
          <Main>
            <User>
              <UserIcon />
              <div className="info">
                <div className="id">{data.by}</div>
                <PointTime
                  className="point-time"
                  score={data.score}
                  time={data.time}
                />
              </div>
            </User>
            <Contents>
              {data.title && (
                <TitleColor className="title" title={data.title} />
              )}
              <div className="text">{replaceText(data.text)}</div>
            </Contents>
          </Main>
          <Comments>
            <CommentContainer
              kids={data.kids}
              commentCount={data.descendants || (data.kids && data.kids.length)}
            />
          </Comments>
          <div className="button">
            <BackButton onClick={goBack}>Back</BackButton>
          </div>
        </>
      )}
    </CommentBlock>
  );
};

export default Comment;
