// import React, { useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Arrow from '../../assets/arrow_select.svg';
// import {
//   comments,
//   points,
//   karma,
//   time,
//   day,
//   weeks,
//   month,
// } from '../../modules/filter';

const DropDownBlock = styled.div`
  display: flex;
`;

const Results = styled.div`
  height: 1.4rem;
  width: 6.2rem;
  border-radius: 1rem;
  border: 0.05rem solid var(--gray300);
  box-sizing: border-box;
  background: #fff;
  position: relative;
  margin-right: 0.4rem;
  &::after {
    content: url(${Arrow});
    position: absolute;
    left: 75%;
    top: 12%;
  }
  select {
    position: absolute;
    z-index: 2;
    height: 100%;
    width: 100%;
    padding: 0.2rem 0.7rem;
    font-size: 0.75rem;
    background: transparent;
    border: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    outline: none;
  }
`;

const Time = styled(Results)`
  width: 4.9rem;
  &::after {
    left: 68%;
  }
`;

const DropDown = ({ ...rest }) => {
  // const dispatch = useDispatch();
  // const [ResultType, setResultType] = useState('results');
  // const items = useSelector((state) => state.post.posts);

  // const onChange = useCallback(
  //   (e) => {
  //     const value = e.target.value;
  //     console.log(value);

  //     dispatch(comments(items));
  //     switch (value) {
  //       case 'comments':
  //         return dispatch(comments(items));
  //       case 'points':
  //         return dispatch(points(items));
  //       case 'karma':
  //         return dispatch(karma(items));
  //       default:
  //         return items;
  //     }
  //   },
  //   [dispatch, items],
  // );

  return (
    <DropDownBlock {...rest}>
      <Results>
        <select>
          <option value="results">Results</option>
          <option value="comments">Comments</option>
          <option value="points">Points</option>
          <option value="karma">Karma</option>
        </select>
      </Results>
      <Time>
        <select>
          <option value="time">Time</option>
          <option value="day">Day</option>
          <option value="weeks">Weeks</option>
          <option value="month">Month</option>
        </select>
      </Time>
    </DropDownBlock>
  );
};

export default DropDown;
