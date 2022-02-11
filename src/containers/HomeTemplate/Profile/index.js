import React,{useState,useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import _ from "lodash"
import "./index.css"
import { actUpdateProfile } from './module/actions';

export default function Profile(props) {
  
  const {data} = useSelector(state => state.updateProfileReducer)
  console.log(data)
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }

  
  const renderProfile = () => {
    return data.thongTinDatVe?.slice(0,6).map((item,index)=> {
      return <tr key={index}>
            <td scope="col">{moment(item.ngayDat).format("DD-MM-YYYY")}</td>
            <td scope="col">{_.first(item.danhSachGhe).tenHeThongRap} - {_.first(item.danhSachGhe).tenCumRap} </td>
            <td scope="col">{item.tenPhim}</td>
            <td scope="col">{item.danhSachGhe.map((seat,index)=>{return <span key={index}> {seat.tenGhe},</span> })}</td>
      </tr>
    })
  }

  const [state,setState] = useState({
    hoTen:"",
    soDT:""
  })

  const dispatch = useDispatch()

  const handleOnChange = (event) => {
    const {name,value} = event.target
   setState({
      ...state,
      [name]:value     
   })
  }

  useEffect(()=>{
    dispatch(actUpdateProfile())
  },[])


  return <div className='container mt-5' style={{height:500}}>
       <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Thông tin thành viên" key="1">
      <form>
          <div>
            <div className="form-row">
              <div className="form-group col-md-6 w-50">
                <label >Tài khoản</label>
                <input disabled type="text" className="form-control" value={data.taiKhoan} />
              </div>
              <div className="form-group col-md-6 w-50">
                <label>Email</label>
                <input disabled type="email" className="form-control" value={data.email}/>
              </div>
              <div className="form-group col-md-6 w-50">
                <label >Họ tên</label>
                <input type="text" className="form-control" defaultValue={data.hoTen }  name="hoTen"  onChange={handleOnChange} />
              </div>
              <div className="form-group col-md-6 w-50">
                <label>Số điện thoại</label>
                <input type="text" className="form-control" defaultValue={data.soDT}  name="soDT"  onChange={handleOnChange} />
              </div>  
                 
            </div>
          </div>
          <button type="submit" className="btn btn-warning mt-3">Lưu lại</button>
      </form>

      </TabPane>
      <TabPane tab="Giao dịch của tôi" key="2">
          <table className="table">
        <thead>
          <tr>
            <th scope="col">Ngày đặt</th>
            <th scope="col">Rạp</th>
            <th scope="col">Phim</th>
            <th scope="col">Ghế</th>
            
          </tr>
        </thead>
        <tbody>
          {/* {renderProfile()} */}
          {renderProfile()}
        </tbody>
      </table>

      </TabPane>
    </Tabs>
    
  </div>

}
  
