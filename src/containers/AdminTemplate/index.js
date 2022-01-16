import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export default function AdminTemplate(props) {
    const { exact, path, component } = props
    return (
        <>
            <Route exact={exact} path={path} component={component} />
        </>
    )
   
}
