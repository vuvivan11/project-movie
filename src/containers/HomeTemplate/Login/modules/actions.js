import * as ActionType from "./constants"
import api from "utils/apiUtils"

export const actLogin = (user,history) => {
    return(dispatch) => {
        dispatch(actLoginRequest());
        api
            .post("QuanLyNguoiDung/DangNhap",user)
            .then((result)=>{
                
                localStorage.setItem("USER_LOGIN",JSON.stringify(result.data.content));
                history.push("/")
                dispatch(actLoginSuccess(result.data.content))
            })
            .catch((error)=>{
                dispatch(actLoginFailed(error))
            })
    }
}

export const actGetInfoUser = () => {
    return (dispatch) => {
        api.post("QuanLyNguoiDung/ThongTinTaiKhoan")
            .then((result)=>{
                dispatch({
                    type:ActionType.GET_INFO_USER,
                    payload:result.data.content
                })  
            })
            .catch((error)=>{
                console.log(error)
            })     
    }
}


const actLoginRequest = () => {
    return {
        type:ActionType.LOGIN_REQUEST
    }
}

const actLoginSuccess = (data) => {
    return {
        type:ActionType.LOGIN_SUCCESS,
        payload:data
    }
}

const actLoginFailed = (error) => {
    return {
        type:ActionType.LOGIN_FAILED,
        payload:error
    }
}