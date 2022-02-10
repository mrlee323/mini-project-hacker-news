import { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import Arrow from '../../assets/arrow_select.svg';
import {
  daySort,
  karmaSort,
  sortData,
  timeSort,
  weeklySort,
} from '../../utils/sort';

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

const DropDown = ({ setSortData, setResultSortType, data, user, ...rest }) => {
  const [typeValue, setTypeValue] = useState({
    result: 'results',
    time: 'time',
  });

  const timesort = useRef();
  const onResultChange = useCallback(
    (e) => {
      const value = e.target.value;
      const sortedData =
        value === 'karma' ? karmaSort(user) : sortData(data, value);
      setSortData(sortedData);
      setResultSortType(`${value}`);
      timesort.current.options[0].selected = true;
      setTypeValue({ result: `${value}`, time: 'time' });
    },
    [typeValue],
  );

  const onTimeChange = useCallback(
    (e) => {
      const value = e.target.value;
      const sortedData =
        value === 'time'
          ? timeSort(data, typeValue.result)
          : value === 'day'
          ? daySort(data, typeValue.result)
          : weeklySort(data, typeValue.result);
      setSortData(sortedData);
      setTypeValue({ result: typeValue.result, time: `${value}` });
    },
    [typeValue],
  );

  return (
    <DropDownBlock {...rest}>
      <Results>
        <select onChange={onResultChange}>
          <option value="results">Results</option>
          <option value="comments">Comments</option>
          <option value="points">Points</option>
          <option value="karma">Karma</option>
        </select>
      </Results>
      <Time>
        <select onChange={onTimeChange} ref={timesort}>
          <option value="time">Time</option>
          <option value="day">Day</option>
          <option value="weeks">Weeks</option>
        </select>
      </Time>
    </DropDownBlock>
  );
};

export default DropDown;
