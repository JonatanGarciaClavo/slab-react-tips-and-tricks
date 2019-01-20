import React from 'react';
import '../styles/components/FiltersList.css';
import Filter from './Filter';

const FiltersList = ({ settings, onFilterChange }) => (
  <div className="filter-list-container">
    {settings.map(({ id, options, selectedValue, inputLabel }) => (
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
