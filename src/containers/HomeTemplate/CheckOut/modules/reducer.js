
import * as ActionType from "./constant"

const initState = {
    loading:false,
    data:{
        thongTinPhim:{},
        danhSachGhe:[],
    },
    error:null,
    listOfSeat:[],
    tabActive:"1"
}

const showTimeInfoReducer = (state=initState,action) => {
    switch(action.type){
        case ActionType.SHOWTIME_INFO_REQUEST:{
            state.loading = true;
            return {...state}
        }

        case ActionType.SHOWTIME_INFO_SUCCESS:{
            state.loading = false;
            state.data = action.payload ; 
            state.error = null ;
            return {...state}
        }

        case ActionType.SHOWTIME_INFO_FAILED:{
            state.loading = false;
            state.data =  null; 
            state.error = action.payload ;
            return {...state}
        }


        case ActionType.BOOKINGTICKET:{
            let listOfSeatUpdate = [...state.listOfSeat]
            let index = listOfSeatUpdate.findIndex(selectSeat => selectSeat.maGhe === action.bookingSeat.maGhe)

            if(index != -1) {
                listOfSeatUpdate.splice(index,1);

            } else {
                listOfSeatUpdate.push(action.bookingSeat)
            }

            return {...state,listOfSeat:listOfSeatUpdate}
        }

        case ActionType.BOOKING_SUCCESS:{
            state.listOfSeat = [];
            return {...state}
        }

        case ActionType.SWITCH_TAB:{
            state.tabActive = "2"    
            return {...state}
        }

        case "SWITCH_TAB_ACTIVE" : {
            state.tabActive = action.number
            return {...state}
        }

        default: return {...state}
    }
}

export default showTimeInfoReducer