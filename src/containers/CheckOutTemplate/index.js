import Footer from 'containers/HomeTemplate/_component/Footer';
import NavBarHome from 'containers/HomeTemplate/_component/NavBar';
import React from 'react';
import { useEffect } from 'react';
import { Route,Redirect } from 'react-router-dom';

export default function HomeTemplate(props) {
    const { exact, path, component } = props;
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    if(!localStorage.getItem("USER_LOGIN")){
        return <Redirect to="/login"/>
    }
    
    return (
        <>      
            <NavBarHome/>
            <Route exact={exact} path={path} component={component} />
            <Footer/>
        </>
    )
}