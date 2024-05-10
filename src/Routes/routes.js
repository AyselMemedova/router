// import { Children } from "react";
import Home from "../pages/site/Home/home";
import Shop from "../pages/site/Shop/shop";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Products from "../pages/admin/Products/Products";
import Users from "../pages/admin/Users/Users";
import AdminRoot from "../pages/admin/AdminRoot";
import SiteRoot from "../pages/site/SiteRoot";
import Error from "../pages/Error/Error";
import Detail from "../pages/site/Detail/Detail";
import AddProducts from "../pages/admin/AddProducts/AddProducts";

const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "details/:id",
        element: <Detail />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },

  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path:"add",
        element:<AddProducts/>
      },
    ],
  },
];

export default ROUTES;
