import { addcart } from "../../slices/cartSlies"
import React ,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import { Link } from 'react-router-dom';
import CategoryPage from '../categorypage/category';
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch , useSelector} from "react-redux";
import Slideshow from '../component/Slide';

function Homepage() {

const dispatch = useDispatch();


  const dataproduct = useSelector((state) => state.productApi);
  const datacategory = useSelector((state) => state.categoryApi);
 


 var card = (data)=>
 {
  
   var newdata = {...data ,  totalcart: 1}

   dispatch(addcart(newdata));
   


 }
 
 const perpage = 5;


 const [currentpage , Setcurrentpage ] = useState(1)
 const [startpage , Setstartpage ] = useState(0)
 const [endpage, Setendpage ] = useState(perpage)
 
 const totalpage = Math.ceil(dataproduct.length / perpage);

 const nextpage = () =>
 {


if(currentpage + 1 > totalpage )
{
  
  Setcurrentpage(totalpage)

}
else
{
  Setcurrentpage(currentpage => 
    {
  
        var newcurrentpage = currentpage + 1
        getpage(newcurrentpage);
       
         return newcurrentpage;
      }
    );
  

}
  

}

const Previouspage = () => 
{
  if(currentpage <= 1  )
{
  
  Setcurrentpage(1)

}
else
{
  Setcurrentpage(currentpage => 
    {
        var newcurrentpage = currentpage - 1 ;
        getpage(newcurrentpage);
       
        return newcurrentpage;
      }
    );
}

}
const hendalpage = (e) =>
{
  Setcurrentpage(e);
  getpage(e)

}

console.log(currentpage); 

const getpage = (currentpage) =>
{
  
  Setstartpage ((currentpage - 1) * perpage);   
  Setendpage(currentpage * perpage); 
}


  var rows = new Array(totalpage).fill(0).map( ( zero, index ) =>
     <li key={index}  className="page-item" >
        <p onClick={()=>hendalpage(index+1)} className="page-link">{index+1}</p>
      </li>);


useEffect(() => {
           
  window.scrollTo(0,0);
},[]); 




 return (

  <div className='stroll'>
      <Slideshow></Slideshow>
      <div className="container">
        <div style={{marginLeft: 0}} className="header_tile mt-3">
          <h5 className="text-primary pr-3">SẢN PHẨM MỚI </h5>
          <h5 className="header_tile-text">SẢN PHẨM BÁN CHẠY</h5>
        </div>
        <div className="row">
          <div className="col-12 col-xl-12">     
            <div className="row justify-content-between">

            {
              dataproduct.map((data,index) =>
              {
                  return(
                    index >= startpage && index < endpage ?
                  <div key={index} className="col-6 col-md-4 col-lg-2">
                        <div className="card card-h mb-4" style={{width: '100%'}}>
                    <Link className='link-product' to={'product/'+data.id}  >
                          <img className="card-img-top" alt={data.name} src={data.photoavt} />
                     </Link>
                          <div className="card-body">
                            <h5 className="card-text">{data.name}</h5>
                            <p className="card-text">{data.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')+' vnđ'}</p>
                            <div onClick={()=>card(data)} className='card-to' >
                            <MdAddShoppingCart></ MdAddShoppingCart>
                            </div>
                          </div>
                        </div>
                   </div>   : ''
                  
                  )

              })
            }                                          
            </div>    
          </div>     
        </div>
      </div>
            <nav aria-label="Page navigation example pagination">
        <ul className="pagination">
          <li className="page-item">
            <p className="page-link" onClick={Previouspage} href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
              <span className="sr-only">Previous</span>
            </p>
          </li>
          {
          rows
     
          }
       
          <li className="page-item">
            <p className="page-link" onClick={nextpage} aria-label="Next">
              <span aria-hidden="true">»</span>
              <span className="sr-only" >Next</span>
            </p>
          </li>
        </ul>
      </nav>

           

   {
     datacategory.map((value,index)=>{

       return(
         
          <div key={index} className="container">
          <div className="hero mb-2">
            <h5 className="hero_title">
              {value.name}
            </h5>
          </div>
          <div className="row">
          

        
             <CategoryPage valuecate={value.name} valueproduct={dataproduct}></CategoryPage>
            
        </div>
      </div>
        )
     })
   }
       

     
    </div>


      
    );
  }
  
  export default Homepage;
  