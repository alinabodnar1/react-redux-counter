import { createStore } from "redux";

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'increment':
            return {
                ...state,
                total: state.total + payload
            };
        
        case 'decrement':
            return {
                ...state,
                total: state.total - payload
            };
        case 'setStep':

            return {
                ...state,
                step: payload
            };
        default:
            return state;
    }
}
export const store = createStore(reducer, {
    total: 0,
    step: 1,
})