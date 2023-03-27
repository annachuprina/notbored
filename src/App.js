import './App.css';
import {useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'
import store from './redux/store'
import {HashRouter} from 'react-router-dom'
import Main from "./presenters/mainPresenter"
import { getCurrentUserAction } from './redux/actions/loginAction'
import {fetchFavoriteFromFirebaseAction} from "./redux/actions/updateFavoritesAction"

//store.dispatch(fetchFavoriteFromFirebaseAction());

function App() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrentUserAction())
    dispatch(fetchFavoriteFromFirebaseAction(user.currentUser.uid))
  }, [dispatch])
  return (
    <HashRouter>
        <Main user={user}/>
    </HashRouter>
  );
}

export default App;