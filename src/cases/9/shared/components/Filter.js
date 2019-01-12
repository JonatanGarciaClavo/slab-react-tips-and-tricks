import React from 'react';
import '../styles/components/Filter.css';
import { TYPE, BRAND, COLORS } from '../constants';

class Filter extends React.Component {
  // Handles the change of the filter value
  // Dispatches the correct action creator for the filter provided
  handleFilterChange = e => {
    switch (this.props.filter) {
      case TYPE:
        this.props.onFilterChange(TYPE, e.target.value);
        break;
      case BRAND:
        this.props.onFilterChange(BRAND, e.target.value);
        break;
      case COLORS:
        this.props.onFilterChange(COLORS, e.target.value);
        break;
      default:
    }
  };

  // Renders the filter based in the filter and options props received
  // The filter will disable when one option is selected and the clear filter button will be visible
  // Clicking the clear filter button will return the filter to the initial status
  render() {
    return (
      <div className="filter-container">
        <label>Filter by {this.props.filter}</label>
        <select
          value={this.props.filterValue}
          onChange={this.handleFilterChange}
          disabled={this.props.filterValue}
        >
          <option value="">Show all</option>
          {this.props.options.map(option => {
            return (
              <option value={option} key={option}>
                {option}
              </option>
            );
          })}
        </select>
        {this.props.filterValue && <button onClick={this.handleFilterChange}>Clear filter</button>}
      </div>
    );
  }
}

export default Filter;
