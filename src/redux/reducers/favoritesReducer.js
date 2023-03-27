import * as constants from '../const';

export const favoritesReducer = (state = {favorites: {}, error: false}, action) => {
    switch(action.type) {
        case constants.ADD_TO_FAVORITES:
            return { 
                ...state,
                loading: true,
                success: false,
                error: false
            }
        case constants.ADD_TO_FAVORITES_SUCCESS:
            return { 
                ...state,
                favorites: [
                    ...state.favorites, 
                    action.payload.activity
                ],
                loading: false,
                success: true,
                error: false
            }
        case constants.ADD_TO_FAVORITES_ERROR:
            return { 
                ...state,
                loading: false,
                success: false,
                error: "Activity is already in the list"
            }
        case constants.DELETE_FROM_FAVORITES:
            return { 
                ...state,
                favorites:  state.favorites.filter(favorite => ((favorite.key !== action.payload))),
                success: true,
                error: false
            }
        case constants.FETCH_FAVORITES_FROM_FIREBASE:
            return { 
                ...state,
                loading: true,
                favorites:  {},
                success: false,
                error: false
            }
        case constants.FETCH_FAVORITES_FROM_FIREBASE_SUCCESS:
            return { 
                ...state,
                loading: false,
                favorites:  action.payload,
                success: true,
                error: false
            }
        case constants.DELETE_FROM_FAVORITES_ERROR:
            return {
                ...state,
                loading: false,
                favorites:  {},
                success: false,
                error: action.payload,
            }
        default:
            return state
    }    
}
