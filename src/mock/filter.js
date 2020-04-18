const filterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `archive`
];

const generateRandomCount = () => Math.floor(Math.random() * 10);

const generateFilters = () => {
  return filterNames.map((filterName) => {
    return {
      name: filterName,
      count: generateRandomCount(),
    };
  });
};

export {generateFilters};
