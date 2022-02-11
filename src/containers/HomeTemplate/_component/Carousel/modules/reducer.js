import * as ActionType from "./constants"

const initStatae = {
    arrImg:[]
}

const carouselReducer = (state=initStatae,action) => {
    
    switch(action.type) {
        case ActionType.CAROUSEL_SUCCESS :{
            state.arrImg = action.payload ;     
            return {...state}
        }
        default: return {...state}
    }
}

export default carouselReducer
