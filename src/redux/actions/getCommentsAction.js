import * as constants from '../const';
import { database } from '../../assets/firebase'

const REF="activityGenerator"

export const getCommentsAction = (activityId) => {

    return dispatch => {
        dispatch({type: constants.GET_COMMENT})
        database.ref(REF + "/" +  activityId + "/comments")
                .on("value", (data) => {
                    dispatch({
                        type: constants.GET_COMMENT_SUCCESS,
                        payload: data.val() || {}
                    });

                })
        }
    }

