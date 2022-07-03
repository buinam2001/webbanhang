import React,{useEffect} from 'react';
import "./style.css"
import { useParams } from 'react-router-dom'
import { useSelector , useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { addcart } from "../../slices/cartSlies"

function Productdes() {
    let { id } = useParams();
    const data = useSelector((state) => state.productApi);
    var product;
    const dispatch = useDispatch();
   

    for(var i = 0 ; i<data.length ; i++)
    {
        if(data[i].id === +id )
        {

          product = data[i];
           

        }

    }

    var card = ()=>
    {
     
      var newdata = {...product , totalcart: 1}
   
     dispatch(addcart(newdata));
      
   
   
    }

    useEffect(() => {
           
      window.scrollTo(0,0);
    },[]); 
  
    function loc_xoa_dau(str) {
      // Gộp nhiều dấu space thành 1 space
      str = str.replace(/\s+/g, ' ');
      // loại bỏ toàn bộ dấu space (nếu có) ở 2 đầu của chuỗi
      str = str.trim();
      // bắt đầu xóa dấu tiếng việt  trong chuỗi
       str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
       str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
       str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
       str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
       str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
       str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
       str = str.replace(/đ/g, "d");
       str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
       str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
       str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
       str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
       str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
       str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
       str = str.replace(/Đ/g, "D");
       return str;
   }
  


    
 return (

 <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="card mb-3 card_none" style={{maxWidth: '100%'}}>
          <div className="row g-0">
            <div className="col-md-7">
              <img style={{maxWidth: '100%'}} src={product.photoavt} alt="..." />
                      
            </div>
            <div className="col-md-5 mt-5">
              <div className="card-body">
                <div className="card-category">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item "><Link to='/'>TRANG CHỦ</Link></li>
                      <li className="breadcrumb-item"><Link to={'/'+ loc_xoa_dau(product.category).split(" ").join('')} >{product.category}</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
                    </ol>
                  </nav>
                </div>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text crad-price">giá {product.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')+' vnđ'}</p>
            
                <button type="button"  onClick={card} className="btn btn-outline-danger">thêm vào giỏ hàng</button>
                <div className="row">
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="description">
      <div className="row">
        <div className="col-12 description-right">
          <div className="description-right_conten">
            <h5 className="right-conten_header">
              MÔ TẢ SẢN PHẨM
            </h5>
           
            <p className="conten-title_text">
              {product.des}
            </p>
          </div>


    
        </div>
      </div>
    </div>
  </div>
      
    );
  }
  
  export default Productdes;
  