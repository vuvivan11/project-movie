import { UPDATE_PROFILE } from "./contants"
import { apiHome } from "../../../../utils/apiUtils";

export const actUpdateProfile = () => {
    return (dispatch) => {
        apiHome
            .post("QuanLyNguoiDung/ThongTinTaiKhoan")
            .then((result) => {
                console.log(result.data)
                dispatch(actUpdateProfileSuccess(result.data.content))
            })
            .catch((error) => {
                console.log(error)
            })
    }

}

const actUpdateProfileSuccess = (data) => {
    return {
        type: UPDATE_PROFILE,
        payload: data
    }
}