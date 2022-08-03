import * as ActionType from "./constants";
import { apiAdmin } from "./../../../../utils/apiUtils";

const actListMovieRequest = () => {
    return {
        type: ActionType.LIST_FILM_REQUEST
    }
}

const actListMovieSuccess = (data) => {
    return {
        type: ActionType.LIST_FILM_SUCCESS,
        payload: data
    }
}

const actListMovieFailed = (error) => {
    return {
        type: ActionType.LIST_FILM_FAILED,
        payload: error
    }
}

export const actFetchListMovieApi = () => {
    return dispatch => {
        dispatch(actListMovieRequest())
        apiAdmin
            .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
            .then((result) => {
                dispatch(actListMovieSuccess(result.data.content))
            })
            .catch((error) => {
                dispatch(actListMovieFailed(error))
            })
    }
}

export const actDeleteMovieApi = (maPhim) => {
    return dispatch => {
        apiAdmin
            .delete(`QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
            .then((result) => {
                alert("Xóa thành công")
                dispatch(actFetchListMovieApi())
            })
            .catch((error) => {
                alert(error.response.data.content)
            })
    }
}

export const actGetKeyword = (keyword) => {
    return {
        type: ActionType.GET_KEYWORD,
        payload: keyword
    }
}