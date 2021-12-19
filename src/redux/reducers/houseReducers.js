import {
    ADULT_MINUS,
    ADULT_PLUS,
    CHILD_MINUS,
    CHILD_PLUS,
    BABIES_Minus,
    BABIES_Plus,
    FETCH_FAILED,
    FETCH_REQUEST,
    FETCH_SUCCESS,
    ADDRESS,
    ARRIVAL_DATE,
    DEPARTURE_DATE,
} from "../typeVariable";

const initialState = {
    loading: false,
    houses: [],
    error: "",
    searchHouse: {
        address: "",
        arrivalDate: new Date(),
        departureDate: new Date(),
        adult: 0,
        child: 0,
        babies: 0,
    },
};
function houseReducers(state = initialState, action) {
    switch (action.type) {
        case FETCH_REQUEST: {
            const newState = {
                ...state,
                loading: true,
            };
            return newState;
        }
        case FETCH_SUCCESS: {
            const newState = {
                ...state,
                loading: false,
                houses: action.payload,
                error: "",
            };
            return newState;
        }
        case FETCH_FAILED: {
            const newState = {
                ...state,
                loading: false,
                house: [],
                error: action.payload,
            };
            return newState;
        }
        case ADDRESS: {
            const newAddress = {
                ...state,
                searchHouse: {
                    ...state.searchHouse,
                    address: action.payload,
                },
            };
            return newAddress;
        }
        case ARRIVAL_DATE: {
            const newAddress = {
                ...state,
                searchHouse: {
                    ...state.searchHouse,
                    arrivalDate: action.payload,
                },
            };
            return newAddress;
        }
        case DEPARTURE_DATE: {
            const newAddress = {
                ...state,
                searchHouse: {
                    ...state.searchHouse,
                    departureDate: action.payload,
                },
            };
            return newAddress;
        }
        case ADULT_MINUS: {
            const newAdult = {
                ...state,
                searchHouse: {
                    ...state.searchHouse,
                    adult:
                        state.searchHouse.adult <= 0
                            ? 0
                            : state.searchHouse.adult - 1,
                },
            };
            return newAdult;
        }
        case ADULT_PLUS: {
            const newAdult = {
                ...state,
                searchHouse: {
                    ...state.searchHouse,
                    adult: state.searchHouse.adult + 1,
                },
            };
            return newAdult;
        }
        case CHILD_MINUS: {
            const newChild = {
                ...state,
                searchHouse: {
                    ...state.searchHouse,
                    child:
                        state.searchHouse.child <= 0
                            ? 0
                            : state.searchHouse.child - 1,
                },
            };
            return newChild;
        }
        case CHILD_PLUS: {
            const newChild = {
                ...state,
                searchHouse: {
                    ...state.searchHouse,
                    child: state.searchHouse.child + 1,
                },
            };
            return newChild;
        }
        case BABIES_Minus: {
            const newBabies = {
                ...state,
                searchHouse: {
                    ...state.searchHouse,
                    babies:
                        state.searchHouse.babies <= 0
                            ? 0
                            : state.searchHouse.babies - 1,
                },
            };
            return newBabies;
        }
        case BABIES_Plus: {
            const newBabies = {
                ...state,
                searchHouse: {
                    ...state.searchHouse,
                    babies: state.searchHouse.babies + 1,
                },
            };
            return newBabies;
        }
        default:
            return state;
    }
}

export default houseReducers;
