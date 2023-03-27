import * as constants from '../const';

const initState = {
    activity: [],
    loading:false,
    error:false
};

export const getActivityReducer = (state = initState, action) => {
    switch(action.type) {
        case constants.GET_ACTIVITY:
            return { 
                loading: true,
                activity: [],
                error: false
            }
        case constants.GET_ACTIVITY_SUCCESS:
            return{
                loading: false,
                activity: action.payload
            }
        case constants.GET_ACTIVITY_ERROR:
            return{
                loading: false,
                error: action.payload,
                activity: [],
            }
        default:
            return state
    }
    
}