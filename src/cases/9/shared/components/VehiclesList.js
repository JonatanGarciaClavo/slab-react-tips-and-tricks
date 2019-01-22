import React from 'react';
import '../styles/components/VehiclesList.css';
import VehicleCard from './VehicleCard';

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

export default VehiclesList;
