import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './modun/page/homepage';
import Admin from './modun/admin';
import Product from './modun/admin/crudproduct/product';
import CategoryPage from './modun/page/categorypage/category';
import LoadProduct from './loading/loadproduct';
import Category from './modun/admin/curdcategory/category';
import Categorycurd from './modun/admin/curdcategory/categotycrud';
import CategoryProduct from './modun/page/categoryproduct/categoryproduct';
import AdminFrom from "./modun/admin/fromAdmin/adminfrom";
import Cart from "./modun/page/cart/index";
import AdminOrder from './modun/admin/order';
import Manage from "./modun/admin/manage/index";
import CurdUser from './modun/admin/curduser';
import NotFound from './modun/notfile';
const LazyProductDes = React.lazy(() => import("./modun/page/productdes/index"));
const AdminProduct = React.lazy(() => import("./modun/admin/crudproduct/curdproduct"));
const Page = React.lazy(() => import("./modun/page"));
const FromHome = React.lazy(() => import("./modun/page/fromhome/index"));
const DetailOrder = React.lazy(() => import("./modun/admin/order/detail"));
const userAdmin = JSON.parse(localStorage.getItem('userAdmin'));
const user = JSON.parse(localStorage.getItem('user'));


function Root ()
{
    return(
    

    <Routes>
       < Route path="/"
        element={

          user == null ? 
          <React.Suspense fallback={<LoadProduct></LoadProduct>}>
          <FromHome />
        </React.Suspense> : 
        
        <React.Suspense fallback={<LoadProduct></LoadProduct>}>
        <Page />
      </React.Suspense>
          
        }>

       < Route index element={<Homepage />} ></Route>
       < Route path="/cart" element={<Cart />} ></Route>
       < Route path="/categoryPage" element={<CategoryPage />} ></Route>

       < Route path="/:category" element={<CategoryProduct />} >

       </Route>
       <Route path='*' element={<NotFound />} />

       <Route
              path="/product/:id"
              element={
                <React.Suspense fallback={<LoadProduct></LoadProduct>}>
                  <LazyProductDes />
                </React.Suspense>
              }
            />
       
   

       </Route>
     
        <Route path="/admin" element={userAdmin == null ? <AdminFrom></AdminFrom> :  <Admin></Admin> }>
          
        < Route path="/admin" element={<Manage />} /> 


          < Route path="user" element={<CurdUser />} ></Route> 
          < Route path="product" element={<Product />} ></Route>
          <Route
              path="product/add"
              element={
                <React.Suspense fallback={<LoadProduct></LoadProduct>}>
                  <AdminProduct />
                </React.Suspense>
              }
            />
           <Route
              path="product/edit/:id"
              element={
                <React.Suspense fallback={<LoadProduct></LoadProduct>}>
                  <AdminProduct />
                </React.Suspense>
              }
            />
              < Route path="order" element={<AdminOrder />} >

             

              </Route>

              < Route path="order/detailorder/:id" 
              
              element={
                <React.Suspense fallback={<LoadProduct></LoadProduct>}>
                  <DetailOrder />
                </React.Suspense>
              }
              >
                

                </Route>
           

          < Route path="category" element={<Category />} />  
          < Route path="category/add" element={<Categorycurd />} />  
          <Route
              path="category/edit/:id"
              element={
                <React.Suspense fallback={<LoadProduct></LoadProduct>}>
                  <Categorycurd />
                </React.Suspense>
              }
            />  

          
    
          
    
        </Route>
       
    </Routes>
        )
        
}
export default Root;