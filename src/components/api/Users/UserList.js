import React, {useContext} from 'react'
import { ApiDataContext } from '../context/ApiDataContext'
import UserItem from './UserItem'
import './UserList.css'

const UserList = () => {

  const {apiData} = useContext(ApiDataContext)

  return (
    <div className='user-container'>
    {apiData.users.map((userData)=>
    <UserItem user={userData} />
    )}
    </div>
  )
}

export default UserList