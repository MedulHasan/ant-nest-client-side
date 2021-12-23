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
                errorAlert: false,
                successMessage: action.successMsg,
                errorMessage: "",
                alertOpen: action.payload,
            };
        case ERROR_ALERT:
            return {
                ...state,
                successAlert: false,
                errorAlert: action.payload,
                successMessage: "",
                errorMessage: action.errorMsg,
                alertOpen: action.payload,
            };
        case INFO_ALERT:
            return {
                ...state,
                successAlert: false,
                errorAlert: false,
                successMessage: "",
                errorMessage: "",
                infoAlert: action.payload,
                alertOpen: action.payload,
            };
        default:
            return state;
    }
};

export default alertReducer;
