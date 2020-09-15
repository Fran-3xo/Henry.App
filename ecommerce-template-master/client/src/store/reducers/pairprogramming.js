import { ppActionTypes } from '../actions/pairprogramming.js';


const initialState = {
    equipo: {}
};

export const pairProgramingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ppActionTypes.GET_PP:
            return {
                ...state,
                equipo: action.payload
            }
        default:
            return state
    }
}