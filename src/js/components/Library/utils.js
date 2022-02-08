// filter functions per attribute
// I'm not sure if it makes more sense to have the state belong to the library component
// or the filter component

const getIntersection = (a, ...arr) =>
  [...new Set(a)].filter((v) => arr.every((b) => b.includes(v)));

const filterByTitle = (filterState, data) => {
  if (!filterState.searchQuery) return data;

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().indexOf(filterState.searchQuery.toLowerCase()) >
      -1
  );
  return filteredData;
};

const filterByYear = (filterState, data) => {
  if (!filterState.year.length > 0) return data;

  const filteredData = data.filter((item) =>
    filterState.year.includes(item.year)
  );
  return filteredData;
};

const filterByMediaType = (filterState, data) => {
  if (!filterState.mediaType) return data;

  const filteredData = data.filter(
    (item) => item.type === filterState.mediaType
  );
  return filteredData;
};

const filterByGenre = (filterState, data) => {
  if (!filterState.genre.length > 0) return data;

  const filteredData = data.filter(
    (item) => getIntersection(item.genre, filterState.genre).length > 0
  );
  return filteredData;
};

// apply all filters to data sequentially
export default function applyFilters(filterState, data) {
  let filteredData = filterByTitle(filterState, data);
  filteredData = filterByMediaType(filterState, filteredData);
  filteredData = filterByYear(filterState, filteredData);
  filteredData = filterByGenre(filterState, filteredData);

  return filteredData;
}
