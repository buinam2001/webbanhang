import {createproduct , updateproduct} from "../../slices/productcSlies"
import { useDispatch , useSelector} from "react-redux";
import React, {useState , useEffect} from 'react';
import { storage } from "../../../configfirebase";
import { uploadBytes , ref, getDownloadURL ,uploadBytesResumable } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ProductService from '../../../services/servicesProduct';
import "../../admin/style.css"




function AddProduct() {

const [image, setImage] = useState(null);

const [urlimage, seturlimage] = useState([]);



 
  





const [progress, setProgress] = useState(0);
const dispatch = useDispatch();
var navigate = useNavigate();

let { id } = useParams();



const [productEdit, setproductEdit] = useState({
      name: "",
      price :"",
      discount:"",
      photo:"",
      category:"",
      quantity:"",
      hangsx :"",
      des:"",
});


const Category = useSelector((state) => state.categoryApi);


useEffect( () => {
  async function callapi ()
   {
       let getapi  = await ProductService.get(id);
       let datapi = getapi.data;
       setproductEdit(datapi);  
   }
   if(id)
   {

     callapi();
   }
   
 },[]);



const getvalue = (e) =>
{
  e.preventDefault();
  var data = e.target;

  var valuefrom =
  {
      name: data.nameproduct.value,
      price :data.price.value,
      discount:data.discount.value,
      photoavt:urlimage,
      des:data.des.value,
      category:data.category.value,
      quantity:data.quantity.value,
      hangsx :data.hangsx.value,
    
  }
   
  if(id)
  {

    if(valuefrom.photoavt.length !== 0)
    {
    dispatch(updateproduct(
      {id,
       data:valuefrom  
      }));
       navigate('/admin/product');
    }
  }
  else
  {
    if(valuefrom.photoavt.length !== 0 && valuefrom.name && id === undefined)
    {
      navigate('/admin/product');
      dispatch(createproduct(valuefrom));
    }

  }
  

  
  
}





 const uploadFile = () => {

    if(image)
    {

  
      const storageRef = ref(storage, `images/${image.name}`);
    
      uploadBytes(storageRef, image).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });

      const uploadTask = uploadBytesResumable(storageRef, image);


      uploadTask.on('state_changed', 
      (snapshot) => {
      
      
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
   
      }, 
      (error) => {
      
      }, 
      () => {
        
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          seturlimage(downloadURL);
        });
      }
    );


 

   }


      };

      const checkfrom = (value, filed) =>
      {

        setproductEdit({
          ...productEdit,
          [filed]: value,
        });
      }

     


  return (
    <div>
    <h1 className="text-center mt-4">thêm sản phẩm</h1>
    <form onSubmit={getvalue}>
      <div className="container">
        <div className="row ">
          <div className="col-9">
        <div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">tên sản phẩm</label>
              <input type="text"
               onChange={(e) =>checkfrom(e.target.value,"name")} 
               value={productEdit.name} 
               name="nameproduct" className="form-control" 
               id="exampleInputEmail1" 
               aria-describedby="emailHelp" 
               placeholder="tên sản phẩm" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">giá</label>
              <input type="text" 
              name="price" 
              value={productEdit.price}  
              onChange={(e) =>checkfrom(e.target.value,"price")} 
              className="form-control" 
              id="exampleInputPassword1" 
              placeholder="giá" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">giảm giá</label>
              <input 
              type="giảm giá"  
              value={productEdit.discount} 
              onChange={(e) =>checkfrom(e.target.value,"discount")} 
              name="discount" 
              className="form-control" 
              id="exampleInputPassword1" 
              placeholder="giảm giá" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">danh mục</label>
              <select name="category" className="form-control" id="exampleFormControlSelect1">
                {
                  Category.map((data,index)=>
                  {
                      return <option key={index}>{data.name}</option>
                   
                  })
                }
               
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">hãng sản xuất</label>
              <input 
              name="hangsx" 
              value={productEdit.hangsx }  
              onChange={(e) =>checkfrom(e.target.value,"hangsx")} 
            
              type="số lượng" 
              className="form-control" 
              id="exampleInputPassword1" 
              placeholder="hãng sản xuất" />

            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">số lượng</label>
              <input 
              name="quantity" 
              value={productEdit.quantity} 
              onChange={(e) =>checkfrom(e.target.value,"quantity")}       
              type="số lượng" 
              className="form-control" 
              id="exampleInputPassword1"
               placeholder="số lượng" />
            </div>

            <div className="form-group">
            <label htmlFor="des">mô tả sản phẩm </label> <br></br>
            <textarea name="des" 
              value={productEdit.des} 
              onChange={(e) =>checkfrom(e.target.value,"des")}  
               rows="10" cols="100"></textarea>
            </div>
         </div>
          </div>
          <div className="col-3  img-product">
            <div className="custom-file">

            <label className="mt-3" htmlFor="files[]">ảnh sản phẩm</label>
              <input type="file" name="photo" className="custom-file-input " id="inputGroupFile01" 
               onChange={(event) => {
                 setImage(event.target.files[0]);
            }}/>
             <div>
             <progress value={progress} max="100" />
             
                  <img className="mt-4 w-50" src={urlimage} alt="" />
                 
             </div>

             
              <button className="mt-2 btn-file"onClick={uploadFile}> Upload Image</button>
            </div>
            
          </div>

          <button type="submit" className="btn-w btn btn-primary">Submit</button>
       
        </div>
      </div>
    </form>
  </div>
  );
}

export default AddProduct;
