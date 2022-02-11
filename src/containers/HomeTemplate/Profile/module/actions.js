import { UPDATE_PROFILE} from "./contants"
import api from "utils/ApiUtils"

export const actUpdateProfile = () => {
    return (dispatch) => {
        api 
        .post("QuanLyNguoiDung/ThongTinTaiKhoan")
        .then((result)=>{
            console.log(result.data)
            dispatch(actUpdateProfileSuccess(result.data.content))
        })
        .catch((error)=>{
            console.log(error)
        })
    }
   
}

const actUpdateProfileSuccess = (data) => {
    return {
        type:UPDATE_PROFILE,
        payload:data
    }
}