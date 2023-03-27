import * as constants from '../const';
import { database } from '../../assets/firebase'

const REF="activityGenerator"

function getRating(data){
    if(data == undefined || data == null) return 
    //console.log(data["rating"])
    return data["rating"]
    
}

export const getUserRatingsAction = (activityId, user) => {

    return dispatch => {
        database.ref(REF+ "/" + activityId +"/ratings/" + user.uid)
            .on("value", (data) => {
                dispatch({
                    type: constants.GET_USER_RATING_SUCCESS,
                    payload: getRating(data.val())
                });
            })
    }
}