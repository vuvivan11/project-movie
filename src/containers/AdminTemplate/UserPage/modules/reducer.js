import * as ActionType from "./constants"

const initialState = {
    loading: false,
    data: null,
    error: null,
    keyword: "",
    userEdit: null
}

const listUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LIST_USER_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state };
        case ActionType.LIST_USER_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        case ActionType.LIST_USER_FAILED:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        case ActionType.GET_KEYWORD: {
            state.keyword = action.payload
            return { ...state }
        }
        case ActionType.EDIT_USER: {
            state.userEdit = action.payload
            return { ...state }
        }
        default:
            return { ...state };
    }
}

export default listUserReducer;