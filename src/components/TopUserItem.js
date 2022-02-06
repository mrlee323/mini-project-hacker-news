import React from 'react';
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
  }
`;

const TopUserItem = ({ post, index }) => {
  const ranks = [1, 2, 3, 4];
  return (
    <Rank>
      {ranks.map((rank) => (
        <li className="data" key={index}>
          <div className="ranking">
            {(rank === 1 && '🥇') ||
              (rank === 2 && '🥈') ||
              (rank === 3 && '🥉')}
            <span>{rank}</span>
          </div>
          <div>id</div>
          <div className="karma">karma</div>
        </li>
      ))}
    </Rank>
  );
};

export default TopUserItem;
