import React from 'react';
import { getComment } from '../services/API';
import { useState, useEffect, useCallback } from 'react';
import CommentBox from './CommentBox';
import CoCommentBox from './CoCommentBox';
import styled from 'styled-components';
const Warp = styled.div`
  padding-bottom: 0.7rem;
  border-bottom: ${({ theme }) => theme.borderColor};
`;
const CommentItem = ({ kid }) => {
  const [textBox, setTextBox] = useState(true);
  const [comment, setComment] = useState({});
  const [id, setId] = useState('');

  useEffect(() => {
    kid && getComment(kid).then((data) => data && setComment(data));
  }, []);

  const Hidden = () => {
    setTextBox(!textBox);
  };
  return (
    <>
      {comment !== {} && (
        <Warp>
          <CommentBox
            comment={comment}
            textBox={textBox}
            Hidden={Hidden}
            setId={setId}
          />
          {id && id.length >= 1 ? (
            id.map((item, index) => (
              <div align="right" key={index}>
                <CoCommentBox id={item} parentTextBox={textBox} />
              </div>
            ))
          ) : (
            <div align="right">
              <CoCommentBox id={id} parentTextBox={textBox} />
            </div>
          )}
        </Warp>
      )}
    </>
  );
};

export default CommentItem;
