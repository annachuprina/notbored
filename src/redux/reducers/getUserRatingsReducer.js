import * as constants from '../const';

const initState = {
    ratings: {},
    loading: false,
    error: false
};

export const getUserRatingsReducer = (state = initState, action) => {
    switch(action.type) {
        case constants.GET_USER_RATING:
            return { 
                loading: true,
                ...state
            }
        case constants.GET_USER_RATING_SUCCESS:
            return{
                loading: false,
                ratings: action.payload
            }
        case constants.GET_USER_RATING_ERROR:
            return{
                loading: false,
                error: action.payload,
                ratings: {},
            }
        default:
            return state
    }
}