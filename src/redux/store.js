import { configureStore } from "@reduxjs/toolkit";
import productcurd from '../modun/slices/productcSlies';
import categorycurd from "../modun/slices/categorySlies";
import cartcurd from ".././modun/slices/cartSlies";
import ordercurd from "../modun/slices/ordercSlies";
import usercurd from "../modun/slices/userSlies"
export default configureStore({
  reducer: {
    productApi: productcurd,
    categoryApi:categorycurd,
    cart :cartcurd,
    orderApi: ordercurd,
    userApi : usercurd
  }
});
