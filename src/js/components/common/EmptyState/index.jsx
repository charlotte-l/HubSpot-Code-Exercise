import React from "react";
import PropTypes from "prop-types";

function EmptyState({ heading, illustration, caption, action, actionLabel }) {
  return (
    <div className="empty-state">
      <img src={illustration} alt="" aria-hidden="true" />
      <h2>{heading}</h2>
      <p>{caption}</p>
      {action && actionLabel && (
        <button type="button" className="btn" onClick={action}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export default EmptyState;

EmptyState.propTypes = {
  heading: PropTypes.string,
  illustration: PropTypes.string,
  caption: PropTypes.string,
  action: PropTypes.func,
  actionLabel: PropTypes.string,
};
