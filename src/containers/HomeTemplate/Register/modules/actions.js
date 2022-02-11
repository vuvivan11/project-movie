import { REGISTER_FAILED, REGISTER_SUCCESS } from "./contants";
import { actLogin } from "containers/HomeTemplate/Login/modules/actions";
import api from "utils/apiUtils"

export const actRegister = (user,history) => {
    return (dispatch) => {
        api
            .post("QuanLyNguoiDung/DangKy",user)
            .then((result)=>{
                console.log(result.data)
                localStorage.setItem("USER_LOGIN",JSON.stringify(result.data.content));
                dispatch(actRegisterSuccess(result.data.content))
                history.push("/")
                dispatch(actLogin(user,history))
            })
            .catch((error)=>{
                dispatch(actRegisterFail(error))
            })
    }
}

const actRegisterSuccess = (data) => {
    return {
        type:REGISTER_SUCCESS,
        payload:data
    }
}

const actRegisterFail = (error) => {
    return {
        type:REGISTER_FAILED,
        payload:error
    }
}