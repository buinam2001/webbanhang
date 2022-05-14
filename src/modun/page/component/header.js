import React, { useState } from 'react';
import { Navbar, Container , Nav } from 'react-bootstrap';
import { TiShoppingCart } from "react-icons/ti";
import { VscAccount } from "react-icons/vsc";
import { NavLink } from 'react-router-dom'
import {  useSelector } from "react-redux";

import { Link } from 'react-router-dom';
import "./style.css";

const Header = () =>
{
  const [ display , Setdisplay ] = useState({display:"none"});
  const [Search , SetSearch ] = useState("");
  const [ auth , setauth ] = useState(false);
  const [stroll , Setstroll ] = useState({


  });

  const navLinkClass = ({ isActive }) => {
    return isActive ? 'nav-link activated' : 'nav-link'
  }
    const product = useSelector((state) => state.productApi);
    const Category = useSelector((state) => state.categoryApi);
    const cart = useSelector((state) => state.cart);


   

  var datajson =  localStorage.getItem("data");

 
const handlechange = (e) =>
{
  var value = e.target.value;
  SetSearch(value);

  if(value.length > 0 )
  {
    Setdisplay({display:"block"});

  }
  if(value.length === 0 )
  {
      Setdisplay({display:"none"});

  }
  
  
}


  
  var logout = () =>
  {
    localStorage.removeItem("user");
    localStorage.removeItem("data");
    window.location.reload();
  }

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

 const check = ()=>
 {
  setauth(!auth);
 }
var sum = 0;
 for(var i = 0 ; i <cart.length ; i++)
 {
    sum += cart[i].totalcart;
 }

 window.onscroll = function(event) {
  
  if(window.pageYOffset < 150)
{
  Setstroll({ position: "relative",});
}

if(window.pageYOffset > 150)
{
  Setstroll({
    top: "0",
    position: "fixed",
     zIndex: 999,
     width: "100%",
  });
}
};


var productSearch = product.filter((s) => s.name.toLowerCase().includes(Search.toLowerCase()))

      
    return(
     <div style={stroll} className='wapper' >
        <header>
        <div className="container">
          <div className="header-logo">   
            <div style={{marginLeft: '15px'}} className="logo">
            < Link to={'/'}>
              <img className="logo-img l" src="http://mauweb.monamedia.net/vienthonga/wp-content/uploads/2018/01/logo-mona-vienthonga.png" alt="" />
            </Link>
            </div>
          
              <div className='cart_user d-flex align-items-center'>    
                 
                <NavLink  to='/cart' className={navLinkClass}> 
                  <TiShoppingCart></TiShoppingCart>
                </NavLink> 
                ({sum})
              
                <div className="list-icon">
              
                  <VscAccount onClick={check}> </VscAccount>
                  <div className={auth ? "cart-auth" : 'd'}  >
                  <div className="traingle"></div>
                    <p className="auth" >{datajson}</p>

                    <p  onClick={logout} className="auth">đăng xuất</p>      
                  </div>
                </div>
              <div className="list-icon">
              
                </div>
              <div className="list-icon" ></div>
              </div>
           
          </div>


        </div>
       
      </header>
      
   
              <Navbar bg="light" className='check' expand="lg">
                <Container fluid>
                <div className="container">
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                    >
                   
                         <NavLink  to='/' className={navLinkClass}>TRANG CHỦ</NavLink> 
                      {
                              Category.map( (data,index)=>
                              {
                              
                                
                                 return <NavLink key={index} to={'/' + loc_xoa_dau(data.name).split(" ").join('').toLowerCase()} className={navLinkClass}>{data.name}</NavLink> 
                              
                              })

                      }
                  
                    
                    </Nav> 
                    <div className="box" >
                      <input onChange={handlechange}   placeholder="tìm kiếm sản phẩm"  className="search" type="text"></input>
                        <div className="card mb-3 search_product" style={display} >
                          {
                   
                        productSearch.length === 0 ?  <div className="row search_product-cart g-0">
                        <div className="col-md-4">
                          <img src="https://t.ex-cdn.com/chatluongvacuocsong.vn/resize/740x416/ucp/themes/images/no-photo.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">chưa tồn tại</h5>
                            <p className="card-text"></p>
                          </div>
                        </div>
                      </div> :
                        productSearch.map((data,index)=>{
                            
                                return(
                                
                                 <Link  style={{width: "50%"}} key={index} className='link-product' to={'product/'+data.id}  >
                                <div  className="row search_product-cart g-0">
                                <div className="col-md-4">
                                  <img src={data.photoavt}  className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                  <div className="card-body">
                                    <h5 className="card-title">{data.name}</h5>
                                    <p className="card-text">{data.des}</p>
                                  </div>
                                </div>
                              </div> 
                              </Link>
                              );
                                

                              })

                         
                          }

                          
                          
                        </div>
                        
                        

                    </div>
                    

                  </Navbar.Collapse>
                  </div>
                </Container>
              </Navbar>

             
            </div>
     
    )
}

export default Header