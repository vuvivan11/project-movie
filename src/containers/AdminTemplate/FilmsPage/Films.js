import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { actFetchListMovieApi } from './modules/action';
import FilmItem from "./FilmItem";

export default function Films() {
  const loading = useSelector(state => state.listMovieReducer.loading);
  let data = useSelector(state => state.listMovieReducer.data);
  let keyword = useSelector(state => state.listMovieReducer.keyword);


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actFetchListMovieApi())
  }, [])

  const renderListMovie = () => {
    data = data?.filter((movie) => {
      return movie.tenPhim.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    })
    return data?.map((movie) => {
      return <FilmItem key={movie.maPhim} movie={movie} />
    })
  }

  if(loading){
    return <div>...loading</div>
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Mã Phim</th>
            <th style={{width: 300}}>Tên phim</th>
            <th>Hình ảnh </th>
            <th>Mô tả</th>
          </tr>
        </thead>
        <tbody>
          {renderListMovie()}
        </tbody>
      </table>
    </div>
  )
}

