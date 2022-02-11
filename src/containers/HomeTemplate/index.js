import React,{useEffect} from 'react';
import { Route } from 'react-router-dom';

import NavBarHome from './_component/NavBar';
import Footer from './_component/Footer';

export default function HomeTemplate(props) {
    const { exact, path, component } = props;
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return (
        <>   
            <NavBarHome/>
            <Route exact={exact} path={path} component={component} />
            <Footer />
        </>
    )
}
