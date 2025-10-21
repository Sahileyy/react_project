import React from 'react'
import Login from '../login/login'


export const AdminLogin = () => {
  return (
    <div>
         <Login 
        
     
        apiEndPoint='/admin/login'
        apiDirection= '/admin'

       />
    </div>
  )
}

export default AdminLogin