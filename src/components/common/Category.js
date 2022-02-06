import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';

const CategoryBlock = styled.div`
  width: 350px;
  height: 40px;
  border-radius: 20px;
  background: ${({ theme }) => theme.postColor};
  margin: 20px auto;
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.bdColor};
`;

const Box = styled.div`
  width: 10.7rem;
  height: 2rem;
  background: var(--orange);
  border-radius: 1.25rem;
  margin: 0.3rem;
  position: absolute;
  left: 0;
  transition: left ease-in 0.2s;
  ${(props) =>
    props.page === '/top/user' &&
    css`
      left: 10.6rem;
    `}
`;

const StyleLink = styled(NavLink)`
  color: var(--gray400);
  font-size: 0.75rem;
  font-weight: 500;
  text-decoration: none;
  position: absolute;
  padding: 0.625rem 1.9rem;
  left: 14%;
  top: 0.2rem;
  ${(props) =>
    props.page === '/top' &&
    css`
      color: #fff;
    `}
  &.active {
    color: #fff;
  }
`;

const Category = () => {
  const { pathname } = useLocation();
  return (
    <CategoryBlock>
      <Box page={pathname} />

      <StyleLink to="post">Post</StyleLink>
      <StyleLink to="user" style={{ left: '63%' }}>
        Users
      </StyleLink>
    </CategoryBlock>
  );
};

export default Category;
