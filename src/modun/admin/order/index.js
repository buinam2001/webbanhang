import React, { useEffect } from "react";
import {useDispatch , useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { getorder ,deleteorder } from "../../slices/ordercSlies"


function AdminOrder() {
  const dispatch = useDispatch();
  
  useEffect( () => {
    async function callapi ()
     {
       dispatch(getorder());
     }
     callapi()
     
   },[]);
  const dataorder = useSelector((state) => state.orderApi);

  const hendaldelete = (e)=>
  {
    dispatch(deleteorder(e));
  }


  return (
      <div className="container ">
        <h1 className="mt-5"> đơn hàng  </h1>
      
        <table className="table">
          <thead>
            <tr>
              <th scope="col">SL</th>
              <th scope="col">tên người đặt</th>
              <th scope="col">địa chỉ</th>
              <th scope="col">số điện thoại</th>
              <th scope="col">số lượng sản phẩm</th>
              <th scope="col">tổng giá tiền</th> 
              <th scope="col"></th> 
              <th scope="col"></th> 
            </tr>
          </thead>
          <tbody>
       
      
            {
              dataorder.length === 0 ? <tr>
                 <td className="mt-5 "> chưa có đơn hàng  </td>
                  </tr>:
        
              dataorder.map((data,index)=>
              {
                return(
                  <tr key={index}>
                  <th id="table_index" scope="row">1</th>
                  <td>{data.valuefrom.name}</td>
                  <td>{data.valuefrom.address}</td>
                  <td>{data.valuefrom.phone}</td>
                  <td>{data.cart.length}</td>
                  <td>{data.totalorder.toLocaleString('vi-VN', {
                      style: 'currency',
                      currency: 'VND'
                  }) }</td>
                  <td><Link to={'detailorder/'+ data.id} >chi tiết</Link></td>
                  <td> <button onClick={()=>hendaldelete(data.id)} type="button" className="btn btn-danger">xóa</button> </td>
                </tr>
                )
              })

           }
          </tbody>
        </table>
      </div>

  );
}

export default AdminOrder;
