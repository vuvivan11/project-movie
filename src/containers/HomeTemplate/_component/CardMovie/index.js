import React,{useEffect} from 'react';
import "./index.css";
import {useSelector,useDispatch} from "react-redux"
import {  NavLink } from "react-router-dom"
import { actListMovie } from './modules/actions';
import {RENDER_MOVIE_NOW_SHOWING,RENDER_MOVIE_COMING_SOON} from "./modules/constants"


const contentStyle = {
  height:"450px",
  color:"#fff",
  lineHeight:"160px",
  textAlign:"center",
  
  backgroundSize:"100%",
  backgroundRepeat:"no-repeat",
}

export default function CardMovie() {
  const {arrMovie} = useSelector(state => state.listMovieReducer)
  const {dangChieu,sapChieu} = useSelector(state => state.listMovieReducer)
  const renderListMovie = () => {
    return arrMovie.slice(0,6).map((item,index)=> {
      return <div key={index} style={{overflow:"hidden"}} className='card-movive  mt-5 col-md-4  '>
      <div className='card-content'>
        <div className='image-card' style={{...contentStyle,position:"relative",backgroundImage:`url(${item.hinhAnh})`}}>
          <img src={item.hinhAnh} style={{width:"100%",opacity:0}}/>
          <a href='/'>
            <div className='image-overplay' style={{position:"absolute",width:"100%",height:"100%",top:0,backgroundColor:"rgba(0,0,0,0.7)"}}>
              <NavLink to={`/detail/${item.maPhim}`} className='image-button' style={{ textDecoration:"none",position:"absolute",left:"40%",top:"40%",width:70}}>Mua Vé</NavLink>
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

  let activeMovieDC = dangChieu === true ? "active-movie" : "non-active-movie";
  let activeMovieSC = sapChieu === true ? "active-movie" : "non-active-movie";

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(actListMovie())
  },[])

  return <div className='container mb-5'>
    <div className='btn-card  mt-5'>
          <button  onClick={()=>{
            const action = {type:RENDER_MOVIE_NOW_SHOWING}
            dispatch(action)
          }} className={`${[activeMovieDC]} mr-3 p-2`}>Phim Đang Chiếu</button>
          <button  onClick={()=>{
            const action = {type:RENDER_MOVIE_COMING_SOON}
            dispatch(action)
          }} className={`${[activeMovieSC]} mr-3 p-2`}>Phim Sắp Chiếu</button>
      </div>
      <div className='row'>
        {renderListMovie()}
      </div>
      <div style={{textAlign:"right",marginTop:20}}>
      
      <button className='moreButton'><NavLink activeClassName='active' className="nav-link " to="/list-movie">Xem Thêm</NavLink></button>    
      </div>
  </div>;
}
