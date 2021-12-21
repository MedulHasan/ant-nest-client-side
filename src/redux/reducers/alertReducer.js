import { ERROR_ALERT, INFO_ALERT, SUCCESS_ALERT } from "../typeVariable";

const initialState = {
    successAlert: false,
    errorAlert: false,
    infoAlert: false,
    alertOpen: false,
};

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_ALERT:
            return {
                ...state,
                successAlert: action.payload,
            };
        case ERROR_ALERT:
            return {
                ...state,
                errorAlert: action.payload,
            };
        case INFO_ALERT:
            return {
                ...state,
                infoAlert: action.payload,
                alertOpen: action.payload,
            };
        default:
            return state;
    }
};

export default alertReducer;
