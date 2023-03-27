import * as constants from '../const';
import { database } from '../../assets/firebase'

const REF="activityGenerator"

function getDate(cd){
    return cd.getDate() + "" + cd.getMonth() + "" + cd.getFullYear() + "" + cd.getHours() + "" + cd.getMinutes() + "" + cd.getSeconds();
}

export const addCommentAction = (activityId, user, comments) => {

    function getPseudo(email) {
        const pseudo = email.split("@")[0]
        return pseudo
      }

    var date = new Date()
    return dispatch => {
        database.ref(REF + "/" + activityId + "/comments/" + getDate(date) + "-" + user.uid).set({"comment": comments, "name": getPseudo(user.email), "userID": user.uid, "date": date.toLocaleString()})
            .then(_ => {
                        dispatch({
                            type: constants.ADD_COMMENT_SUCCESS,
                            payload: {activityId, comments}
                        });
                })
            .catch((error) => {
                dispatch({
                    type:constants.ADD_COMMENT_ERROR, 
                    payload: error
                });
            })
        }
    }

