import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: ${({ theme }) => theme.navColor};
`;
const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 0.8rem 0.85rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--gray500);
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
  &.active {
    color: ${({ theme }) => theme.textColor};
    position: relative;
    &::after {
      content: '';
      width: 2.6rem;
      height: 0.15rem;
      background: #ed702d;
      position: absolute;
      bottom: 0;
      border-radius: 0.2rem 0.2rem 0 0;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
`;

const NavMenu = () => {
  return (
    <Menu>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/top/post">Top</StyledNavLink>
      <StyledNavLink to="/new">New</StyledNavLink>
      <StyledNavLink to="/show">Show</StyledNavLink>
      <StyledNavLink to="/ask">Ask</StyledNavLink>
      <StyledNavLink to="/job">Job</StyledNavLink>
    </Menu>
  );
};

export default NavMenu;
