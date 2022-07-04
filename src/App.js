import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";
import {useDispatch } from "react-redux";
import Root from './router';
import { getproduct } from "./modun/slices/productcSlies"
import { getcategory } from './modun/slices/categorySlies';
function App() {

  console.log(process.env.REACT_APP_API);

  const dispatch = useDispatch();
        useEffect( () => {
          dispatch(getproduct());
      },[dispatch]);

      useEffect( () => {
        dispatch(getcategory());
    },[dispatch]);

  
    

  return (
    <div className="App">

    <Root></Root>

   


    </div>
  );
}

export default App;
