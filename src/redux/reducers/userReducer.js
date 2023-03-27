import * as constants from '../const';

const initState = {
    currentUser: {},
    loading: false,
    error: false
};

export const userReducer = (state = initState, action) => {
    switch(action.type) {
        case constants.LOGIN:
            return { 
                loading: true,
                currentUser: {},
                error: false,
            }
        case constants.LOGIN_SUCCESS:
            return{
                loading: false,
                currentUser: action.payload[0],
                error: false
            }
        case constants.LOGIN_ERROR:
            return{
                loading: false,
                error: action.payload,
                currentUser: {},
            }
        case constants.LOGOUT:
            return{
                currentUser: action.payload
            }
        case constants.GET_CURRENT_USER_SUCCESS:
            return{
                loading: false,
                currentUser: action.payload,
                error: false
            }
        default:
            return state
    }
    
}