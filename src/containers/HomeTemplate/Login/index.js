import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import "./index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGooglePlus, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import { actLogin } from './modules/actions';
import { Link } from 'react-router-dom';



export default function Login(props) {
  const loading = useSelector(state => state.loadingReducer);
  const error = useSelector((state) => state.loginReducer.error)
  const dispatch = useDispatch()

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  })

  const handleOnchange = (event) => {
    const { name, value } = event.target
    setState({
      ...state,
      [name]: value,
    })
  }

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actLogin(state, props.history))
  }

  const noti = () => {
    return error && <div className='alert alert-danger'>{error.response.data.content}</div>
  }


  return <div className='loginUser'>
    <div className="container">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>Sign In</h3>
            {noti()}
            <div className="d-flex justify-content-end social_icon">
              <span><FontAwesomeIcon icon={faGooglePlus}></FontAwesomeIcon></span>
              <span><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></span>
              <span><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></span>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
                </div>
                <input type="text" className="form-control" placeholder="Tài khoản" name="taiKhoan" onChange={handleOnchange} />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><FontAwesomeIcon icon={faKey} /></span>
                </div>
                <input type="password" className="form-control" placeholder="password" name="matKhau" onChange={handleOnchange} />
              </div>
              <div className="row align-items-center remember">
                <input type="checkbox" />Remember Me
              </div>
              <div className="form-group">
                <button type='submit' className="btn float-right login_btn">Login</button>
              </div>
            </form>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Don't have an account?<Link to="#">Sign Up</Link>
            </div>
            <div className="d-flex justify-content-center">
              <Link to="#">Forgot your password?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>




}
