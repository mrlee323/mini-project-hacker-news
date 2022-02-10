export const getTime = () => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();

  return [hour, min];
};

export const agoTime = (time) => {
  const today = parseInt(Date.now() / 1000);
  if (today - time > 60 * 60 * 24 * 365) {
    const date = Math.floor((today - time) / (60 * 60 * 24 * 365));
    return `${date} years ago`;
  } else if (today - time > 60 * 60 * 24 * 31) {
    const date = Math.floor((today - time) / (60 * 60 * 24 * 31));
    return `${date} months ago`;
  } else if (today - time > 60 * 60 * 24) {
    const date = Math.floor((today - time) / (60 * 60 * 24));
    return `${date} days ago`;
  } else if (today - time > 60 * 60) {
    const date = Math.floor((today - time) / (60 * 60));
    return `${date} hours ago`;
  } else if (today - time > 60) {
    const date = Math.floor((today - time) / 60);
    return `${date} minutes ago`;
  } else if (today - time < 60) {
    const date = Math.floor(today - time);
    return `${date} seconds ago`;
  }
};
