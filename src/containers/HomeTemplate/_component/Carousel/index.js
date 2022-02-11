import React, {useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux"
import { actFetchCarousel } from './modules/actions';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./index.css"
const contentStyle = {
    height:"750px",
    color:"#fff",
    lineHeight:"160px",
    textAlign:"center",
    backgroundPosition:"center",
    backgroundSize:"100%",
    backgroundRepeat:"no-repeat",
}

export default function CarouselMovie() {
    const {arrImg} = useSelector(state => state.carouselReducer)
    const renderCarousel = () =>{
        return arrImg.map((item,index)=>{
             return <div key={index}>
                <div className='carouselResponsive' style={{...contentStyle ,backgroundImage:`url(${item.hinhAnh})`}}>
                    <img src={item.hinhAnh}  style={{opacity:0,width:100}} alt={item.hinhAnh}/>
                </div>
            </div>;
        })
    } 

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(actFetchCarousel())
    },[])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    
    return (             
    <Slider {...settings}>
        {renderCarousel()}
    </Slider>
      
    )
}
