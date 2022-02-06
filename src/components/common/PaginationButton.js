import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Right } from '../../assets/pagination-button_right.svg';
import { ReactComponent as Left } from '../../assets/pagination-button_left.svg';

const StyledButton = styled.div`
  padding: 2.5rem 0 4.5rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  .count {
    border: 1px solid #dfdfdf;
    width: 4.4rem;
    height: 1.9rem;
    margin: 0 2.2rem;
    border-radius: 1rem;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    color: #202020;
  }
`;

const PaginationButton = ({ setCurrentPage, currentPage, count }) => {
  const prev = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };
  const next = () => {
    currentPage < count && setCurrentPage(currentPage + 1);
  };

  return (
    <StyledButton>
      <Left onClick={prev} />
      <div className="count">
        {currentPage}/{count}
      </div>
      <Right onClick={next} />
    </StyledButton>
  );
};

export default PaginationButton;
