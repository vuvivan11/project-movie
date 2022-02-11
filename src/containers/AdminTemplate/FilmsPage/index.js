import React from 'react'
import Search from "./Search";
import Films from "./Films";
import { useHistory } from 'react-router-dom';

export default function FilmsPage() {
  const history = useHistory();
  return (
    <div className="container">
        <h1 className="display-4 text-center my-3">Films Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button className='btn btn-success' onClick={() => {
            history.push("/add-new-film")
          }}>Thêm Phim</button>
        </div>
        <Films />
      </div>
  )
}

