import React from 'react';
import styled, { css } from 'styled-components';
import { IconPointTime } from './common/PointTime';
import UserInfo from './common/UserInfo';
import { ReactComponent as Arrow } from '../assets/arrow_up.svg';
import { useState, useEffect } from 'react';
import { getComment } from '../services/API';
import replaceText from '../utils/replaceText';

const CoCommentBoxBlock = styled.div`
  box-sizing: border-box;
  padding: 1.2rem 1rem;
  border-radius: 0;
  border-bottom: ${({ theme }) => theme.borderColor};
  margin-bottom: 0.65rem;
  ${(props) =>
    props.textBox &&
    css`
      background: ${({ theme }) => theme.topbackColor};
      border-radius: 0.5rem;
      border-bottom: none;
    `}
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
  text-align: left;
  word-break: break-all;
`;

const CoCommentBox = (props) => {
  const [textBox, setTextBox] = useState(true);
  const [cocomment, setCocomment] = useState({});
  const { id, parentTextBox, ...rest } = props;
  const { by, text, time, kids } = cocomment;

  useEffect(() => {
    id && getComment(id).then((data) => data && setCocomment(data));
  }, [id]);

  const Hidden = () => {
    setTextBox(!textBox);
  };

  return (
    <div style={{ width: '95%' }}>
      {cocomment.by !== undefined && (
        <>
          <CoCommentBoxBlock
            align="left"
            textBox={textBox}
            {...rest}
            style={{ display: parentTextBox === false ? 'none' : ' ' }}
          >
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
          </CoCommentBoxBlock>
          {kids !== undefined &&
            kids.map((kid) => {
              return (
                <div align="right" key={kid}>
                  <CoCommentBox id={kid} parentTextBox={parentTextBox} />
                </div>
              );
            })}
        </>
      )}
    </div>
  );
};

export default CoCommentBox;
