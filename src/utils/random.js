import React from 'react';

const random = (data) => {
  const random = [];
  for (let i = 0; i < data.length; i++) {
    const count = Math.floor(Math.random() * data.length) + 1;
    random.push(count);
    if ([...new Set(random)].length === 5) {
      break;
    }
  }
  const randomArray = [...new Set(random)];
  return randomArray;
};
export default random;
