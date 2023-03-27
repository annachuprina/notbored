import * as constants from '../const';

const initState = {
    rating: 0,
    loading: false,
    error: false
};

export const activityInteractionsReducer = (state = initState, action) => {
    switch(action.type) {
        case constants.ADD_RATING:
            return { 
                loading: true,
                ...state
            }
        case constants.ADD_RATING_SUCCESS:
            return{
                loading: false,
                comment: action.payload
            }
        case constants.ADD_RATING_ERROR:
            return{
                loading: false,
                error: action.payload,
                rating: 0,
            }
        default:
            return state
    }
}