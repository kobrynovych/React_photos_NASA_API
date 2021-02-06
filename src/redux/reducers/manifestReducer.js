import React from 'react'
import { ROVER_FETCH, SET_MANIFEST, SET_ROVER } from '../actionTypes/index';

const initialState = {
    // pending: false,
    // photo_manifest: {},
    
    name: '',
    landing_date: '',
    max_date: '',
    max_sol: 0,
    status: '',
    total_photos: 0,
    launch_date: '',
    photos: [],



    // error: ''
};

export default function manifestReducer(state = initialState, action) {
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
        case SET_MANIFEST:
            return {
                ...state,
                // pending: false,
                name: action.payload.name,
                landing_date: action.payload.landing_date,
                max_date: action.payload.max_date,
                max_sol: action.payload.max_sol,
                status: action.payload.status,
                total_photos: action.payload.total_photos,
                launch_date: action.payload.launch_date,
                photos: [...action.payload.photos],
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