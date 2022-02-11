export const sortData = (data, value) => {
  switch (value) {
    case 'comments':
      const result = [...data].sort((a, b) => b.descendants - a.descendants);
      return result;
    case 'points':
      const results = [...data].sort((a, b) => b.score - a.score);
      return results;
    default:
      return data;
  }
};
export const karmaSort = (user) => {
  const userNames = [];
  user.map((data) => userNames.push(data.id));
  return userNames;
};

export const timeSort = (data, value) => {
  switch (value) {
    case 'comments':
      const result = [...data].sort((a, b) => b.descendants - a.descendants);
      return result;
    case 'points':
      const results = [...data].sort((a, b) => b.score - a.score);
      return results;
    default:
      return data;
  }
};

export const daySort = (data, multiSort) => {
  const today = parseInt(Date.now() / 1000);
  const array = [];
  for (let i = 0; i < 10; i++) {
    const arr = data.filter(
      (item) =>
        item.time >= today - 86400 * (i + 1) && item.time <= today - 86400 * i,
    );
    multiSort === 'results'
      ? arr.sort((a, b) => b.time - a.time)
      : multiSort === 'comments'
      ? arr.sort((a, b) => b.descendants - a.descendants)
      : arr.sort((a, b) => b.score - a.score);
    arr.length !== 0 && array.push(arr);
  }
  const result = [].concat.apply([], array);
  return result;
};

export const weeklySort = (data, multiSort) => {
  const today = parseInt(Date.now() / 1000);
  const array = [];
  for (let i = 0; i < 4; i++) {
    const arr = data.filter(
      (item) =>
        item.time > today - 604800 * (i + 1) && item.time < today - 604800 * i,
    );
    multiSort === 'results'
      ? arr.sort((a, b) => b.time - a.time)
      : multiSort === 'comments'
      ? arr.sort((a, b) => b.descendants - a.descendants)
      : arr.sort((a, b) => b.score - a.score);
    arr.length !== 0 && array.push(arr);
  }
  const result = [].concat.apply([], array);
  return result;
};

// export const karmaDaySort = (data) => {
//   const today = parseInt(Date.now() / 1000);
//   const array = [];
//   for (let i = 0; i < 10; i++) {
//     const arr = data.filter(
//       (item) =>
//         item.time >= today - 86400 * (i + 1) && item.time <= today - 86400 * i,
//     );
//     arr.length !== 0 && array.push(arr)
//   }
//   const result = [].concat.apply([], array);
//   return result;
// };
