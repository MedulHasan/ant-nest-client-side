import { SUCCESS_ALERT, ERROR_ALERT, INFO_ALERT } from "../typeVariable";

export function successAlert(success) {
    return {
        type: SUCCESS_ALERT,
        payload: success,
    };
}
export function errorAlert(error) {
    return {
        type: ERROR_ALERT,
        payload: error,
    };
}
export function infoAlert(info) {
    return {
        type: INFO_ALERT,
        payload: info,
    };
}
