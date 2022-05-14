import React ,{useState,useEffect} from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import { useSelector , useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import NotFound from '../../notfile';
import { addcart } from "../../slices/cartSlies"
import "./style.css";

const CategoryProduct = () =>
{
  
  const dispatch = useDispatch();
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


    let { category } = useParams();
   
    const data = useSelector((state) => state.productApi);

    const datacategory = useSelector((state) => state.categoryApi);


    const [sortType, setSortType] = useState();




    let index = datacategory.findIndex(({ name }) => (loc_xoa_dau(name).split(" ").join('').toLowerCase() == category.split(" ").join('').toLowerCase()))
  
  
    const [ product , setproduct ] = useState();
  
          var datanews = data.filter((data,index) =>{
          
          
                return category.toLowerCase() == loc_xoa_dau(data.category.split(" ").join('').toLowerCase())
          
          });

const options = ['giá cao','Giá thấp' ];
const [items, setitems] = useState(options);

// const items = [];
// console.log(options.length);
var optionsnew;
//  const renderoptions = () =>
//  {

  // for (const [index, value] of options.entries()) {
  //   items.push(<option value={index+1} key={index}>{value}</option>)
  // }

  const renderoptions = () =>
 {

  return items.map((data,index)=>
    {
        return (<option value={index+1} key={index}>{data}</option>)
    });

 }

          useEffect(() => {
            window.scrollTo(0,0);
            setproduct(datanews)
            renderoptions();
            // setitems(optionsnew);
          }, [category]); 
        

            useEffect(() => {
              setproduct(datanews)
              const sortArray = type => {
                var fomat = +type;
               
             
                 if(fomat === 1)
                    {
                      var data = [...product].sort(function(a, b){return b.price - a.price});
                      setproduct(data);
                     
                    }
                  if(fomat === 2)
                      {
                        var data = [...product].sort(function(a, b){return a.price - b.price});
                        setproduct(data)
                      }
              };
          
              sortArray(sortType);
            }, [sortType]); 
          

          var card = (data)=>
          {
          
          var newdata = {...data,totalcart: 1}
        
          dispatch(addcart(newdata));
        
          }

          
         const handleChange =  (e) => {


          console.log(e.target.options[e.target.value])
           setSortType(e.target.value)
          
          
          }



      
    return(
      
        <div className="container">
        
       
         <select  onChange={handleChange} className="form-select form-select-lg mb-3 fiter" aria-label=".form-select-lg example">
         {/* <option value='0' defaultValue>sắp xếp</option> */}
               {/* {items} */}
               {renderoptions()}
               {/* {optionss} */}
        </select>

   

        <div className="row m-4">   
       
      { index == -1 ?  <NotFound></NotFound> :

    product?.map((value,index)=>
            {
                return (
                  <div key={index} className="col-6 col-sm-4 col-xl-2">
                            <div className="card mb-4" style={{width: '100%'}}>
                        < Link style={{textDecoration:"none",color:"black"}} to={'/product/'+value.id}>
                              <img className="card-img-top" src={value.photoavt} alt={value.namename} />
                              </Link>
                              <div className="card-body p-0">
                                <h5 style={{fontSize: '15px', padding: 0, margin: 0}} className="card-title card-text">{value.name}</h5>
                                <p style={{fontSize: '13px', padding: 0, margin: 0}} className="card-text">{value.price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')+' vnđ'} </p>
                                <div className='card-be' onClick={()=>card(value)} >
                                    <MdAddShoppingCart></ MdAddShoppingCart>
                                </div>
                              </div>
                            </div>
                        </div> 
                        )
                        
                    })
            }       
      
          
      </div>
    </div>
     
      );
 

  
}

export default CategoryProduct;