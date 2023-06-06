import { initialState } from "./initialState";

export const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
         // Ймовірні кейси
        case 'createTodo':
            return {
                ...state,
            };
        
        case 'updateTodo':
            return {
                ...state,
            };
        
        case 'deleteTodo':
            return {
                ...state,
            };
         default:
            return state;
    }
}