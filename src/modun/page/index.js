import React from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import { Outlet } from "react-router-dom";


function Page() {


    
 return (
     <div style={{overflowX: "hidden",}}>
         <Header></Header>

         <Outlet></Outlet>

         <Footer></Footer>

     </div>


    );
  }
  
  export default Page;
  