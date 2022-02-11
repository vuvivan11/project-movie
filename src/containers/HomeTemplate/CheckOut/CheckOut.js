import React, {Fragment, useEffect} from 'react';
import { useSelector , useDispatch} from 'react-redux';
import  {actShowTimeInfo,actInfoTickets} from "./modules/actions"
import {CloseOutlined,UserOutlined,CheckOutlined} from "@ant-design/icons"
import * as ActionType from "../CheckOut/modules/constant"
import _ from "lodash"
import moment from 'moment';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';

import "./index.css"
import { actGetInfoUser } from '../Login/modules/actions';



 function CheckOut(props) {
  
  const userLogin = useSelector(state=> state.loginReducer.userLogin)
  const dispatch = useDispatch()
  const data = useSelector(state => state.showTimeInfoReducer.data)
  const listOfSeat = useSelector(state => state.showTimeInfoReducer.listOfSeat)
  const {thongTinPhim,danhSachGhe} = data
  
  useEffect(()=>{
    let {maLichChieu} = props.match.params
   
    dispatch(actShowTimeInfo(maLichChieu))    
  },[])

  const renderSeats = () => {
    return danhSachGhe.map((seat,index)=> {

      let classVipSeat = seat.loaiGhe === "Vip" ? "vipSeat" : "";
      let classBookedSeat = seat.daDat === true ? "bookedSeat" : "" ; 
      let classSelectSeat = "" ;
      let indexSelectSeat = listOfSeat.findIndex(selectSeat => selectSeat.maGhe === seat.maGhe)
      let classchoiceSeat = "" ;
      if(userLogin.taiKhoan === seat.taiKhoanNguoiDat) {
        classchoiceSeat = "choiceSeat"
      }


      if(indexSelectSeat !== -1) {
        classSelectSeat = "selectingSeat"
      } 


      return <Fragment key={index} >
        <button onClick={()=>{
          dispatch({
            type:ActionType.BOOKINGTICKET,
            bookingSeat:seat
          })
        }} disabled={seat.daDat} className={`seat ${classVipSeat} ${classBookedSeat} ${classSelectSeat} ${classchoiceSeat}`}  key={index}>
          {seat.daDat  ? classchoiceSeat !== "" ? <UserOutlined /> : <CloseOutlined/> : seat.stt}
          </button>
        {(index + 1) % 16 === 0 ? <br/> : ""}
      </Fragment>
    })
  }
  return (
      <div className='row mt-5 w-100'>
          <div className='col-xs-12 col-xl-9'>
            <div className='d-flex flex-column align-items-center mt-5'>
              <div className='bg-dark'style={{width:"80%",height:15}}></div>
              <div className='trapezoid text-center'>
                <p className='mt-3 text-dark' style={{fontSize:18}}>Màn hình</p>
              </div>
              <div>
                {renderSeats()}
              </div>
            </div>
            <div className='mt-5 d-flex justify-content-center ml-3'>
              <table className='table w-75'>
                <thead className='p-5' style={{backgroundColor:"#d4d5d5"}}>
                  <tr>
                    <th>Ghế chưa đặt</th>
                    <th>Ghế đã được đặt</th>
                    <th>Ghế đang đặt</th>
                    <th>Ghế VIP</th>
                    <th>Ghế người dùng đặt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><button className='seat text-center'><CheckOutlined style={{marginBottom:6}}/></button></td>
                    <td><button className='seat bookedSeat text-center'><CheckOutlined style={{marginBottom:6}}/></button></td>
                    <td><button className='seat selectingSeat text-center'><CheckOutlined style={{marginBottom:6}}/></button></td>
                    <td><button className='seat vipSeat text-center'><CheckOutlined style={{marginBottom:6}}/></button></td>
                    <td><button className='seat choiceSeat text-center'><CheckOutlined style={{marginBottom:6}}/></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='col-xs-12 col-xl-3 '>
            <h3 className='text-center'style={{color:"green",fontWeight:400,fontSize:36}}>
            {listOfSeat.reduce((total,seat,index)=>{
                return total +=seat.giaVe
              },0).toLocaleString()}đ
            </h3>
            <hr/>
            <h3>{thongTinPhim.tenPhim}</h3>
            <hr/>
            <p>Địa điểm: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}</p>
            <p>Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} </p>
            <hr/>
            <span style={{color:"red",fontWeight:400,fontSize:20}}>Ghế: </span> 
            {_.sortBy(listOfSeat,["stt"]).map((selectSeat,index)=>{
              return  <span key={index} style={{color:"green",fontWeight:500,fontSize:20}}> {selectSeat.stt}, </span>
            })}
            <hr/>
            <span style={{color:"green",fontWeight:800,fontSize:20}}>
              {listOfSeat.reduce((total,seat,index)=>{
                return total +=seat.giaVe
              },0).toLocaleString()}đ
            </span>
            <hr/>
            <div className='my-5'>
              <i>Email</i><br/>
              {userLogin.email}
            </div>
            <hr/>
            <div className='my-5'>
              <i>Phone</i><br/>
              {userLogin.soDT}
            </div>
            <hr/> 
            <div className='d-flex flex-column justify-content-start align-items-center' style={{height:"50%", cursor:"pointer"}}>
              <div onClick={()=>{
                
                const infoTickets = {
                  maLichChieu : 0,
                  danhSachVe : []
                }
                infoTickets.maLichChieu = props.match.params.maLichChieu 
                infoTickets.danhSachVe = listOfSeat
                dispatch(actInfoTickets(infoTickets))
               
                
              }} className='w-100 text-white text-center py-3' style={{backgroundColor:"green",fontWeight:500,fontSize:20}}>ĐẶT VÉ</div>
            </div>
          </div>
      </div>
  );
}

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function  (props) {
  const {tabActive} = useSelector(state => state.showTimeInfoReducer)
  const dispatch = useDispatch()
  
  return <div className='p-4'>
    <Tabs defaultActiveKey="1" activeKey={tabActive} onChange={(key)=>{
      dispatch({
        type:"SWITCH_TAB_ACTIVE",
        number:key.toString()
      })
    }}>
      <TabPane tab=" 1 CHỌN GHẾ VÀ THANH TOÁN " key="1">
        <CheckOut {...props}/>
      </TabPane>
      <TabPane tab=" 2 KẾT QUẢ ĐẶT VÉ " key="2">
        <ResultTickets {...props}/>
      </TabPane>
    </Tabs>
  </div>
}

function ResultTickets (props){
  const infoUser = useSelector(state => state.loginReducer.infoUser)
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(actGetInfoUser())
  },[])
    

  const renderInfoTickets = () => {
    return infoUser.thongTinDatVe?.map((tickets,index)=>{
      return <div className="col-xl-6  mb-5 d-md-flex " key={index}>
      <div className="avatar mb-md-0 mb-4 mx-4">
        <img src={tickets.hinhAnh} style={{width:200}} alt={tickets.hinhAnh} />
      </div>
      <div className="mx-4">
        <h4 className="font-weight-bold mb-3">{tickets.tenPhim}</h4>
        <p className="font-weight-bold grey-text mb-3">Giờ đặt: {moment(tickets.ngayDat).format("hh:mm A")} - Ngày đặt: {moment(tickets.ngayDat).format("DD-MM-YYYY")}</p>
        <p className="grey-text">Địa điểm: {_.first(tickets.danhSachGhe).tenHeThongRap}</p>
        <p className="grey-text">{_.first(tickets.danhSachGhe).tenCumRap} - Ghế: {tickets.danhSachGhe.map((seat,index)=>{return <span key={index}> {seat.tenGhe},</span>})}</p>
      </div>
      </div>
    })
  }

  return <div className='p-5'>  
            <section className="team-section my-5">
              <h2 className="h1-responsive font-weight-bold text-center my-5">Lịch sử đặt vé khách hàng</h2>
              <p className="grey-text text-center w-responsive mx-auto mb-5">Vui lòng kiểm tra lại thông tin đặt vé và thời gian. Chúc bạn xem phim vui vẻ ! </p>
              <div className="row text-center text-md-left">
                 
                  {renderInfoTickets()} 
              </div>
            </section>

  </div>
}
  

