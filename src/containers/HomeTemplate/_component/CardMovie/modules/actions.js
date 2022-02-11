import * as ActionType from "./constants"
import api from "utils/ApiUtils"

export const actListMovie = () => {
    return(dispatch) => {
        api
            .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
            .then((result)=>{
                dispatch(actListMovieSuccess(result.data.content))
            })
    }
}

const actListMovieSuccess = (data) => {
    return {
        type:ActionType.RENDER_LIST_OF_MOVIE,
        payload:data
    }
}
