import * as ActionType from "./constants"

const initialState = {
    loading: false,
    data: null,
    error: null,
    keyword: ""
}

const listMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LIST_FILM_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        case ActionType.LIST_FILM_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        case ActionType.LIST_FILM_FAILED:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        case ActionType.GET_KEYWORD:
            state.keyword= action.payload;
            return { ...state };
        default:
            return { ...state };
    }
}

export default listMovieReducer