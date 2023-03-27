import * as constants from '../const';

const initState = {
    comment: "",
    loading: false,
    error: false
};

export const setCommentReducer = (state = initState, action) => {
    switch(action.type) {
        case constants.ADD_COMMENT:
            return { 
                loading: true,
                ...state
            }
        case constants.ADD_COMMENT_SUCCESS:
            return{
                loading: false,
                comment: action.payload
            }
        case constants.ADD_COMMENT_ERROR:
            return{
                loading: false,
                error: action.payload,
                comment: "",
            }
        default:
            return state
    }
}