import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../Layout/MainLayout";
import Shop from "../components/Shop/Shop";
import Review from "../components/Review/Review";
import Product from "../components/Product/Product";
import Invantory from "../components/Invantory/Invantory";
import Shipment from "../components/Shipment/Shipment";
import PrivateRoute from "./PrivateRoute";
import Notfound from "../components/NotFound/NotFound";
import ProductDitall from "../components/ProductDitall/ProductDitall";
import Login from "../components/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <Shop /> },{path:'/review',element:<Review/>},{path:'/product',element:<Product/>},{path:'/inventory',element:<Invantory/>},{path:'/shipment',element: <PrivateRoute> <Shipment/> </PrivateRoute>},{path:'*', element:<Notfound/>},{path:"/product/:productkey",
    element:<ProductDitall/>},{path:'/login',element:<Login/>},{path:"/shop",element:<Shop/>},{path:'/manage',element:<Invantory/>}],
  },
]);
