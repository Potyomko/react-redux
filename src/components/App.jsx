import { Layout } from "./Layout/Layout";
 import { AppBar } from "./AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refresh } from "../redux/auth/operations";

export const App = () => {
  // const dispath = useDispatch();
  // useEffect(() => {
  //   dispath(refresh())
  // },[dispath])
   return (    
     <Layout>
       <AppBar />
       <Outlet/>
     </Layout>
   );
 };