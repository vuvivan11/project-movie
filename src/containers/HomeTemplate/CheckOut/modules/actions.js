import * as ActionType from "./constant"
import api from "utils/apiUtils";
import {DISPLAY_LOADING_ACTION,HIDE_LOADING_ACTION} from "components/Loading/modules/actions"


export const actShowTimeInfo = (maLichChieu) => {
   
    return(dispatch) => {
        dispatch(actShowTimeInfoRequest());
        api 
            .get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
            .then((result)=>{
                dispatch(actShowTimeInfoSuccess(result.data.content))
            })
            .catch((error)=>{
                dispatch(actShowTimeInfoFailed(error.response.data))
            })
    }
}

export const actInfoTickets = (infoTickets) => {
    
    return (dispatch) => {
        
        api
        .post(`QuanLyDatVe/DatVe`,infoTickets)
        .then((result)=>{
            dispatch(DISPLAY_LOADING_ACTION)
            dispatch(actInfoTicketsSuccess(result.data.content))
            setTimeout(()=>{
                dispatch(HIDE_LOADING_ACTION)
                dispatch(actShowTimeInfo(infoTickets.maLichChieu))
                dispatch(actBookingSuccess())            
            },500)
            setTimeout(()=>{
                dispatch({type:ActionType.SWITCH_TAB})
            },1000)
            
        })
        
        .catch((error)=>{
            dispatch(HIDE_LOADING_ACTION)
            console.log(error.response)
        })
        
          
        
    }
}






const actBookingSuccess = () => {
    return {
        type:ActionType.BOOKING_SUCCESS
    }
}

const actInfoTicketsSuccess = (data) => {
    return {
        type:ActionType.INFO_TICKETS,
        payload:data
    }
}


const actShowTimeInfoRequest = () => {
    return {
        type:ActionType.SHOWTIME_INFO_REQUEST
    }
}

const actShowTimeInfoSuccess = (data) => {
    return {
        type:ActionType.SHOWTIME_INFO_SUCCESS,
        payload:data
    }
}

const actShowTimeInfoFailed = (error) => {
    return {
        type:ActionType.SHOWTIME_INFO_FAILED,
        payload:error
    }
}

