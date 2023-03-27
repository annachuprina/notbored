import * as constants from '../const';
import { database } from '../../assets/firebase';

const REF="activityGenerator";

export const setRatingAction = (activityId, userId, rating) => {

    return dispatch => {
        database.ref(REF+"/" + activityId + "/ratings/" + userId).update({"rating": rating})
        .then(_ => {
            dispatch({
                type: constants.ADD_RATING_SUCCESS,
                payload: {rating}
            });
        })
        .catch((error) => {
            dispatch({
                type:constants.ADD_RATING_ERROR,
                payload: error
            });
        })
    }
}