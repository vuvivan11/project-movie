import * as ActionType from "./constants"
import api from "utils/ApiUtils"


export const actDetailMovie = (maPhim) => {
    return (dispatch) => {
        dispatch(actDetailMovieRequest());
        api
            .get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
            .then((result)=>{
                
                dispatch(actDetailMovieSucces(result.data.content))
            })
            .catch((error)=>{
                dispatch(actDetailMovieFailed(error))
            })
    }
}

const actDetailMovieRequest = () =>{
    return {
        type:ActionType.DETAIL_MOVIE_REQUEST,
    }
}

const actDetailMovieSucces = (data) => {
    return {
        type:ActionType.DETAIL_MOVIE_SUCCESS,
        payload:data,
    }
}

const actDetailMovieFailed = (error) => {
    return {
        type:ActionType.DETAIL_MOVIE_FAILED,
        payload:error,
    }
}