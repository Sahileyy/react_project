import React, { useEffect, useState } from 'react'
import api from '../../../axios';
import './listUsers.css'
import { useNavigate } from 'react-router-dom';
import { AdminNavbar } from '../../../components/navbar/AdminNavbar';
import { SidebarAdmin } from '../../../components/sidebars/SidebarAdmin';



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
                const nonAdminUsers = response.data.filter(user => user.role !== 'admin')
                setUsers(nonAdminUsers)
            }
            catch(err){
                console.log(err);
                
            }
            
        }
        fetchUsers()
    },[])

     return (
      <>
      
            <AdminNavbar/>
       <div className='flex'>
      <div className="flex">

            <SidebarAdmin/>
      </div>
    <div className="user-list w-full  bg-white h-screen">
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
        <div className="text-center font-bold py-6"><p className="text-lg cursor-pointer hover:underline transition-transform duration-300 hover:scale-105" onClick={()=>{navigate('/admin')}}>Back to Dashboard</p></div>
      
    </div>
  </div>
  </>
  );
};

