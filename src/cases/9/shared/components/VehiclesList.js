import React from 'react';
import { connect } from 'react-redux';
import '../styles/components/VehiclesList.css';
import VehicleCard from './VehicleCard';
import filteredVehicles from '../selectors/vehicles';

// Renders the list of vehicles visible
// Shows a message if no vehicles available
export const VehiclesList = props => (
  <div className="vehicles-list-container">
    <div className="vehicles-list-wrapper clearfix">
      {props.vehicles.length === 0 ? (
        <div>
          <span>No vehicles</span>
        </div>
      ) : (
        props.vehicles.map(vehicle => {
          return <VehicleCard key={vehicle.id} {...vehicle} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    vehicles: filteredVehicles(state.vehicles.vehicles, state.filters),
  };
};

export default connect(mapStateToProps)(VehiclesList);
