import React from "react";
import EmptyState from "../common/EmptyState";
import Space from "../../../images/space.svg"; // image from undraw.co

function NoResultsState() {
  return (
    <EmptyState
      illustration={Space}
      heading="No results found"
      caption="Sorry, no results were found for your search criteria. Try removing some filters to see more&nbsp;results."
    />
  );
}

export default NoResultsState;
