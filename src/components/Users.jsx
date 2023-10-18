import React from 'react';
import { useParams } from 'react-router-dom';

const Users = () => {
    const {userid} = useParams();
  return (
      <div>Users:{userid}</div>
  )
}

export default Users;