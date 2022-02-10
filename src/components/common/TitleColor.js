import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const TitleColorBlock = styled.div`
  .title {
    color: ${({ theme }) => theme.textColor};
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 0.01rem;
    span {
      color: var(--orange);
    }
  }
  a {
    text-decoration: none;
  }
`;
const TitleColor = ({ title, url, ...rest }) => {
  const titleIndex = title.includes('HN:') && title.indexOf('HN:') + 3;
  const newTitle = title.slice(0, titleIndex);
  return (
    <TitleColorBlock {...rest}>
      {title.includes('HN:') ? (
        <a href={url} target="_blank" rel="noreferrer">
          <div className="title">
            <span>{newTitle}</span>
            {title.slice(titleIndex)}
          </div>
        </a>
      ) : (
        <a href={url} target="_blank" rel="noreferrer">
          <div className="title">{title}</div>
        </a>
      )}
    </TitleColorBlock>
  );
};

export const AskTitleColor = ({ title, link, ...rest }) => {
  const titleIndex = title.includes('HN:') && title.indexOf('HN:') + 3;
  const newTitle = title.slice(0, titleIndex);
  return (
    <TitleColorBlock {...rest}>
      {title.includes('HN:') ? (
        <NavLink to={`/comment/${link}`}>
          <div className="title">
            <span>{newTitle}</span>
            {title.slice(titleIndex)}
          </div>
        </NavLink>
      ) : (
        <NavLink to={`/comment/${link}`}>
          <div className="title">{title}</div>
        </NavLink>
      )}
    </TitleColorBlock>
  );
};

export default TitleColor;
