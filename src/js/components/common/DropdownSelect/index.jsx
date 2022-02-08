import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useDetectOutsideClick } from "../../../hooks/useDetectExternalClick";

function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

function DropdownSelect({ label, filters, filterState, onChange }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [checkedState, setCheckedState] = useState([]);

  useEffect(() => {
    // initially populate the checkbox array to match the number of filters available
    if (checkedState.length === 0) {
      setCheckedState(() => new Array(filters && filters.length).fill(false));
    }
  }, [filters]);

  useEffect(() => {
    // listen for reset of filterState to reset checkedState array
    if (filterState.length === 0) {
      setCheckedState(() => new Array(filters && filters.length).fill(false));
    }
  }, [filterState]);

  const handleOnChange = (position) => {
    // update the internal checkbox state map
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);

    // send filter state to parent with actual filter values
    const appliedFilters = [];
    updatedCheckedState.forEach((checkState, index) => {
      if (checkState === true) appliedFilters.push(filters[index]);
    });
    onChange(appliedFilters);
  };

  // trigger the dropdown menu on click
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="dropdown-wrapper">
      <button
        type="button"
        onClick={onClick}
        id={`btn-${label}`}
        className="btn-dropdown"
        aria-label={`Toggle ${label} filter`}
        aria-controls={`dropdown-${label}`}
      >
        <span>{label}</span>
        <span className="arrow" />
      </button>
      <div
        ref={dropdownRef}
        id={`dropdown-${label}`}
        className={`dropdown-menu ${isActive ? "active" : "inactive"}`}
        aria-expanded={isActive ? "true" : "false"}
      >
        <div className="dropdown-inner">
          {filters &&
            filters.length > 0 &&
            filters.sort().map((filter, index) => (
              <label key={filter} htmlFor={`checkbox-${filter}`}>
                <input
                  className="input-checkbox"
                  type="checkbox"
                  id={`checkbox-${filter}`}
                  aria-describedby={`btn-${label}`}
                  name={label}
                  value={filter}
                  checked={checkedState[index] || false}
                  onChange={() => handleOnChange(index)}
                />
                {capitalize(filter)}
              </label>
            ))}
        </div>
      </div>
    </div>
  );
}

export default DropdownSelect;

DropdownSelect.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  filterState: PropTypes.array,
  label: PropTypes.string,
  onChange: PropTypes.func,
};
