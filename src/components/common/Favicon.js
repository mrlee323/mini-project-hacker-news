import React from 'react';
import styled from 'styled-components';

const FaviconBlock = styled.div``;
const Favicon = ({ url, ...rest }) => {
  const urlEnd = url.lastIndexOf(
    'com' || 'io' || 'so' || 'tech' || 'hr' || 'co' || 'work' || 'me' || 'site',
  );

  const urlLastIndex =
    (url.includes('io' || 'so' || 'hr' || 'co' || 'me') && urlEnd + 3) ||
    (url.includes('com') && urlEnd + 4) ||
    (url.includes('tech' || 'work' || 'site') && urlEnd + 5);

  const urlSlice = url.slice(0, urlLastIndex);

  const googleUrl = `http://www.google.com/s2/favicons?domain=${urlSlice}`;

  const handleImgError = (e) => {
    e.target.src = googleUrl;
  };

  return (
    <FaviconBlock {...rest}>
      <img
        src={`${urlSlice}/favicon.ico`}
        onError={handleImgError}
        style={{ width: '3.25rem', height: '3.25rem' }}
        alt="favicon"
      />
    </FaviconBlock>
  );
};

export default Favicon;
