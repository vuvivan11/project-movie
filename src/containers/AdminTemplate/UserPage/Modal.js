import React, { useState, useEffect, useRef } from 'react';
import { actAddUserApi, actUpdateUserApi } from "./modules/action";
import { useSelector, useDispatch } from "react-redux";


export default function Modal(props) {
  let userEdit = useSelector(state => state.listUserReducer.userEdit)

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
    hoTen: ""
  })

  const closeModal = useRef()
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    })
  }

  useEffect(() => {
    if (userEdit) {
      setState({
        taiKhoan: userEdit.taiKhoan,
        matKhau: userEdit.matKhau,
        email: userEdit.email,
        soDt: userEdit.soDt,
        hoTen: userEdit.hoTen,
        maNhom: userEdit.maNhom,
        maLoaiNguoiDung: userEdit.maLoaiNguoiDung,
      })
    } else {
      setState({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang",
        hoTen: ""
      })
    }
  }, [userEdit])

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userEdit) {
      dispatch(actUpdateUserApi(state))
    } else {
      dispatch(actAddUserApi(state));
    }
    closeModal.current.click()
  }

  return (
    <div
      className="modal fade"
      id="modelIdUser"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{userEdit ? "EDIT USER" : "ADD USER"}</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              ref={closeModal}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" name='taiKhoan' value={state.taiKhoan} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" name='hoTen' value={state.hoTen} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" name='email' value={state.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" name='matKhau' value={state.matKhau} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" className="form-control" name='soDt' value={state.soDt} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Group</label>
                <select className="form-control" name='maNhom' value={state.maNhom} onChange={handleChange}>
                  <option>GP01</option>
                  <option>GP02</option>
                  <option>GP03</option>
                  <option>GP04</option>
                </select>
              </div>
              <div className="form-group">
                <label>Type</label>
                <select className="form-control" name='maLoaiNguoiDung' value={state.maLoaiNguoiDung} onChange={handleChange} >
                  <option>QuanTri</option>
                  <option>KhachHang</option>
                </select>
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

