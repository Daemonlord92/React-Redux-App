import { FETCH_DATA_START,
        FETCH_DATA_SUCCESS,
        FETCH_DATA_FAILURE } from "../actions/dataGrabber"

export const initialState = {
    data: null,
    isLoading: false,
    error: null
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_START:
            return{
                ...state,
                isLoading: true
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}