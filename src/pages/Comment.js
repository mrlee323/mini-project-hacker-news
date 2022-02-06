import styled from 'styled-components';
import { PointTime } from '../components/common/PointTime';
import Responsive from '../components/common/Responsive';
import { ReactComponent as UserIcon } from '../assets/user.svg';
import TitleColor from '../components/common/TitleColor';
import { Comment as CommentIcon } from '../components/common/Comment';
import CommentContainer from '../containers/CommentContainer';

const CommentBlock = styled(Responsive)`
  background: ${({ theme }) => theme.topbackColor};
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

const Comment = ({
  by = 'mahin',
  descendants = 27,
  id = 30219258,
  kids = [
    30221314, 30222156, 30221229, 30220337, 30223029, 30219477, 30221538,
    30221757, 30220629,
  ],
  score = 58,
  text = "I've been playing Wordle and remembered this puzzle game I used to play with my grandfather. It's inspired by the block puzzles in many newspapers but made to be shorter: just guess the nine letter word.So I made a quick thing to play with my family like we used to. I thought you guys might enjoy it.",
  time = 1644051518,
  title = 'Show HN: Nine Letter Word – Daily Puzzle Nine Letter Word',
  type = 'story',
  url = 'https://www.nineletterwordgame.com',
}) => {
  return (
    <CommentBlock>
      <Main>
        <User>
          <UserIcon />
          <div className="info">
            <div className="id">{by}</div>
            <PointTime className="point-time" />
          </div>
        </User>
        <Contents>
          <TitleColor className="title" title={title} />
          <div className="text">{text}</div>
        </Contents>
      </Main>
      <Comments>
        <CommentContainer kids={kids} />
      </Comments>
    </CommentBlock>
  );
};

export default Comment;
