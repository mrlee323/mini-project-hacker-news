import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Comments } from '../../assets/comments.svg';

const CommentBlock = styled.div`
  display: flex;
  align-items: center;
  .count {
    font-weight: 500;
    font-size: 0.75rem;
    color: #ed702d;
    margin-left: 0.3rem;
  }
`;
export const Comment = ({ count, ...rest }) => {
  return (
    <CommentBlock {...rest}>
      <Comments />
      <div className="count">240{count}</div>
    </CommentBlock>
  );
};
