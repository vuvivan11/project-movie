import React,{useState} from 'react';
import { useDispatch} from 'react-redux';
import { actRegister } from './modules/actions';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGooglePlus,faFacebook,faTwitter} from '@fortawesome/free-brands-svg-icons'
import "./index.css"
import { useSelector } from 'react-redux';


export default function Register(props) {
 
  const error = useSelector((state)=> state.registerReducer.error)

  const dispatch = useDispatch()
  const [state,setState] = useState({
    taiKhoan:"",
    matKhau:"",
    email:"",
    soDt:"",
    maNhom:"GP01",
    hoTen:"",
  })

  
  const handleOnchange = (event) => {
    const {name,value} = event.target ;
    setState({
      ...state,
      [name] : value
    })
  }
  

  const handlelRegister = (event) => {
    event.preventDefault();
    dispatch(actRegister(state,props.history))
  }

  const noti = () => {
    return error && <div className='alert alert-danger'>{error.response.data.content}</div>
  }

  return <div className='loginUser'>
  <div className="container">
<div className="d-flex justify-content-center h-100">
  <div className="card">
    <div className="card-header">
      <h3>Register</h3>
      <div className="d-flex justify-content-end social_icon">
        <span><FontAwesomeIcon icon={faGooglePlus}></FontAwesomeIcon></span>
        <span><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></span>
        <span><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></span>               
      </div>
    </div>
    {noti()}
    <div className="card-body">
      <form onSubmit={handlelRegister} >
            <div className="form-group">
                <span>Tài khoản</span>
                <input type="text" className="form-control" name="taiKhoan" placeholder='Nhập tài khoản ' onChange={handleOnchange}  />
            </div>
            <div className="form-group">
                <span>Mật khẩu</span>
                <input type="password" className="form-control" name="matKhau" placeholder='Mật khẩu' onChange={handleOnchange} />
            </div>
            <div className="form-group">
                <span>Email</span>
                <input type="email" className="form-control" name="email" placeholder='Email' onChange={handleOnchange}/>
            </div>
            <div className="form-group">
                <span>Số điện thoại</span>
                <input  type="text"className="form-control" name="soDt" placeholder='Số điện thoại' onChange={handleOnchange}/>
            </div>
            <div className="form-group mb-5">
                <span>Họ tên</span>
                <input type="text" className="form-control" name="hoTen" placeholder='Họ tên' onChange={handleOnchange}/>
            </div>
            <div className="form-group text-right">
                <button  type="submit" className="btn-register">Đăng ký</button>
            </div>
      </form>
    </div>
  </div>
</div>
</div>
</div>
}
