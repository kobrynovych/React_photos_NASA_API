import React from "react"
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { manifestFetch } from "../../api/api"
import { SET_MANIFEST } from "../actionTypes"
// import { nasaFetch } from '../../api/api'
// import { SET_ROVER } from "../actionTypes"

export function* manifestSaga({roverName}) {
    debugger

    // yield put({ type: 'SET_IS_LOADING'})
    try {
        // const response = yield call(geolocationFetch)
        const response = yield call(manifestFetch, roverName)
        debugger
        console.log(response.data);

        if (response.status === 200) {
            
            yield put({ type: SET_MANIFEST, payload: response.data.photo_manifest })
            // yield put({ type: SET_MANIFEST, payload: response.data.photo_manifest.name })

            // yield put({ type: SET_MANIFEST, payload: response.data.photo_manifest.landing_date })
            // yield put({ type: SET_MANIFEST, payload: response.data.photo_manifest.max_date })
            
            // yield put({ type: SET_MANIFEST, payload: response.data.photo_manifest.max_sol })

            // yield put({ type: SET_MANIFEST, payload: response.data.photo_manifest.status })
            // yield put({ type: SET_MANIFEST, payload: response.data.photo_manifest.total_photos })
            
            // yield put({ type: SET_MANIFEST, payload: response.data.photo_manifest.photos })  // []
            
            

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