import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import "./index.css"
import { useSelector } from "react-redux"
import _ from "lodash"
import { Link } from 'react-router-dom';


export default function Footer() {

    const { arrCinema } = useSelector(state => state.listCinemaReducer)
    const arrListOfCinema = _.map(arrCinema, (item) => _.pick(item, ["maHeThongRap", "tenHeThongRap", "logo"]))

    return <footer style={{ backgroundColor: "#1a1a1a", color: "#a0a3a7", padding: "40px 15px" }}>
        <div className='container'>
            <div className='row'>
                <div className='footer-top col-12' style={{ display: "flex", flexWrap: "wrap", textAlign: "center", borderBottom: "1px solid #a0a3a7" }}>
                    <div className='col-xs-12 col-sm-4'>
                        <Link to='/'>
                            <img src='/img/logo.png' alt='img/logo.png' style={{ width: "100%" }} />
                        </Link>
                    </div>
                    <div className='col-xs-6 col-sm-4' style={{ width: "50%", paddingTop: "3%" }}>
                        <h2 style={{ color: "#a0a3a7" }}>Partner</h2>
                        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                            {arrListOfCinema.map((item, index) => {
                                return <div className='col-6 pt-4 mb-5' key={index}>
                                    <img src={item.logo} alt={item.logo} style={{ width: 50, borderRadius: "50%", cursor: "pointer" }} />
                                </div>
                            })}
                        </div>
                    </div>
                    <div className='col-xs-6 col-sm-4' style={{ width: "50%", paddingTop: "3%" }}>
                        <h2 style={{ color: "#a0a3a7" }}>Contact</h2>
                        <div className='footer-icon' style={{ paddingTop: 35 }}>
                            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <div className='bottom-content'>
                        <span>©2022 All rights reserved</span>
                        <a>
                            <span>Privacy policy</span>
                        </a>
                        <a>
                            <span>Terms of service</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}
