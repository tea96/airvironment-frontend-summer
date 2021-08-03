import * as types from "./actionTypes";
import * as measurementsApi from "../../api/measurements";

/**
 * Load measurements requested.
 * @returns {{type: string}}
 */
export function loadMeasurementsRequest() {
  return { type: types.MEASUREMENTS_LOAD_REQUEST };
}

/**
 * Measurements successfully loaded action creator.
 * @param response
 * @returns {{response: *, type: string}}
 */
export function loadMeasurementsSuccess(response) {
  return { type: types.MEASUREMENTS_LOAD_SUCCESS, response };
}

/**
 * Measurements loading failed action creator.
 * @param error
 * @returns {{error: *, type: string}}
 */
export function loadMeasurementsFailure(error) {
  return { type: types.MEASUREMENTS_LOAD_FAILURE, error };
}

/**
 * Fires a get request to fetch measurements and returns the received response.
 * @param params
 * @returns {function(*): Promise<void>}
 */
export function loadMeasurements(params) {
  return function (dispatch) {
    dispatch(loadMeasurementsRequest());
    return measurementsApi
      .getMeasurements(params)
      .then((response) => {
        console.log("hi");
        dispatch(loadMeasurementsSuccess(response));
      })
      .catch((error) => {
        dispatch(loadMeasurementsFailure(JSON.parse(error.message)));
        console.log("Error loading measurements.");
      });
  };
}

/**
 * Create measurement requested.
 * @returns {{type: string}}
 */
export function createMeasurementRequest() {
  return { type: types.MEASUREMENTS_CREATE_REQUEST };
}

/**
 * Measurement successfully created action creator.
 * @param response
 * @returns {{response: *, type: string}}
 */
export function createMeasurementSuccess(response) {
  return { type: types.MEASUREMENTS_CREATE_SUCCESS, response };
}

/**
 * Measurement creating failed action creator.
 * @param error
 * @returns {{error: *, type: string}}
 */
export function createMeasurementFailure(error) {
  return { type: types.MEASUREMENTS_CREATE_FAILURE, error };
}

/**
 * Fires a get request to create a new measurement and returns the received response.
 * @param params
 * @returns {function(*): Promise<void>}
 */
export function createMeasurement(params) {
  return function (dispatch) {
    dispatch(createMeasurementRequest());
    return measurementsApi
      .addMeasurement(params)
      .then((response) => {
        dispatch(createMeasurementSuccess(response));
      })
      .catch((error) => {
        dispatch(createMeasurementFailure(JSON.parse(error.message)));
        console.log("Error adding measurements.");
      });
  };
}

/**
 * Update measurement requested.
 * @returns {{type: string}}
 */
export function updateMeasurementRequest() {
  return { type: types.MEASUREMENTS_UPDATE_REQUEST };
}

/**
 * Measurement successfully updated action creator.
 * @param response
 * @returns {{response: *, type: string}}
 */
export function updateMeasurementSuccess(response) {
  return { type: types.MEASUREMENTS_UPDATE_SUCCESS, response };
}

/**
 * Measurement updating failed action creator.
 * @param error
 * @returns {{error: *, type: string}}
 */
export function updateMeasurementFailure(error) {
  return { type: types.MEASUREMENTS_UPDATE_FAILURE, error };
}

/**
 * Fires a get request to update measurement and returns the received response.
 * @param measurementId
 * @param measurement
 * @returns {function(*): Promise<void>}
 */
export function updateMeasurement(measurementId, measurement) {
  return function (dispatch) {
    dispatch(updateMeasurementRequest());
    return measurementsApi
      .editMeasurement(measurementId, measurement)
      .then((response) => {
        dispatch(updateMeasurementSuccess(response));
      })
      .catch((error) => {
        dispatch(updateMeasurementFailure(JSON.parse(error.message)));
        console.log("Error editing measurements.");
      });
  };
}

/**
 * Remove measurement requested.
 * @returns {{type: string}}
 */
export function removeMeasurementRequest() {
  return { type: types.MEASUREMENTS_REMOVE_REQUEST };
}

/**
 * Measurement successfully removed action creator.
 * @param response
 * @returns {{response: *, type: string}}
 */
export function removeMeasurementSuccess(response) {
  return { type: types.MEASUREMENTS_REMOVE_SUCCESS, response };
}

/**
 * Measurement removing failed action creator.
 * @param error
 * @returns {{error: *, type: string}}
 */
export function removeMeasurementFailure(error) {
  return { type: types.MEASUREMENTS_REMOVE_FAILURE, error };
}

/**
 * Fires a get request to remove measurement and returns the received response.
 * @param measurementId
 * @returns {function(*): Promise<void>}
 */
export function removeMeasurement(measurementId) {
  return function (dispatch) {
    dispatch(removeMeasurementRequest());
    return measurementsApi
      .removeMeasurement(measurementId)
      .then((response) => {
        dispatch(removeMeasurementSuccess(response));
      })
      .catch((error) => {
        dispatch(removeMeasurementFailure(JSON.parse(error.message)));
        console.log("Error deleting measurement.");
      });
  };
}
