import React from 'react'
import { AdminLogin } from './pages/admin/adminLogin'
import AdminDashboard from './pages/admin/admin'
import { UserLogin } from './pages/users/userLogin'
import HomePage from './pages/home/home'
import Register from './pages/register/register'
import Navbar from './components/navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AdminCategory from './pages/admin/adminCategory'
import CreateCategory from './pages/admin/createCategory'
import EditCategory from './pages/admin/adminPutCategory'
import AddProduct from './pages/admin/product/addProduct'
import AdminProduct from './pages/admin/product/adminProduct'
import AdminPutProduct from './pages/admin/product/adminPutProduct'
import { ListUsers } from './pages/admin/adminuser/listUsers'
import ProductByCategory from './pages/admin/product/productByCategory'


const App = () => {
  return (
    <div>
          <BrowserRouter>
      {/* <Navbar/> */}
            <Routes>
    <Route path = "/" element = {<HomePage/>}/>
    <Route path = "/register" element = {<Register/>}/>
    <Route path = "/user/login" element = {<UserLogin/>}/>
     <Route path = "/admin/login" element = {<AdminLogin/>}/>
     <Route path = "/admin" element = {<AdminDashboard/>}/>
     <Route path = "/admin/category" element = {<AdminCategory/>}/>
     <Route path = "/admin/createCategory" element = {<CreateCategory/>}/>
      <Route path = "/admin/putCategory/:id" element = {<EditCategory/>}/>
            <Route path="/admin/addProduct" element={<AddProduct/>} />
     <Route path="/admin/adminProduct" element={<AdminProduct/>} />
     <Route path="/admin/adminPutProduct/:id" element={<AdminPutProduct/>} />
     <Route path="/admin/adminPannel" element={<ListUsers/>} />
     <Route path="/public/product/category/:id" element={<ProductByCategory/>} />



            </Routes>
            </BrowserRouter>
    </div>
  )
}

export default App