import React from 'react';
import '../styles/components/FiltersList.css';
import Filter from './Filter';
import { TYPE, BRAND, COLORS } from '../constants';

export class FiltersList extends React.Component {
  // Returns an array without duplicated types
  setTypesOptions = () => {
    return Array.from(new Set(this.props.vehicles.map(vehicle => vehicle.type)));
  };

  // Returns an array without duplicated brands
  setBrandsOptions = () => {
    return Array.from(new Set(this.props.vehicles.map(vehicle => vehicle.brand)));
  };

  // Returns an array without duplicated colors
  setColorsOptions = () => {
    return Array.from(new Set([].concat(...this.props.vehicles.map(vehicle => vehicle.colors))));
  };

  // Renders the filters container
  render() {
    const { type, brand, color } = this.props.filters;
    return (
      <div className="filter-list-container">
        <Filter
          filter={TYPE}
          options={this.setTypesOptions()}
          filterValue={type}
          onFilterChange={this.props.onFilterChange}
        />
        <Filter
          filter={BRAND}
          options={this.setBrandsOptions()}
          filterValue={brand}
          onFilterChange={this.props.onFilterChange}
        />
        <Filter
          filter={COLORS}
          options={this.setColorsOptions()}
          filterValue={color}
          onFilterChange={this.props.onFilterChange}
        />
      </div>
    );
  }
}

export default FiltersList;
