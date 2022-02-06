import React from 'react';
import styled from 'styled-components';
const TopUserTitleBlock = styled.div`
  .title {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.textColor};
    margin-left: 1.25rem;
    margin-bottom: 1.13rem;
  }
  .rank {
    height: 2.75rem;
    padding: 0.7rem 3rem;
    display: flex;
    background: #eaf4f8;
    align-items: center;
    justify-content: space-between;
    box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    li {
      color: #727272;
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
`;
const TopUserTitle = () => {
  return (
    <TopUserTitleBlock>
      <div className="title">User Ranking 🏆</div>
      <ul className="rank">
        <li>Rank</li>
        <li>UserName</li>
        <li>Karma</li>
      </ul>
    </TopUserTitleBlock>
  );
};

export default TopUserTitle;
