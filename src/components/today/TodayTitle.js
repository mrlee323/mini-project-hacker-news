import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import Responsive from '../common/Responsive';
import { ReactComponent as Update } from '../../assets/updated.svg';
import { ReactComponent as TimeIcon } from '../../assets/time.svg';
import { ReactComponent as Arrow } from '../../assets/arrow_right.svg';
import { Time } from '../common/Time';

const TodayBlock = styled(Responsive)`
  width: 390px;
  height: 4.25rem;
  padding: 2.5rem 1.25rem 0;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background: ${({ theme }) => theme.navColor};
`;

const Today = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  h2 {
    color: ${({ theme }) => theme.textColor};
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const Timer = styled.div`
  visibility: hidden;
  display: flex;
  svg {
    margin-top: 0.3rem;
  }
  .time {
    color: var(--gray400);
    font-weight: 500;
    margin-left: 0.1rem;
    margin-top: 0.5rem;
  }

  ${(props) =>
    props.timer === "Today's Top" &&
    css`
      visibility: visible;
    `}
`;

const UpdateIcon = styled(Update)`
  display: none;
  ${(props) =>
    (props.other === "Today's New" ||
      props.other === "Today's Show" ||
      props.other === "Today's Ask") &&
    css`
      display: block;
    `}
`;

const RightArrow = styled(Arrow)`
  fill: ${({ theme }) => theme.arrowColor};
`;

const TodayTitle = ({ children, link, ...rest }) => {
  const [hour] = Time();
  const time = `${hour}:00`;
  return (
    <TodayBlock {...rest}>
      <NavLink to={`${link}`} style={{ flex: 1, textDecoration: 'none' }}>
        <Today>
          <h2>{children}</h2>
          <RightArrow />
        </Today>
      </NavLink>
      <Timer timer={children}>
        <TimeIcon />
        <div className="time">{time}</div>
      </Timer>
      <UpdateIcon other={children} />
    </TodayBlock>
  );
};

export default TodayTitle;
