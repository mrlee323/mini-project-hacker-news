import React from 'react';
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
`;
const TitleColor = ({ title, url, ...rest }) => {
  const titleIndex = title.includes('HN:') && title.indexOf('HN:') + 3;
  const newTitle = title.slice(0, titleIndex);
  return (
    <TitleColorBlock {...rest}>
      {title.includes('HN:') ? (
        <a href={url}>
          <div className="title">
            <span>{newTitle}</span>
            {title.slice(titleIndex)}
          </div>
        </a>
      ) : (
        <a href={url}>
          <div className="title">{title}</div>
        </a>
      )}
    </TitleColorBlock>
  );
};

export default TitleColor;
