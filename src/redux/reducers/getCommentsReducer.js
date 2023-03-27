import * as constants from '../const';

const initState = {
    comments: {},
    loading: false,
    error: false
};

export const getCommentsReducer = (state = initState, action) => {
    switch(action.type) {
        case constants.GET_COMMENT:
            return { 
                loading: true,
                comments: {},
                ...state
            }
        case constants.GET_COMMENT_SUCCESS:
            return{
                loading: false,
                comments: action.payload
            }
        case constants.GET_COMMENT_ERROR:
            return{
                loading: false,
                error: action.payload,
                comments: {},
            }
        default:
            return state
    }
}