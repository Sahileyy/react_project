import React, { useEffect, useState } from 'react'
import api from '../../../axios';
import './listUsers.css'
import { useNavigate } from 'react-router-dom';



export const ListUsers = () => {

    const navigate = useNavigate()
   const handleEnable = async(id,enableStatus)=>{
    try{
    const response = await api.put(`/admin/adminPutUser/${id}`,
        {enable:enableStatus});

         setUsers(prev =>
      prev.map(user =>
        user._id === id ? { ...user, enable: enableStatus } : user
      )
    );
   
   }
   catch(err){
    console.log(err);
    
   }
   }


    const [users,setUsers] = useState([])

    useEffect(() =>{
        async function fetchUsers() {
            try{
                const response =  await api.get('/admin/adminPannel')
                setUsers(response.data)
            }
            catch(err){
                console.log(err);
                
            }
            
        }
        fetchUsers()
    },[])

     return (
    <div className="user-list ">
      <h1 className="admin-title">User List</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
             
              <td>{u._id}</td>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td className='action-buttons'>
               <button
  className={u.enable ? 'disable-btn' : 'enable-btn'}
  onClick={() => handleEnable(u._id, !u.enable)}
>
  {u.enable ? 'Disable' : 'Enable'}
</button>


            
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

