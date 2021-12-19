import { FETCH_FAILED, FETCH_REQUEST, FETCH_SUCCESS } from "../typeVariable";

export function fetchRequest() {
    return {
        type: FETCH_REQUEST,
    };
}
export function fetchSuccess(houses) {
    return {
        type: FETCH_SUCCESS,
        payload: houses,
    };
}
export function fetchFailed(error) {
    return {
        type: FETCH_FAILED,
        payload: error,
    };
}
