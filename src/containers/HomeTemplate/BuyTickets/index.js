import React,{useEffect} from 'react';
import {  NavLink } from "react-router-dom"
import "../_component/CardMovie/index.css";
import { actListMovie } from '../_component/CardMovie/modules/actions';
import {useSelector,useDispatch} from "react-redux"

const contentStyle = {
    height:"450px",
    color:"#fff",
    lineHeight:"160px",
    textAlign:"center",
    backgroundSize:"100%",
    backgroundRepeat:"no-repeat",
  }
  
  export default function ListOfMovie() {
    const {arrMovie,loading} = useSelector(state => state.listMovieReducer)
    const renderListMovie = () => {
      return arrMovie.map((item,index)=> {
        return <div key={index} style={{overflow:"hidden"}} className='card-movive  mt-5 col-md-4  '>
        <div className='card-content'>
          <div className='image-card' style={{...contentStyle,position:"relative",backgroundImage:`url(${item.hinhAnh})`}}>
            <img src={item.hinhAnh} style={{width:"100%",opacity:0}}/>
            <a href='/'>
              <div className='image-overplay' style={{position:"absolute",width:"100%",height:"100%",top:0,backgroundColor:"rgba(0,0,0,0.7)"}}>
              <NavLink to={`/detail/${item.maPhim}`} className='image-button' style={{textDecoration:"none",position:"absolute",left:"40%",top:"40%",width:70}}>Mua Vé</NavLink>
              </div>
            </a>
          </div>
          <div className='title-card mt-3'>
            <h4>{item.tenPhim}</h4>
          </div>
        </div>
      </div>
      })
    } 
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(actListMovie())
    },[])
    return <>
<div style={{backgroundColor:"rgb(251 244 244)",paddingTop:20,paddingBottom:40}}>
      <div className='container mb-5'>
          <div className='row'>
            {renderListMovie()}
          </div>
    </div>;
    </div>
    </>
  }
