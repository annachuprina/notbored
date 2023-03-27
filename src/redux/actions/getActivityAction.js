import * as constants from '../const';
import { app, auth, database, firestore } from '../../assets/firebase'


const REF="activityGenerator"

const handleErrorACB = response => {
    if (!response.ok) { 
       throw response.statusText
    } else {
       return response.json()
    }
}

const handleNoActivityACB = response => {
    if (response.error) {
        throw response.error
    } else {
        return response
    }
}

export const getActivityAction = (participants, accessibility, price, type) => {
    const participantsNumber = participants === "random"? "" : participants
    const accessibilityQuery = accessibility === "random"? "": accessibility === "easy" ? 'minaccessibility=0&maxaccessibility=0.3' : accessibility === "medium" ? 'minaccessibility=0.4&maxaccessibility=0.7' : 'minaccessibility=0.8&maxaccessibility=1'
    const priceQuery = price === "random" ? "" : price === "free" ? `price=${0}` : 'minprice=0.1&maxprice=1'
    return dispatch => { 
        dispatch({type: constants.GET_ACTIVITY});
        fetch(type === "random" ? 
        `https://www.boredapi.com/api/activity?participants=${participantsNumber}&${accessibilityQuery}&${priceQuery}`:
        `https://www.boredapi.com/api/activity?participants=${participantsNumber}&${accessibilityQuery}&${priceQuery}&type=${type}`)
        .then(handleErrorACB)
        .then(handleNoActivityACB)
        .then(data => {
            setTimeout(() => {
                dispatch({ 
                    type: constants.GET_ACTIVITY_SUCCESS,
                    payload: data
                }) 
                return data
            }, 2000)
        })
        .catch((error) => 
            dispatch({
            type: constants.GET_ACTIVITY_ERROR, 
            payload: error
        }));
    };
};
