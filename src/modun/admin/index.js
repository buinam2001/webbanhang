import "./style.css"
import React from 'react';
import { Outlet } from "react-router-dom";
import { NavLink } from 'react-router-dom'

function Admin() {
 
  const log = () =>
  {
    localStorage.removeItem("userAdmin");
    window.location.reload();
  }

  return (
  <div className="adminHome">
    <div className="row wapper">
      <div className="col-2 border nav-admin">
        <div className="d-flex flex-column ">
          <div className="p-2 border-bottom ">
            <img style={{ width: "150px"}} src="http://mauweb.monamedia.net/vienthonga/wp-content/uploads/2018/01/logo-mona-vienthonga.png" alt="Girl in a jacket" />
          </div>
          <div className="m-2">
              <ul className="list mt-5" >
              <NavLink  to='/admin' className="nav-links"> 
                  
                <li className="list_item">tổng quan</li>
                </NavLink> 

                <NavLink  to='order' className="nav-links"> 
                  
                     <li className="list_item">quản lý đơn hàng</li>
                  </NavLink> 

                  <NavLink  to='product' className="nav-links"> 
                  
                  <li className="list_item">quản lý sản phẩm</li>
               </NavLink> 

               
               <NavLink  to='user' className="nav-links"> 
                  
                   <li className="list_item">quản lý người dùng</li>
               </NavLink> 
               <NavLink  to='category' className="nav-links"> 
                  
                   <li className="list_item">quản lý danh mục</li>
              </NavLink> 
              {/* <NavLink className={navLinkClass}> 
                  
              </NavLink>  */}
                 <li className="list_item" onClick={log}>đăng xuất</li>
               
              </ul>
          </div>
        </div>
      </div>
      <div className="col-10 box-left">
       
       <Outlet></Outlet>
       

      </div>
    </div>
  </div>
  );
}

export default Admin;
