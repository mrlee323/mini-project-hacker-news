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

export const daySort = (data, multiSort) => {
  const today = parseInt(Date.now() / 1000);
  const result = [];
  for (let i = 0; i < 7; i++) {
    const arr = data.filter(
      (item) =>
        item.time >= today - 86400 * (i + 1) && item.time <= today - 86400 * i,
    );
    multiSort === 'results'
      ? arr.sort((a, b) => b.time - a.time)
      : multiSort === 'comments'
      ? arr.sort((a, b) => b.descendants - a.descendants)
      : arr.sort((a, b) => b.score - a.score);
    arr.length !== 0 && result.push(arr);
  }

  return result;
};

export const weeklySort = (data, multiSort) => {
  const today = parseInt(Date.now() / 1000);
  const result = [];
  for (let i = 0; i < 4; i++) {
    const arr = data.filter(
      (item) =>
        item.time > today - 604800 * (i + 1) && item.time < today - 604800 * i,
    );
    console.log(arr);
    multiSort === 'results'
      ? arr.sort((a, b) => b.time - a.time)
      : multiSort === 'comments'
      ? arr.sort((a, b) => b.descendants - a.descendants)
      : arr.sort((a, b) => b.score - a.score);
    arr.length !== 0 && result.push(arr);
  }
  console.log(result);
  return result;
};
