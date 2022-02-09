const replaceText = (str) => {
  const string =
    str &&
    str
      .replaceAll('&#x27;', "'")
      .replaceAll('&#x2F;', '/')
      .replaceAll('&quot;', '"')
      .replaceAll('<p>', '')
      .replaceAll('<pre>', '')
      .replaceAll('<code>', '')
      .replaceAll('</code>', '')
      .replaceAll('<a>', '')
      .replaceAll('</a>', '');

  return string;
};

export default replaceText;
