import React from 'react';
import { connect } from 'react-redux';
import './shared/styles/components/App.css';
import FiltersList from './shared/components/FiltersList';
import VehiclesList from './shared/components/VehiclesList';
import Loader from './shared/components/Loader';
import Error from './shared/components/Error';
import { vehiclesFetchData } from './shared/actions/vehicles';
import filteredVehicles from './shared/selectors/vehicles';
import { setFilter } from './shared/actions/filters';

class DevCase extends React.Component {
  // Fetch initial data
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { loading, error, vehicles, filters, handleFilterChange } = this.props;

    // Renders Loading component while fetching
    // Renders Error component if error status
    // Renders the container components when fetch is successful
    return (
      <div>
        {error ? (
          <Error />
        ) : loading ? (
          <Loader />
        ) : (
          <div>
            <FiltersList
              vehicles={vehicles}
              filters={filters}
              onFilterChange={handleFilterChange}
            />
            <VehiclesList vehicles={vehicles} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.vehicles.error,
    loading: state.vehicles.loading,
    vehicles: filteredVehicles(state.vehicles.vehicles, state.filters),
    filters: state.filters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(vehiclesFetchData()),
    handleFilterChange: (id, value) => dispatch(setFilter(id, value)),
  };
};

const Dev = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DevCase);

Dev.title = 'DevCase Sytac';

export default Dev;
