import React from 'react';
import '../styles/components/VehicleCard.css';

export const VehicleCard = props => {
  const { brand, colors, img, type } = props;

  const styles = {
    background: `url(${img}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  // Renders the data for a specific vehicle
  return (
    <div className="card-container">
      <div className="card-info-wrapper">
        <div className="image-placeholder">
          <div className="image-container" style={styles} />
        </div>
        <div className="info-container">
          <h3>{brand}</h3>
          <p>{type}</p>
          <p>Colors:</p>
          <div>
            {colors.map((color, index) => (
              <div className="color-shape" key={index} style={{ backgroundColor: color }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
