import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { actLoginApi } from './modules/action';
import { Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default function AuthPage(props) {
    const loading = useSelector(state => state.loginApiRedecer.loading);
    const error = useSelector(state => state.loginApiRedecer.error)

    const dispatch = useDispatch()

    const [state, setState] = useState({
        taiKhoan: "",
        matKhau: "",
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const handleLogin = (event) => {
        event.preventDefault();
        dispatch(actLoginApi(state, props.history))
    }

    const noti = () => {
        return error && <div className='alert alert-danger'>{error.response.data.content}</div>
    }

    if(loading){
        return <div>...loading</div>
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <h3 className='my-5 text-center'>Auth CyberSoft</h3>
                    <hr></hr>
                    {noti()}
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <Input className='form-control' size="large" placeholder="Tài khoản" prefix={<UserOutlined />} name='taiKhoan' onChange={handleChange} />
                        </div>
                        <div className="form-group mb-5">
                            <Input type="password" className='form-control' size="large" placeholder="Mật khẩu" prefix={<LockOutlined />} name='matKhau' onChange={handleChange} />
                        </div>
                        <hr></hr>
                        <Button htmlType='submit' size="large" style={{width: "100%", backgroundColor: "#1877f2", color: "#fff"}} >Login</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
