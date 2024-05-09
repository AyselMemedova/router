// import { Children } from "react";
import Home from "../pages/site/Home/home";
import Shop from "../pages/site/Shop/shop";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Products from "../pages/admin/Products/Products";
import Users from "../pages/admin/Users/Users";
import AdminRoot from "../pages/admin/AdminRoot";
import SiteRoot from "../pages/site/SiteRoot";

const ROUTES = [
  {
    path: "/",
    element:<SiteRoot/>,
    children: [
      {
        path: "",
        element: <Home />,
      },{
        path:"shop",
        element:<Shop/>
      }
    ],
  },

  {
    path:"/admin",
    element:<AdminRoot/>,
    children:[{
        path:"",
        children:<Dashboard/>
    },
    {
        path:"products",
        children:<Products/> 
    },
    {
        path:"users",
        children:<Users/> 
    }]
  }
  
];


export default ROUTES
