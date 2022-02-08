import React from "react";
import PropTypes from "prop-types";

function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

function RadioButton({ label, filterState, onChange }) {
  return (
    <div className="checkbox-inline">
      <label htmlFor={label}>
        <input
          type="radio"
          id={label}
          className="input-radio"
          name="media-type"
          value={label}
          checked={filterState === label}
          onChange={(e) => onChange(e.target.value)}
        />
        {capitalize(label)}
      </label>
    </div>
  );
}

export default RadioButton;

RadioButton.propTypes = {
  label: PropTypes.string,
  filterState: PropTypes.string,
  onChange: PropTypes.func,
};
