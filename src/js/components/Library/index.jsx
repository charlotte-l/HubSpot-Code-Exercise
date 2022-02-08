import React, { useCallback, useEffect, useState, useReducer } from "react";
import Filters from "../Filters";
import ItemCard from "../ItemCard";
import NoLibraryState from "./NoLibraryState";
import NoResultsState from "./NoResultsState";
import applyFilters from "./utils";

const initialState = {
  genre: [],
  year: [],
  mediaType: "",
  searchQuery: "",
};

const init = (state) => state;

const reducer = (state, action) => {
  switch (action.type) {
    case "setGenre":
      return { ...state, genre: action.payload };
    case "setYear":
      return { ...state, year: action.payload };
    case "setMediaType":
      return { ...state, mediaType: action.payload };
    case "setMediaQuery":
      return { ...state, searchQuery: action.payload };
    case "setInitialState":
      return state !== initialState ? init(initialState) : state;
    default:
      return initialState;
  }
};

function Library() {
  const [isLoading, setIsLoading] = useState(true);
  const [libraryData, setLibraryData] = useState([]);
  const [filteredLibraryData, setFilteredLibraryData] = useState([]);
  const [filterState, dispatch] = useReducer(reducer, initialState, init);

  const fetchLibraryData = useCallback(async () => {
    const result = await fetch(
      "https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data/data.json"
    );

    if (result.status === 200) {
      const { media } = await result.json();
      media.sort((a, b) => (a.title > b.title ? 1 : -1)); // sort by title attribute
      setLibraryData(media);
      setFilteredLibraryData(media);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    // fetch library data on first render
    fetchLibraryData();
  }, [fetchLibraryData]);

  useEffect(() => {
    // apply filters to media library
    if (libraryData.length > 0) {
      const filteredMedia = applyFilters(filterState, libraryData);
      setFilteredLibraryData(filteredMedia);
    }
  }, [filterState]);

  function renderContent() {
    if(libraryData.length > 0) {
      if(filteredLibraryData.length > 0) {
        return (
          <div className="library-grid" data-testid="library-content">
          {filteredLibraryData.map((item) => (
            <ItemCard key={item.title} data={item} />
          ))}
        </div>
        );
      }
      return (
        <NoResultsState />
      );
    } 
    return !isLoading && (
      <NoLibraryState action={fetchLibraryData} />
    );
  }

  return (
    <>
      <Filters
        className="library-header"
        data-testid="library-header"
        libraryData={libraryData}
        filteredLibraryData={filteredLibraryData}
        filterState={filterState}
        dispatch={dispatch}
      />
      <main>
        { renderContent() }
      </main>
    </>
  );
}

export default Library;

