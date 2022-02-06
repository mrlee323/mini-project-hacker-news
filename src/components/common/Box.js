import React from 'react';
import styled from 'styled-components';
import { ReactComponent as GitHubIcon } from '../../assets/github.svg';

const ListBoxBlock = styled.div`
  width: 21.9rem;
  margin: 0 auto 1.25rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.postColor};
  box-shadow: ${({ theme }) => theme.shadowColor};
  padding: 1.25rem 0.75rem 1.13rem;
  box-sizing: border-box;
  a {
    text-decoration: none;
  }
  h2 {
    color: ${({ theme }) => theme.textColor};
    font-size: 1.38rem;
    font-weight: 700;
    margin-bottom: 1.375rem;
  }
  h3 {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.textColor};
    margin-bottom: 1.375rem;
  }
  p {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.textColor};
    line-height: 1.5;
  }
`;

export const ListBox = ({ children, ...rest }) => {
  return <ListBoxBlock {...rest}>{children}</ListBoxBlock>;
};

const CardBoxBlock = styled.div`
  width: 10.6rem;
  height: 10.6rem;
  margin: 0 0 1.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.postColor};
  box-shadow: ${({ theme }) => theme.shadowColor};
  padding: 1rem 0.75rem 0;
  box-sizing: border-box;

  h3 {
    margin-top: 0.375rem;
    height: 2.7rem;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.textColor};
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 0.9rem;
  }
  a {
    text-decoration: none;
  }
`;

export const CardBox = ({ children, ...rest }) => {
  return (
    <CardBoxBlock {...rest}>
      <GitHubIcon />
      {children}
    </CardBoxBlock>
  );
};

export const BoxBlock = styled.div`
  width: 21.9rem;
  margin: 0 auto 1.75rem;
  background: ${({ theme }) => theme.postColor};
  box-shadow: ${({ theme }) => theme.shadowColor};
  border-radius: 6px;
`;

const AboutBoxBlock = styled.div`
  width: 21.9rem;
  margin: 0 auto 1.75rem;
  background: ${({ theme }) => theme.postColor};
  box-shadow: ${({ theme }) => theme.shadowColor};
  border-radius: 6px;
  .title {
    padding: 1.7rem 0 1rem 1.25rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    h2 {
      color: ${({ theme }) => theme.textColor};
      font-size: 1.5rem;
      font-weight: 700;
    }
    .nav {
      text-decoration: none;
      color: ${({ theme }) => theme.textColor};
      font-size: 1.5rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      h2 {
        margin-right: 0.3rem;
      }
    }
  }
  .content {
    font-size: 0.85rem;
    line-height: 1.25rem;
    letter-spacing: 0.001rem;
    color: ${({ theme }) => theme.textColor};
    padding: 0.5rem 1.25rem 1.25rem 1.25rem;
    box-sizing: border-box;
    a {
      color: ${({ theme }) => theme.textColor};
      &:visited {
        color: ${({ theme }) => theme.textColor};
      }
    }
  }
`;

export const AboutBox = ({ children, ...rest }) => {
  return <AboutBoxBlock {...rest}>{children}</AboutBoxBlock>;
};
