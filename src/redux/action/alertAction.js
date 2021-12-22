import { SUCCESS_ALERT, ERROR_ALERT, INFO_ALERT } from "../typeVariable";

export function successAlert(success, successMessage) {
    return {
        type: SUCCESS_ALERT,
        payload: success,
        successMsg: successMessage,
    };
}
export function errorAlert(error, errorMessage) {
    return {
        type: ERROR_ALERT,
        payload: error,
        errorMsg: errorMessage,
    };
}
export function infoAlert(info) {
    return {
        type: INFO_ALERT,
        payload: info,
    };
}
