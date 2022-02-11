import React from 'react';
import { actDeleteUserApi, actEditUser } from "./modules/action";
import { useDispatch, useSelector } from "react-redux"

export default function UserItem(props) {
  const { user } = props
  const loading = useSelector(state => state.listUserReducer.loading);

  const dispatch = useDispatch();


  if (loading) {
    return <div>...loading</div>
  }

  return (
    <tr>
      <td>{user.hoTen}</td>
      <td>{user.taiKhoan}</td>
      <td>{user.email}</td>
      <td>{user.soDt}</td>
      <td>{user.maLoaiNguoiDung}</td>
      <td>
        <button
          className="btn btn-info mr-2"
          data-toggle="modal"
          data-target="#modelIdUser"
          onClick={() => {
            dispatch(actEditUser(user))
          }}
        >
          Edit
        </button>
      </td>
      <td><button className="btn btn-danger" onClick={() => {
        if (window.confirm("Bạn có muốn xóa tài khoản " + user.taiKhoan)) {
          dispatch(actDeleteUserApi(user.taiKhoan))
        }
      }}>Delete</button></td>
    </tr>
  );
}

