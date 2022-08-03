import * as ActionType from "./constants"
import { apiHome } from "../../../../../utils/apiUtils"

export const actListMovie = () => {
    return (dispatch) => {
        apiHome
            .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
            .then((result) => {
                dispatch(actListMovieSuccess(result.data.content))
            })
    }
}

const actListMovieSuccess = (data) => {
    return {
        type: ActionType.RENDER_LIST_OF_MOVIE,
        payload: data
    }
}
