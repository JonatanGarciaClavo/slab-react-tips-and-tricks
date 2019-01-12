import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/FiltersList.css';
import Filter from './Filter';
import filteredVehicles from '../selectors/vehicles';

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
        <Filter filter={'type'} options={this.setTypesOptions()} filterValue={type} />
        <Filter filter={'brand'} options={this.setBrandsOptions()} filterValue={brand} />
        <Filter filter={'color'} options={this.setColorsOptions()} filterValue={color} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    vehicles: filteredVehicles(state.vehicles.vehicles, state.filters),
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(FiltersList);
