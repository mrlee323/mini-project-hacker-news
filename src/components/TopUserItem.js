import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Rank = styled.ul`
  .data {
    height: 2.75rem;
    padding: 0.7rem 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    font-size: 0.9rem;
    font-weight: 500;
    .ranking {
      width: 2.3rem;
      text-align: right;
      span {
        margin-left: 0.5rem;
      }
    }
    .karma {
      color: #ed702d;
    }
    &:nth-child(even) {
      background: #eaf4f8;
      color: #202020;
    }
    .id {
      color: ${({ theme }) => theme.textColor};
    }
  }
`;

const TopUserItem = ({ post, index }) => {
  const users = useSelector((state) => state.user.users);

  return (
    <Rank>
      {users &&
        users.slice(0, 50).map((user, index) => (
          <li className="data" key={index}>
            <div className="ranking">
              {(index + 1 === 1 && '🥇') ||
                (index + 1 === 2 && '🥈') ||
                (index + 1 === 3 && '🥉')}
              <span>{index + 1}</span>
            </div>
            <NavLink to={`/user/${user.id}`} style={{ textDecoration: 'none' }}>
              <div className="id">{user.id}</div>
            </NavLink>
            <div className="karma">{user.karma}</div>
          </li>
        ))}
    </Rank>
  );
};

export default TopUserItem;
