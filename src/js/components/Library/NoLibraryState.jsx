import React from "react";
import PropTypes from "prop-types";
import EmptyState from "../common/EmptyState";
import Books from "../../../images/books.svg"; // image from undraw.co

function NoLibraryState({ action }) {
  return (
    <EmptyState
      illustration={Books}
      heading="Couldn't retrieve library data"
      caption="Sorry, the library data cannot currently be retrieved. Please wait a few moments and try&nbsp;again."
      action={action}
      actionLabel="Try again"
    />
  );
}

export default NoLibraryState;

NoLibraryState.propTypes = {
  action: PropTypes.func,
};
