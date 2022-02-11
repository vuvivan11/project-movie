import { UPDATE_PROFILE} from "./contants"

const initState = {
    data:{}
}

const updateProfileReducer = (state=initState,action) => {
    switch(action.type) {
        case UPDATE_PROFILE:{
            state.data = action.payload
            return {...state}
        }
        default : return {...state}
    }
}

export default updateProfileReducer