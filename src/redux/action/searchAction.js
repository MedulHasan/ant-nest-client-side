import {
    ADDRESS,
    ADULT_MINUS,
    ADULT_PLUS,
    ARRIVAL_DATE,
    BABIES_Minus,
    BABIES_Plus,
    CHILD_MINUS,
    CHILD_PLUS,
    DEPARTURE_DATE,
} from "../typeVariable";

export function addressAction(address) {
    return {
        type: ADDRESS,
        payload: address,
    };
}
export function arrivalDateAction(arrivalDate) {
    return {
        type: ARRIVAL_DATE,
        payload: arrivalDate,
    };
}
export function departureDateAction(departureDate) {
    return {
        type: DEPARTURE_DATE,
        payload: departureDate,
    };
}

export function countAdultMinus(adult) {
    return {
        type: ADULT_MINUS,
        payload: adult,
    };
}
export function countAdultPlus(adult) {
    return {
        type: ADULT_PLUS,
        payload: adult,
    };
}
export function countChildMinus(child) {
    return {
        type: CHILD_MINUS,
        payload: child,
    };
}
export function countChildPlus(child) {
    return {
        type: CHILD_PLUS,
        payload: child,
    };
}
export function countBabiesMinus(babies) {
    return {
        type: BABIES_Minus,
        payload: babies,
    };
}
export function countBabiesPlus(babies) {
    return {
        type: BABIES_Plus,
        payload: babies,
    };
}
