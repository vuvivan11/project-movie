import * as ActionType from "./constants"
import { apiHome } from "../../../../utils/apiUtils";

export const actListCinema = () => {
    return dispatch => {
        apiHome
            .get("QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
            .then((result) => {
                dispatch(actListCinemaSuccess(result.data.content))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

const actListCinemaSuccess = (data) => {
    return {
        type: ActionType.RENDER_MENU_CINEMA,
        payload: data
    }
}