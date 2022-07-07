const fetchData = () => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(["apple", "orange"]);
    }, 200);
  });
};

module.exports = {
  fetchData,
};
