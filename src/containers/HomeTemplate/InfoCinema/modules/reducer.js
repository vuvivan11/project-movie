import * as ActionType from "./constants"


const initState = {
    
    arrCinema :[]
}

const listCinemaReducer = (state = initState , action) => {
    
    switch(action.type) {
        case ActionType.RENDER_MENU_CINEMA:{
            
            state.arrCinema = action.payload
            return {...state}
        }

        default:return {...state}
    }
}

export default listCinemaReducer