import React from 'react';
import styled, { css } from 'styled-components';
import urlSlice from '../../utils/urlSlice';

const UrlIconBlock = styled.div`
  .url-icon {
    background: #f5f5f5;
    border-radius: 0.8rem;
    font-size: 0.625rem;
    font-weight: 500;
    color: var(--orange);
    padding: 0.25rem 0.4rem 0.25rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    overflow: hidden;
    text-decoration: none;
  }
`;

const UrlIcon = ({ url, ...rest }) => {
  const newUrl = urlSlice(url);
  return (
    <UrlIconBlock {...rest} url={url}>
      <a href={url} target="_blank" rel="noreferrer" className="url-icon">
        {newUrl.length > 28 ? `${newUrl.slice(0, 24)}...` : newUrl}
      </a>
    </UrlIconBlock>
  );
};

export default UrlIcon;
