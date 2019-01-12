import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/Filter.css';
import { changeTypeFilter, changeBrandFilter, changeColorFilter } from '../actions/filters';

class Filter extends React.Component {
  // Handles the change of the filter value
  // Dispatches the correct action creator for the filter provided
  onChangeFilter = e => {
    switch (this.props.filter) {
      case 'type':
        this.props.changeTypeFilter(e.target.value);
        break;
      case 'brand':
        this.props.changeBrandFilter(e.target.value);
        break;
      case 'color':
        this.props.changeColorFilter(e.target.value);
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
          onChange={this.onChangeFilter}
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
        {this.props.filterValue && <button onClick={this.onChangeFilter}>Clear filter</button>}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeTypeFilter: value => dispatch(changeTypeFilter(value)),
    changeBrandFilter: value => dispatch(changeBrandFilter(value)),
    changeColorFilter: value => dispatch(changeColorFilter(value)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Filter);
