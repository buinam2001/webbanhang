import React, { useEffect } from "react";
import {useDispatch , useSelector } from "react-redux";
import { FcManager,FcKindle,FcViewDetails,FcPortraitMode,FcPaid } from "react-icons/fc";
import "./style.css"
import {MdOutlineProductionQuantityLimits } from "react-icons/md";
import { Link } from 'react-router-dom'
import { getorder } from "../../slices/ordercSlies"
import {getuser } from "../../slices/userSlies"

function Manage() {
  const dispatch = useDispatch();
  useEffect( () => {
    async function callapi ()
     {
       dispatch(getorder());
     }
     callapi()
     
   },[]);
  const dataorder = useSelector((state) => state.orderApi);



 useEffect( () => {
     async function dispatchdata()
     {
         dispatch(getuser());
     }
     dispatchdata();
 },[dispatch]);
 var datauser = useSelector((state) => state.userApi);


  return (
<div className="container mt-5">

  <div className="row"> 
  <div className="col-11 col-md-5 text-center border border-light m-4 box box-s">
  <Link style={{textDecoration:"none",color:"black"}} to='order'>
      tổng số đơn hàng : {dataorder.length}
       <div className="main">
         
       <FcKindle></FcKindle>
       </div>
  </Link>
    </div>


    <div className="col-11 col-md-5 text-center border border-light m-4 box box-s">
    <Link style={{textDecoration:"none",color:"black"}} to='user'>

    số lượng tài khoản : {datauser.length}
    <div className="main">
    <FcManager></FcManager>
         
     </div>
     </Link>
    </div>
    <div className="col-11 col-md-5 text-center border border-light m-4 box box-s">
    <Link style={{textDecoration:"none",color:"black"}} to='order'>
    quản lý đơn hàng
      <div className="main">
      <FcPaid></FcPaid>
         
         </div>
      </Link>
    </div>

    <div className="col-11 col-md-5 text-center border border-light m-4 box box-s">
    <Link style={{textDecoration:"none",color:"black"}} to='product'>
      quản lý sản phẩm
      <div className="main">
      <MdOutlineProductionQuantityLimits></MdOutlineProductionQuantityLimits>
         
         
         </div>
      </Link>
    </div>

    <div className="col-11 col-md-5 text-center border border-light m-4 box box-s">
    <Link style={{textDecoration:"none",color:"black"}} to='user'>
      thông tin người dùng
      <div className="main">
      <FcPortraitMode></FcPortraitMode>
         
         </div>
      </Link>
    </div>
  
    
    <div className="col-11 col-md-5 text-center border border-light m-4 box box-s">
    <Link style={{textDecoration:"none",color:"black"}} to='category'>

     quản lý danh mục
     <div className="main">
     <FcViewDetails></FcViewDetails>
         
         </div>
    </Link>
    </div>
    </div>
  </div>



    
  );
}

export default Manage;
