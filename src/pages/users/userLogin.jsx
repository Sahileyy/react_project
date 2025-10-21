import React from 'react'
import Login from '../login/login'

export const UserLogin = () => {
  return (
    <div>
          <Login
               
                apiEndPoint='/user/login'
                apiDirection= '/'
            />
    </div>
  )
}

export default UserLogin
