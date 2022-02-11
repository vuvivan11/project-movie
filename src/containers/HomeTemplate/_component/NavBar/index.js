import React, { Fragment } from 'react'
import {  NavLink,useHistory } from "react-router-dom"
import "./index.css"

import { useSelector } from 'react-redux'
import _ from "lodash"


export default function NavBarHome(props) {
    const {userLogin} = useSelector(state => state.loginReducer)

    const history = useHistory()

    const renderLogin = () => {
        if(_.isEmpty(userLogin)){
            return <Fragment>
                 <button onClick={()=>{
                        history.push("/login")
                    }}  className="btn btn-dark me-2 mr-2">Sign In</button>
                <button onClick={()=>{
                        history.push("/register")
                }} className="btn btn-warning me-2 ml-2">Register</button>
            </Fragment>
        }
        return  <Fragment>
            <button onClick={()=>{
            history.push("/profile")
        }}  className="btn btn-dark me-2 mr-2">{userLogin.taiKhoan}</button>
        <button onClick={()=>{
            localStorage.removeItem("USER_LOGIN")
            history.push("/");
            window.location.reload()
        }} className='btn btn-warning'>Đăng xuất</button>
        </Fragment>
    }
    return (      
            <nav className="navbar navbar-expand-md navbar-light ">
            <NavLink exact activeClassName='active' className="nav-link nav-logo" to="/">
                <img src='/img/logo.png' alt='img/logo.png' className='img-fluid' style={{width:200}}/>
            </NavLink>           
                {/* Toggler/collapsibe Button */}
                <div className='toggleResponsive'>
                {renderLogin()}    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon" />
                    </button>
                </div>

                {/* Navbar links */}
                <div className="collapse navbar-collapse justify-content-center text-right"  id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink activeClassName='active' className="nav-link " style={{fontSize:20}} to="/buy-tickets">Mua vé</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink activeClassName='active' className="nav-link" style={{fontSize:20}} to="/list-movie">Phim</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink activeClassName='active' className="nav-link" style={{fontSize:20}} to="/info-cinema">Hệ thống rạp</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="loginNavbar" style={{display:"flex"}}>
                    {renderLogin()}    
                </div>  
            </nav>

        


    
    )
}
