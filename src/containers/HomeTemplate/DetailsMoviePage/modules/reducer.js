import * as ActionType from "./constants"

const initState = {  
    data:{},  
}

const detailMovieReducer = (state=initState,action) => {
    switch(action.type) {  

        case ActionType.DETAIL_MOVIE_SUCCESS:{ 
            state.data = action.payload;
            return {...state}
        }

        default: return {...state}
    }
}

export default detailMovieReducer