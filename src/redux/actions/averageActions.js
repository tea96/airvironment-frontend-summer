import * as types from "./actionTypes";
import * as measurementsApi from "../../api/measurements";
import { AVERAGE_MEASUREMENTS_LOAD_REQUEST } from "./actionTypes";

/**
 * Load average values requested.
 * @returns {{type: string}}
 */
export function loadAverageValuesRequest() {
  return { type: types.AVERAGE_MEASUREMENTS_LOAD_REQUEST };
}

/**
 * Average values successfully loaded action creator.
 * @param response
 * @returns {{response: *, type: string}}
 */
export function loadAverageValuesSuccess(response) {
  return { type: types.AVERAGE_MEASUREMENTS_LOAD_SUCCESS, response };
}

/**
 * Average values loading failed action creator.
 * @param error
 * @returns {{error: *, type: string}}
 */
export function loadAverageValuesFailure(error) {
  return { type: types.AVERAGE_MEASUREMENTS_LOAD_FAILURE, error };
}

/**
 * Fires a get request to fetch average values and returns the received response.
 * @param params
 * @returns {function(*): Promise<void>}
 */
export function loadAverageValues(params) {
  return function (dispatch) {
    dispatch(loadAverageValuesRequest());
    return measurementsApi
      .getMeasurements(params)
      .then((response) => {
        dispatch(loadAverageValuesSuccess(response));
      })
      .catch((error) => {
        dispatch(loadAverageValuesFailure(JSON.parse(error.message)));
        console.log("Error loading average values.");
      });
  };
}
