import { ERROR_ALERT, INFO_ALERT, SUCCESS_ALERT } from "../typeVariable";

const initialState = {
    successAlert: false,
    successMessage: "",
    errorAlert: false,
    errorMessage: "",
    infoAlert: false,
    alertOpen: false,
};

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_ALERT:
            return {
                ...state,
                successAlert: action.payload,
                successMessage: action.successMsg,
                alertOpen: action.payload,
            };
        case ERROR_ALERT:
            return {
                ...state,
                errorAlert: action.payload,
                errorMessage: action.errorMsg,
                alertOpen: action.payload,
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
