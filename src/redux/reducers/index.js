import React from 'react'
import { combineReducers } from 'redux';
import manifestReducer from './manifestReducer';
import roverReducer from './roverReducer';

const rootReducer = combineReducers({
    rover: roverReducer,
    manifest: manifestReducer,
});

export default rootReducer;