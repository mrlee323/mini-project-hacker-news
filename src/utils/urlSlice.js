const urlSlice = (url) => {
  const urlArr = [
    '.com',
    '.io',
    '.so',
    '.tech',
    '.hr',
    '.co/',
    '.work',
    '.me',
    '.site',
    '.org',
    '.info',
    '.link',
    '.edu',
    '.email',
    '.dev',
    '.net',
    '.app',
    '.gallery',
    '.de/',
    '.blog',
    '.xyz',
    '.us',
    '.gov',
    '.ca/',
    '.in/',
    '.uk/',
    '.it/',
    '.bot',
  ];

  let urlLastIndex = url.length;
  urlArr.map(
    (str) =>
      url.indexOf(str) !== -1 &&
      (str === ('.co/' || '.de/')
        ? (urlLastIndex = url.indexOf(str) + 3)
        : (urlLastIndex = url.indexOf(str) + str.length)),
  );

  const urlFistIndex = url.includes('www') ? 12 : 8;

  const result = url.slice(urlFistIndex, urlLastIndex);
  return result;
};

export default urlSlice;

//  const urlLastIndex =
//    (url.includes('com' || 'org' || 'edu') && urlEnd + 4) ||
//    (url.includes('io' || 'so' || 'hr' || 'co' || 'me') && urlEnd + 3) ||
//    (url.includes('tech' || 'work' || 'site' || 'info' || 'link') && urlEnd + 5);
// let urlLastIndex = 0;
// urlArr.map((str) => (urlLastIndex += urlEnd + str.length));

// const urlLastIndex =
//   (url.includes('com' || 'org' || 'edu') && urlEnd + 4) ||
//   (url.includes('io' || 'so' || 'hr' || 'co' || 'me') && urlEnd + 3) ||
//   (url.includes('tech' || 'work' || 'site' || 'info' || 'link') &&
//     urlEnd + 5);

// let urlLastIndex = 0;
// for (let i = 0; i< 500; i++){
//   if (url.includes(urlArr[i])) {
//     if(urlArr[i]===)
//   }
// }

// urlArr.map(
//   (str) =>
//     url.includes(str) &&
//     (((str === '.com' || '.org' || '.edu') && (urlLastIndex += urlEnd + 4)) ||
//       ((str === '.io' || '.so' || '.hr' || '.co' || '.me') &&
//         (urlLastIndex += urlEnd + 3)) ||
//       ((str === '.tech' || '.work' || '.site' || '.info' || '.link') &&
//         (urlLastIndex += urlEnd + 5))),
// );
