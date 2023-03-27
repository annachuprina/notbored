import * as constants from '../const';
import { database } from '../../assets/firebase'

const REF="activityGenerator"

function calculateRating(data){
    var sum = 0;
    var amount = 0;
    if(data == undefined || data == null) return 0;
    for (const [key, value] of Object.entries(data)) {
        sum += value["rating"];
        amount ++;
    }
    if(amount > 0) return (Math.round(sum/amount));
    else return 0;
}

export const getRatingsAction = (activityId) => {

    return dispatch => {
        database.ref(REF+ "/" + activityId +"/ratings")
                .on("value", (data) => {
                    dispatch({
                        type: constants.GET_RATING_SUCCESS,
                        payload: calculateRating(data.val() || 0)
                    });
                })
        }
    }
