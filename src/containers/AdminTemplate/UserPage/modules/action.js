import * as ActionType from "./constants";
import api from "./../../../../utils/apiUtils"

const actListUserRequest = () => {
    return {
        type: ActionType.LIST_USER_REQUEST
    }
}

const actListUserSuccess = (data) => {
    return {
        type: ActionType.LIST_USER_SUCCESS,
        payload: data
    }
}


const actListUserFailed = (error) => {
    return {
        type: ActionType.LIST_USER_FAILED,
        payload: error
    }
}


export const actFetchUserList = () => {
    return (dispatch) => {
        dispatch(actListUserRequest());
        api
            .get("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01")
            .then((result) => {
                dispatch(actListUserSuccess(result.data.content))
            })
            .catch((error) => {
                dispatch(actListUserFailed(error))
            })
    }
}

export const actDeleteUserApi = (user) => {
    return (dispatch) => {
        dispatch(actListUserRequest());
        api
            .delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`)
            .then((result) => {
                alert("Xóa thành công tài khoản " + user)
                dispatch(actFetchUserList())
            })
            .catch((error) => {
                alert(error.response.data.content)
                dispatch(actFetchUserList())
            })
    }
}

export const actAddUserApi = (user) => {
    return (dispatch) => {
        dispatch(actListUserRequest());
        api
            .post("QuanLyNguoiDung/ThemNguoiDung", user)
            .then((result) => {
                dispatch(actFetchUserList())
                alert("Thêm thành công tài khoản " + user.taiKhoan)
            })
            .catch((error) => {
                alert(error.response.data.content);
                dispatch(actFetchUserList())
            })
    }
}

export const actUpdateUserApi = (user) => {
    return dispatch => {
        dispatch(actListUserRequest());
        api
            .put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", user)
            .then((result) => {
                dispatch(actFetchUserList())
                alert("Cập nhập thành công tài khoản " + user.taiKhoan)
            })
            .catch((error) => {
                alert(error.response.data.content);
                dispatch(actFetchUserList())
            })
    }
}

export const actGetKeyword = (keyword) => {
    return {
        type: ActionType.GET_KEYWORD,
        payload: keyword
    }
}

export const actEditUser = (user) => {
    return {
        type: ActionType.EDIT_USER,
        payload: user
    }
}