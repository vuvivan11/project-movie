import React, { Fragment } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import "./index.css"




export default function Loading() {
    const {loading} = useSelector(state => state.loadingReducer)
    return <Fragment>
        {loading ? 
        <div className='main'>
        <div className='loader'></div>
    </div>:""}
    </Fragment>
}
       