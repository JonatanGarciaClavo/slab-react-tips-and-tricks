import React from 'react';
import '../styles/components/FiltersList.css';
import Filter from './Filter';

const FiltersList = ({ filtersSettings, onFilterChange }) => (
  <div className="filter-list-container">
    {filtersSettings.map(({ id, options, selectedValue, inputLabel }) => (
      <Filter
        key={id}
        id={id}
        label={inputLabel}
        options={options}
        selectedValue={selectedValue}
        onFilterChange={onFilterChange}
      />
    ))}
  </div>
);

export default FiltersList;
