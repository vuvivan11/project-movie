import React,{Fragment, useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux"
import { actListCinema } from './modules/actions';
import {NavLink} from "react-router-dom"
import 'antd/dist/antd.css';
import { Tabs} from 'antd';
import moment from "moment"
import { useMediaQuery } from 'react-responsive'
import "./index.css"


const { TabPane } = Tabs;

export default function MenuCinema(props) {
    

    const isMobile = useMediaQuery({ query: '(max-width: 966px)' })
    if(isMobile) {
        props = {
            tabPosition: 'top',
        };
    } else {
        props = {
            tabPosition: 'left',
        };
    }

    const { tabPosition } = props;
    const dispatch = useDispatch();
    const {arrCinema} = useSelector(state => state.listCinemaReducer)
    
    const renderCinema = () => {
        return arrCinema?.map((item,index)=>{
            return <TabPane tab={<img src={item.logo} alt={item.logo} style={{width:50}}/>} key={index}>
                <Tabs tabPosition={tabPosition}>
                    {item.lstCumRap.map((listCinema,index)=>{
                        return <TabPane tab={
                            <div>
                                <img  src={listCinema.hinhAnh} alt={listCinema.hinhAnh} style={{width:50,marginRight:10}}/>
                                {listCinema.tenCumRap}                            
                            </div>
                        } key={index}>
                            {/* Load phim tương ứng */}
                            {listCinema.danhSachPhim.slice(0,5).map((movie,index)=>{
                                return <Fragment key={index}>
                                    <div className='my-5' style={{display:"flex"}}>
                                        <div style={{display:"flex"}}>
                                            <img width={100} height={100} src={movie.hinhAnh} alt={movie.hinhAnh} onError={
                                               (e)=>{e.target.onError = null; e.target.src = "image_path_here"} 
                                            }/>
                                            <div className='ml-4'>
                                                <h1 className='text-green-700'>{movie.tenPhim}</h1>
                                                <p style={{fontSize:20}}>{listCinema.diaChi}</p>
                                                <div style={{display:"grid",gap:20,gridTemplateColumns:"auto auto auto auto auto auto"}}>
                                                    {movie.lstLichChieuTheoPhim.slice(0,12).map((showTime,index)=>{
                                                        return <NavLink to={`/checkout/${showTime.maLichChieu}`} key={index}  className="time-to-watch">    
                                                            {moment(showTime.ngayChieuGioChieu).format("hh:mm A")}
                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>   
                                </Fragment>
                            })}
                        </TabPane>
                    })}
                </Tabs>
        </TabPane>
        })
    }
    useEffect(()=>{
        dispatch(actListCinema())
    },[])
    return (
        <div style={{backgroundColor:"rgb(251 244 244)",paddingTop:20,paddingBottom:40}}>
            <div className="container my-5 bg-white" >
            <Tabs tabPosition={tabPosition}>
                {renderCinema()}
            </Tabs>
        </div>
        </div>
    
    );  
}
