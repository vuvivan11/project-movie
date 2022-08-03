import * as ActionType from "./constants"
import { apiHome } from "../../../../utils/apiUtils";


export const actDetailMovie = (maPhim) => {
    return (dispatch) => {
        dispatch(actDetailMovieRequest());
        apiHome
            .get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
            .then((result) => {

                dispatch(actDetailMovieSucces(result.data.content))
            })
            .catch((error) => {
                dispatch(actDetailMovieFailed(error))
            })
    }
}

const actDetailMovieRequest = () => {
    return {
        type: ActionType.DETAIL_MOVIE_REQUEST,
    }
}

const actDetailMovieSucces = (data) => {
    return {
        type: ActionType.DETAIL_MOVIE_SUCCESS,
        payload: data,
    }
}

const actDetailMovieFailed = (error) => {
    return {
        type: ActionType.DETAIL_MOVIE_FAILED,
        payload: error,
    }
}