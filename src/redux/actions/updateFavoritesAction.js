import * as constants from '../const';
import 'firebase/compat/firestore';
import { app, auth, database, firestore } from '../../assets/firebase'

const REF="activityGenerator";

function findFavorite(activityKey, currentUserUid){
  database.ref(REF+"/users/"+currentUserUid+"/favorites/"+activityKey).on("value", (snapshot) =>{
    if (snapshot.val() != null || snapshot.val() != undefined)
      return true
    else
      return false
  })
  return false
}

export const addToFavoritesAction = (activity, currentUserUid) => async dispatch => {
    dispatch({type: constants.ADD_TO_FAVORITES})
    if (!findFavorite(activity.activity.key, currentUserUid)){
      database.ref(REF+"/users/"+currentUserUid+"/favorites/"+activity.activity.key).update(activity.activity)
      .then(() => {
        dispatch({
          type: constants.ADD_TO_FAVORITES_SUCCESS,
          payload: activity
        })
      })
      .catch((error) => {
        dispatch({
          type: constants.ADD_TO_FAVORITES_ERROR,
          payload: error
        })
      })
    }
    else{
      dispatch({
        type: constants.ADD_TO_FAVORITES_ERROR,
        payload: activity
      })
    }
  };

export const deleteFromFavoriteAction = (key, currentUserUid) => (dispatch) => {
  database.ref(REF+"/users/"+currentUserUid+"/favorites/"+key).remove()
  .then(() => {
    dispatch({
      type: constants.DELETE_FROM_FAVORITES,
      payload: key
    })
  })
  .catch((error) => {
    dispatch({
      type: constants.DELETE_FROM_FAVORITES_ERROR,
      payload: error
    })
  })
}

function convertSnapshotToArray(snapshot) {
  var returnArr = [];
  snapshot.forEach(function(subElement) {
      var item = subElement.val();
      item.key = subElement.key;
      returnArr.push(item);
  });

  return returnArr;
};

export const fetchFavoriteFromFirebaseAction = (currentUserUid) => {
  return dispatch => {
    dispatch({type: constants.FETCH_FAVORITES_FROM_FIREBASE})
    database.ref(REF+"/users/"+currentUserUid+"/favorites").on("value",
        function getCurrentUser (snapshot){
            dispatch({
                type:constants.FETCH_FAVORITES_FROM_FIREBASE_SUCCESS, 
                payload: convertSnapshotToArray(snapshot)|| {}
            });
        }
    )
}
}