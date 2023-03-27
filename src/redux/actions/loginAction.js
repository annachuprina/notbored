import * as constants from '../const'
import { app, auth, database } from '../../assets/firebase'

const REF="activityGenerator"

function createUserACB(userAuth){
    const output = {
        email:userAuth.user.email,
        uid: userAuth.user.uid,
        favorites: {}
    }
    database.ref(REF+"/users/" + userAuth.user.uid).set(output)
    return output
}

export const getCurrentUserAction = () => {
    return dispatch => {
        dispatch({type: constants.LOGIN})
        auth.onAuthStateChanged(user => {
            dispatch({type:constants.GET_CURRENT_USER_SUCCESS, payload: user || {}})
            dispatch({type: constants.FETCH_FAVORITES_FROM_FIREBASE, payload: user})
        })
    }

}

export const loginAction = (email, password) => {
    return dispatch => {
        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                getCurrentUserAction()
            })
            .catch((error) => {
                dispatch({
                    type:constants.LOGIN_ERROR, 
                    payload: error
                });
            })
        }
    }

export const signInAction = (email, password, uid) => {
    return dispatch => { 
        dispatch({type: constants.LOGIN})
        auth.createUserWithEmailAndPassword(email, password)
        .then(createUserACB)
        .then(() => {
            getCurrentUserAction()
        })
        .catch((error) => {
            dispatch({
                type:constants.LOGIN_ERROR, 
                payload: error
            });
        })
        }
    }

export const logOutAction = () => {
    return dispatch => {
            dispatch({
                type: constants.LOGOUT,
                payload: {}
            })
            app.auth().signOut()
        }
    }

