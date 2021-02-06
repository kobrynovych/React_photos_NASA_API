import React from "react"
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { nasaFetch } from '../../api/api'
import { SET_ROVER } from "../actionTypes"

export function* roverSaga() {
    debugger

    // yield put({ type: 'SET_IS_LOADING'})
    try {
        // const response = yield call(geolocationFetch)
        const response = yield call(nasaFetch)
        // console.log(response.data.photos);

        if (response.status === 200) {
            
            yield put({ type: SET_ROVER, payload: response.data.photos })

            // yield call(setWeatherSaga, response.data.city)
            // yield put({ type: 'SET_CITY', payload: response.data.city })
            // yield put({ type: 'SET_COUNTRY', payload: response.data.country_name })
        } else {
            // yield put({ type: 'SET_ERROR_MESS', payload: response.data.message })
        }
    }
    catch(error) {
        // yield put({ type: 'SET_ERROR_MESS', payload: error.response.data.message })
    }
        // yield put({ type: 'SET_IS_LOADING'})
}