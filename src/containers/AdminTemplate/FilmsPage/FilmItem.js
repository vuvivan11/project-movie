import React from 'react';
import { useDispatch } from 'react-redux';
import { actDeleteMovieApi } from './modules/action';

export default function FilmItem(props) {
  const { movie } = props
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{movie.maPhim}</td>
      <td>{movie.tenPhim}</td>
      <td><img src={movie.hinhAnh} alt={movie.hinhAnh} width={100} height={100} /></td>
      <td>{movie.moTa.length > 50 ? movie.moTa.substring(0, 50) + "..." : movie.moTa}</td>
      <td>
        <button
          className="btn btn-info mr-2"
          data-toggle="modal"
          data-target="#modelIdUser"
        >
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => {
          if (window.confirm("Bạn có muốn xóa phim " + movie.tenPhim)) {
            dispatch(actDeleteMovieApi(movie.maPhim))
          }

        }}>Delete</button>
      </td>
    </tr>
  )
}

