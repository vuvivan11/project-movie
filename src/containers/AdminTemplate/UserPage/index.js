import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actEditUser } from './modules/action';
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";

export default function Home() {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1 className="display-4 text-center my-3">User Management</h1>
      <div className="d-flex justify-content-between align-items-center">
        <Search />
        <button
          className="btn btn-success"
          data-toggle="modal"
          data-target="#modelIdUser"
          onClick={() => {
            dispatch(actEditUser(null))
          }}
        >
          Add User
        </button>
      </div>
      <Users />
      <Modal />
    </div>
  );
}


