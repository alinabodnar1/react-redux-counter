import { initialState } from "./initialState";
import { INCREMENT, DECREMENT, SETSTEP } from "./types";

export const counterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case INCREMENT:
            return {
                ...state,
                total: state.total + payload
            };
        
        case DECREMENT:
            return {
                ...state,
                total: state.total - payload
            };
        case SETSTEP:

            return {
                ...state,
                step: payload
            };
        
        default:
            return state;
    }
}