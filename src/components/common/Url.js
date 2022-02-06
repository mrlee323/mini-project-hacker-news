const Url = (url) => {
  const urlEnd = url.lastIndexOf(
    'com' || 'io' || 'so' || 'tech' || 'hr' || 'co' || 'work' || 'me' || 'site',
  );
  const urlFistIndex = url.includes('www') ? 12 : 8;

  const urlLastIndex =
    (url.includes('io' || 'so' || 'hr' || 'co' || 'me') && urlEnd + 3) ||
    (url.includes('com') && urlEnd + 4) ||
    (url.includes('tech' || 'work' || 'site') && urlEnd + 5);

  const result = url.slice(urlFistIndex, urlLastIndex);
  return result;
};

export default Url;
