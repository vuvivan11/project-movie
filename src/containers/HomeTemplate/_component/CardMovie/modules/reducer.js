import * as ActionType from "./constants";

const initState = {
    arrMovie : [
        {
          "maPhim": 8225,
          "tenPhim": "The Boss Baby: Back in Business – Season 3",
          "biDanh": "the-boss-baby-back-in-business-–-season-3",
          "trailer": "aPu6yQ0OrG8",
          "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-boss-baby-back-in-business-–-season-3_gp01.jpg",
          "moTa": "With a little help from his brother and accomplice, Tim, Boss Baby tries to balance family life with his job at Baby Corp headquarters !!!",
          "maNhom": "GP01",
          "ngayKhoiChieu": "2021-12-06T01:21:57.173",
          "danhGia": 6,
          "hot": true,
          "dangChieu": true,
          "sapChieu": false
        },
    ],
    dangChieu:true,
    sapChieu:false,
    newArrMovie :[] ,
    loading:false,
}

const listMovieReducer = (state= initState,action) => {
    switch(action.type) {
        case ActionType.RENDER_LIST_OF_MOVIE:{
            state.loading = false
            state.arrMovie = action.payload;
            state.newArrMovie =state.arrMovie;
            return {...state}
        };
        
        case ActionType.RENDER_MOVIE_NOW_SHOWING:{
            state.dangChieu  = !state.dangChieu;
            state.sapChieu = !state.sapChieu
            state.arrMovie = state.newArrMovie.filter(movie=>movie.dangChieu === state.dangChieu)
            return{...state}
        };

        case ActionType.RENDER_MOVIE_COMING_SOON:{
            state.dangChieu  = !state.dangChieu;
            state.sapChieu  = !state.sapChieu;
            state.arrMovie = state.newArrMovie.filter(movie=>movie.sapChieu === state.sapChieu)
            return{...state}
        };

        default:return {...state}
    }
}

export default listMovieReducer