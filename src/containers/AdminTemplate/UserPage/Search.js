import React from 'react';
import { useDispatch } from 'react-redux';
import { actGetKeyword } from './modules/action';

export default function Search() {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(actGetKeyword(value))
  }

  return <input type="text" className="form-control mb-3 w-50" onChange={handleChange} />;
}

