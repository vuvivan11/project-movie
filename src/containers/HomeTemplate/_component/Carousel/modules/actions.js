import * as ActionType from "./constants"
import api from "utils/apiUtils"



export const actFetchCarousel = () => {
    return(dispatch) =>{
        dispatch(actCarouselRequest());
        api 
            .get("QuanLyPhim/LayDanhSachBanner")
        
        .then((result)=>{
            
            dispatch(actCarouselSucces(result.data.content))
        })
        .catch((error)=>{
            dispatch(actCarouselFailed(error))
        })
           
    }
}


const actCarouselRequest = () => {
    return {
        type:ActionType.CAROUSEL_REQUEST
    }
}

const actCarouselSucces = (data) => {
    return {
        type:ActionType.CAROUSEL_SUCCESS,
        payload:data
    }
}

const actCarouselFailed = (error) => {
    return {
        type:ActionType.CAROUSEL_FAILED,
        payload:error,
    }
}