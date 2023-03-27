import { createStore, applyMiddleware, combineReducers } from 'redux'
import { getActivityReducer } from './reducers/getActivityReducer'
import {getRatingsReducer} from './reducers/getRatingsReducer'
import { getUserRatingsReducer } from './reducers/getUserRatingsReducer'
import { favoritesReducer } from './reducers/favoritesReducer'
import { userReducer } from './reducers/userReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { getCommentsReducer } from './reducers/getCommentsReducer'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const reducers = combineReducers({
    activity: getActivityReducer,
    favorites: favoritesReducer,
    comments: getCommentsReducer,
    ratings: getRatingsReducer,
    userRating: getUserRatingsReducer,
    user: userReducer
})

const store = createStore(
    reducers,
    composedEnhancer
);

export default store;