import React from 'react'
import { ROVER_FETCH, SET_ROVER } from '../actionTypes/index';

const initialState = {
    // pending: false,
    rovers: [],  // 856 length
    // error: ''
};

export default function roverReducer(state = initialState, action) {
    switch (action.type) {
        // case FETCH_ROVERS_PENDING:
            // return {
            //     ...state,
            //     pending: true,
            //     error: '',
            //     rovers: []
            // };
        // case ROVER_FETCH:
        //     return {
        //         ...state,
        //         pending: false,
        //         rovers: action.payload
        //     };
        case SET_ROVER:
            return {
                ...state,
                // pending: false,
                rovers: action.payload,
                // rovers: []
            };
        // case FETCH_ROVERS_ERROR:
        //     return {
        //         ...state,
        //         pending: false,
        //         error: action.payload,
        //         rovers: []
        //     };
        default:
            return state;
    }
}