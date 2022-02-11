import * as ActionType from "./constant"
const initState = {
    loading : false
}

 const loadingReducer = (state = initState,action) => {
    switch(action.type) {
        case ActionType.DISPLAY_LOADING:{
            state.loading = true ; 
            return {...state}
        }

        case ActionType.HIDE_LOADING :{
            state.loading = false;
            return {...state}
        }
        default: return {...state}
    }

}

export default loadingReducer