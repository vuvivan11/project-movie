import { combineReducers } from "redux";
import loginApiRedecer from "./../containers/AdminTemplate/AuthPage/modules/reducer";
import listUserReducer from "../containers/AdminTemplate/UserPage/modules/reducer";
import listMovieReducer from "../containers/AdminTemplate/FilmsPage/modules/reducer";

const rootReducer = combineReducers({
    loginApiRedecer,
    listUserReducer,
    listMovieReducer,
})

export default rootReducer