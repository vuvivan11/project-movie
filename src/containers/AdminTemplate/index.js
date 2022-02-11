import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import NavbarAdmin from './_component/NavbarAdmin';

export default function AdminTemplate(props) {
    const { exact, path, component } = props
    if(localStorage.getItem("UserAdmin")){
        return (
            <>
                <NavbarAdmin/> 
                <Route exact={exact} path={path} component={component} />
            </>
        )
    }
    
    return <Redirect to="/auth" />
}
