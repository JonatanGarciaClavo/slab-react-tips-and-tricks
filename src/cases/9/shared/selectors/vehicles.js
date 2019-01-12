// Selector that returns the visible vehicles filtered with the provided filter values
export default (vehicles, { type, brand, color }) => {
  return vehicles.filter(vehicle => {
    const typeMatch = type ? vehicle.type === type : true;
    const brandMatch = brand ? vehicle.brand === brand : true;
    const colorMatch = color ? vehicle.colors.indexOf(color) !== -1 : true;

    return typeMatch && brandMatch && colorMatch;
  });
};
