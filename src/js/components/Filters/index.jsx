import React from "react";
import PropTypes from "prop-types";
import DropdownSelect from "../common/DropdownSelect";
import RadioButton from "../common/RadioButton";
import SearchBar from "../common/SearchBar";

function Filters(props) {
  const { className, libraryData, filteredLibraryData, filterState, dispatch } =
    props;

  // calculate list of unique filters from loaded library data
  const genreFilters =
    libraryData.length > 0
      ? Array.from(
          new Set(
            libraryData.reduce((prev, curr) => [...prev, ...curr.genre], [])
          )
        )
      : [];

  const yearFilters =
    libraryData.length > 0
      ? filterState.genre.length > 0
        ? Array.from(new Set(filteredLibraryData.map((item) => item["year"])))
        : Array.from(new Set(libraryData.map((item) => item["year"])))
      : [];

  return (
    <header className={className}>
      <div>
        <div className="filter-dropdowns">
          <DropdownSelect
            label="Genre"
            filters={genreFilters}
            filterState={filterState.genre}
            onChange={(e) => {
              dispatch({ type: "setGenre", payload: e });
            }}
          />
          <DropdownSelect
            label="Year"
            filters={yearFilters}
            filterState={filterState.year}
            onChange={(e) => {
              dispatch({ type: "setYear", payload: e });
            }}
          />
        </div>
        <fieldset className="filter-toggles">
          <legend>Media Type</legend>
          <RadioButton
            label="movie"
            filterState={filterState.mediaType}
            onChange={(e) => {
              dispatch({ type: "setMediaType", payload: e });
            }}
          />
          <RadioButton
            label="book"
            filterState={filterState.mediaType}
            onChange={(e) => {
              dispatch({ type: "setMediaType", payload: e });
            }}
          />
        </fieldset>
      </div>
      <div className="flex-column">
        <SearchBar
          label="Search through library content"
          filterState={filterState.searchQuery}
          onChange={(e) => dispatch({ type: "setMediaQuery", payload: e })}
        />
        <button
          type="button"
          className="btn-link"
          onClick={() => dispatch({ type: "setInitialState" })}
        >
          Clear Filters
        </button>
      </div>
    </header>
  );
}

export default Filters;

Filters.propTypes = {
  className: PropTypes.string,
  libraryData: PropTypes.arrayOf(PropTypes.object),
  filteredLibraryData: PropTypes.arrayOf(PropTypes.object),
  filterState: PropTypes.object,
  dispatch: PropTypes.func,
};
