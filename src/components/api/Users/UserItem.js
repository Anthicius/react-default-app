import React from 'react'
import "./UserItem.css"

const UserItem = ({user}) => {
  return (
    <div className='user-wrapper'>
      <div><b>ID:</b> {user.id}</div>
      <div>Name: {user.name}</div>
      <div>User Name: {user.username}</div>
      <div>Email: {user.email}</div>
      <div>Phone: {user.phone}</div>
    </div>
  )
}

export default UserItem