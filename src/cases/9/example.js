import React from 'react';
import { connect } from 'react-redux';

import './shared/styles/components/App.css';
import FiltersList from './shared/components/FiltersList';
import VehiclesList from './shared/components/VehiclesList';
import Loader from './shared/components/Loader';
import Error from './shared/components/Error';

import { vehiclesFetchData } from './shared/state/vehicles/actions';
import { setFilter } from './shared/state/filters/actions';
import { getVehiclesFiltered } from './shared/state/vehicles/selectors';
import { generateFiltersSettings } from './shared/state/filters/selectors';

class DevCase extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { loading, error, vehicles, filtersSettings, handleFilterChange } = this.props;

    return (
      <div>
        {error ? (
          <Error />
        ) : loading ? (
          <Loader />
        ) : (
          <div>
            <FiltersList settings={filtersSettings} onFilterChange={handleFilterChange} />
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
    vehicles: getVehiclesFiltered(state.vehicles.vehicles, state.filters),
    filtersSettings: generateFiltersSettings(state.filters, state.vehicles.vehicles),
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
