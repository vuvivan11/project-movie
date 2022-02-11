import React, { useEffect } from 'react';
import UserItem from "./UserItem";
import { useSelector, useDispatch } from "react-redux";
import { actFetchUserList } from "./modules/action"

export default function Users() {
  const loading = useSelector(state => state.listUserReducer.loading);
  let data = useSelector(state => state.listUserReducer.data);
  let keyword = useSelector(state => state.listUserReducer.keyword);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchUserList())
  }, [])

  const renderListUser = () => {
    data = data?.filter((user) => {
      return user.taiKhoan.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    })
    return data?.map((user, index) => {
      return <UserItem key={index} user={user} />
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
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {renderListUser()}
        </tbody>
      </table>
    </div>
  );
}

