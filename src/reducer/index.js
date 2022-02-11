import { combineReducers } from "redux";
import carouselReducer from "containers/HomeTemplate/_component/Carousel/modules/reducer";
import listMovieReducer from "containers/HomeTemplate/_component/CardMovie/modules/reducer";
import listCinemaReducer from "containers/HomeTemplate/InfoCinema/modules/reducer";
import detailMovieReducer from "containers/HomeTemplate/DetailsMoviePage/modules/reducer";
import loginReducer from "containers/HomeTemplate/Login/modules/reducer";
import showTimeInfoReducer from "containers/HomeTemplate/CheckOut/modules/reducer";
import  loadingReducer from "components/Loading/modules/reducer";
import registerReducer from "containers/HomeTemplate/Register/modules/reducer";
import updateProfileReducer from "containers/HomeTemplate/Profile/module/reducer";
import loginApiRedecer from "./../containers/AdminTemplate/AuthPage/modules/reducer";
import listUserReducer from "../containers/AdminTemplate/UserPage/modules/reducer";
import listMovieAdminReducer from "../containers/AdminTemplate/FilmsPage/modules/reducer";
const rootReducer = combineReducers({
    carouselReducer,
    listMovieReducer,
    listCinemaReducer,
    detailMovieReducer,
    loginReducer,
    showTimeInfoReducer,
    loadingReducer,
    registerReducer,
    updateProfileReducer,
    
    // admin
    loginApiRedecer,
    listUserReducer,
    listMovieAdminReducer,
    
})

export default rootReducer