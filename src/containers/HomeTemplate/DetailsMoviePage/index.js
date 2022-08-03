import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { actDetailMovie } from "./modules/actions"
import { Tabs } from 'antd';
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import "./circle.css"
import moment from 'moment';
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom';


const { TabPane } = Tabs;

export default function DetailsMovie(props) {
    const data = useSelector(state => state.detailMovieReducer.data)
    const dispatch = useDispatch()

    useEffect(() => {
        let { maPhim } = props.match.params
        dispatch(actDetailMovie(maPhim))
    }, [])


    return <div style={{ backgroundImage: `url(${data.hinhAnh})`, backgroundSize: "100%", backgroundPosition: "center", minHeight: "100vh" }}>
        <CustomCard
            style={{ paddingTop: 100, minHeight: "100vh" }}
            effectColor="#C780FF" // required
            color="#14AEFF" // default color is white
            blur={20} // default blur value is 10px
            borderRadius={0} // default border radius value is 10px
        >
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-8 d-flex'>
                        <img src={data.hinhAnh} alt={data.hinhAnh} style={{ width: 200, height: 300 }} />
                        <div style={{ marginLeft: 30, lineHeight: "25px", fontSize: 16, color: "#fff" }}>
                            <p>Ngày chiếu: {moment(data.ngayKhoiChieu).format("DD . MM . YYYY")}</p>
                            <h1 className='text-white'>{data.tenPhim}</h1>
                            <p>{data.moTa}</p>
                        </div>
                    </div>
                    <div className='col-12 col-sm-4'>
                        <h3 style={{ marginLeft: "16%", color: "yellow", fontWeight: "bold" }}>Đánh giá</h3>
                        <h3 style={{ marginLeft: "5%", color: "green" }}><Rate allowHalf defaultValue={data.danhGia / 2} style={{ color: "#78ed78", fontSize: 30 }} /></h3>
                        <div class={`c100 p${data.danhGia * 10} big`}>
                            <span>{data.danhGia * 10}%</span>
                            <div class="slice">
                                <div class="bar"></div>
                                <div class="fill"></div>
                            </div>
                        </div>

                    </div>
                </div>
                <div style={{ marginTop: 80 }}>
                    <Tabs tabPosition={"left"} style={{ color: "white" }}>
                        {data.heThongRapChieu?.map((item, index) => {
                            return <TabPane tab={<div>
                                <img style={{ width: 50, marginRight: 20 }} src={item.logo} alt={item.logo} />
                                {item.tenHeThongRap.toUpperCase()}
                            </div>} key={index}>
                                {item.cumRapChieu?.map((cinema, index) => {
                                    return <div className='mt-5' key={index}>
                                        <div style={{ display: "flex" }}>
                                            <img src={cinema.hinhAnh} style={{ width: 100 }} />
                                            <div className='ml-3' style={{ fontSize: 16 }}>
                                                <p>{cinema.tenCumRap}</p>
                                                <p style={{ color: "#f26b38" }}>{cinema.diaChi}</p>
                                            </div>
                                        </div>
                                        <div style={{ display: "grid", gap: 20, gridTemplateColumns: "auto auto auto auto " }} className='mt-4 ml-2' >
                                            {cinema.lichChieuPhim?.map((time, index) => {
                                                return <NavLink to={`/checkout/${time.maLichChieu}`} key={index} style={{ color: "#3bff3b", fontWeight: "bold", fontSize: 16 }} >
                                                    {moment(time.ngayChieuGioChieu).format("hh:mm A")}
                                                </NavLink>
                                            })}
                                        </div>
                                    </div>
                                })}
                            </TabPane>
                        })}




                    </Tabs>
                </div>
            </div>
        </CustomCard>
    </div>;
}
