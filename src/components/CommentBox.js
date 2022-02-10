import React from 'react';
import styled, { css } from 'styled-components';
import { IconPointTime } from './common/PointTime';
import UserInfo from './common/UserInfo';
import { ReactComponent as Arrow } from '../assets/arrow_up.svg';
import { useEffect } from 'react';
import replaceText from '../utils/replaceText';

const CommentBoxBlock = styled.div`
  width: 21.9rem;
  box-sizing: border-box;
  padding: 1rem 0rem 0;
  border-radius: 0;
  margin-bottom: 1.3rem;
  /* ${(props) =>
    props.textBox &&
    css`
      background: ${({ theme }) => theme.bgColor};
      border-radius: 0.5rem;
      padding: ${({ theme }) => theme.commentPadding};
    `} */
`;
const User = styled.div`
  display: flex;
  align-items: center;
  .id {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.userName};
    svg {
      width: 1.25rem;
      height: 1.25rem;
      fill: ${({ theme }) => theme.userName};
    }
  }
  .point-time {
    flex: 1;
    padding: 0;
    color: #b7b7b7;
    margin-left: 0.3rem;
    .score {
      display: none;
    }
    .point {
      display: none;
    }
    .timeIcon {
      margin-right: 0.1rem;
      circle {
        stroke: #b7b7b7;
      }
      path {
        fill: #b7b7b7;
      }
    }
  }
  .arrow {
    fill: #c4c4c4;
  }
`;
const Text = styled.div`
  margin-top: 1rem;
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.userName};
  word-break: break-all;
`;

const CommentBox = (props) => {
  const { comment, setId, Hidden, textBox } = props;
  const { by, kids, text, time } = comment;

  useEffect(() => {
    setId(kids);
  }, [kids]);

  return (
    <>
      {comment && (
        <CommentBoxBlock textBox={textBox}>
          <User>
            <UserInfo className="id" id={by} />
            <IconPointTime className="point-time" time={time} />
            <Arrow
              className="arrow"
              onClick={Hidden}
              style={{ transform: textBox === false && 'rotate(180deg)' }}
            />
          </User>
          <Text style={{ display: textBox === false ? 'none' : ' ' }}>
            {replaceText(text)}
          </Text>
        </CommentBoxBlock>
      )}
    </>
  );
};

export default CommentBox;
