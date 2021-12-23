import {
    FETCH_FAILED,
    FETCH_REQUEST,
    FETCH_SUCCESS,
    PAYMENT_CLIENT_SECRET,
} from "../typeVariable";

export function loadingRequest(loading) {
    return {
        type: FETCH_REQUEST,
        payload: loading,
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
export function fetchPaymentClientSecret(clientSecret) {
    return {
        type: PAYMENT_CLIENT_SECRET,
        payload: clientSecret,
    };
}
