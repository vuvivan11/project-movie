import * as ActionType from "./constants";

import { apiAdmin } from "./../../../../utils/apiUtils"

const actLoginRequest = () => {
    return {
        type: ActionType.LOGIN_REQUEST
    }
}

const actLoginSuccess = (data) => {
    return {
        type: ActionType.LOGIN_SUCCESS,
        payload: data
    }
}

const actLoginFailed = (error) => {
    return {
        type: ActionType.LOGIN_FAILED,
        payload: error
    }
}

export const actLoginApi = (user, history) => {
    return (dispatch) => {
        dispatch(actLoginRequest());
        apiAdmin
            .post("QuanLyNguoiDung/DangNhap", user)
            .then((result) => {
                // kiểm tra mã loại người dùng
                if (result.data.content.maLoaiNguoiDung === "KhachHang") {
                    return Promise.reject({
                        response: {
                            data: {
                                content: "Tài khoản bạn không có quyền truy cập"
                            }
                        }
                    })
                }

                // lưu thông tin user vào localstorage
                localStorage.setItem("UserAdmin", JSON.stringify(result.data.content))
                // chuyển trang
                history.replace("/dashboard")
                dispatch(actLoginSuccess(result.data.content))
            })
            .catch((error) => {
                dispatch(actLoginFailed(error))
            })
    }
}
