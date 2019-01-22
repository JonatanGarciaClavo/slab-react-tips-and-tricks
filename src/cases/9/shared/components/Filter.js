import React, { useCallback } from 'react';
import '../styles/components/Filter.css';

const Filter = ({ id, onFilterChange, label, selectedValue, options }) => {
  const handleFilterChange = useCallback(e => {
    onFilterChange(id, e.target.value);
  }, []);
  return (
    <div className="filter-container">
      <label>Filter by {label}</label>
      <select value={selectedValue} onChange={handleFilterChange}>
        <option value="">Show all</option>
        {options.map(option => {
          return (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default React.memo(Filter);
