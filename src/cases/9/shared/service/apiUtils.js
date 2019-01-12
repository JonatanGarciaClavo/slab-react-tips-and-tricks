import trafficMeister from '../service/index';

// Utils to fetch the vehicles data using the trafficMeister service
export function fetchVehicles() {
  return new Promise(function(resolve, reject) {
    trafficMeister.fetchData((error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}
