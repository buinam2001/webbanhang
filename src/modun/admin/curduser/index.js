import React ,{useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import {getuser } from "../../slices/userSlies"
import "./style.css";

const CurdUser = () =>
{

    const dispatch = useDispatch();
    useEffect( () => {
        async function dispatchdata()
        {
            dispatch(getuser());
        }
        dispatchdata();
    },[dispatch]);

    
    var data = useSelector((state) => state.userApi);
    console.log(data);
    return(
        <div className="container mt-5"> 
        <h1> thông tin tài khoản</h1>
        
        <table className="table table-bordered mt-5">
        <thead>
            <tr>
            <th scope="col">STT</th>
            <th scope="col">tên tài khoản</th>
            <th scope="col">mật khẩu</th>
         
        </tr>
        </thead>
        <tbody>
            {
                data.map((value,index)=>{
                        return(
                            <tr key={index}>
                            <th id="table_index" scope="row">{index}</th>
                            <td className="table_user">{value.name}</td>
                            <td  className="table_user">{value.password}</td>
                            </tr>
                        )

                })
            }
          
          
        </tbody>
        </table>
        </div>


    )
 

  
}

export default CurdUser;


