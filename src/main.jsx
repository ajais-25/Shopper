import React from "react";
import ReactDOM from "react-dom/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Shop from "./pages/Shop/Shop.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Layout from "./components/Layout.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Details from "./pages/Details/Details.jsx";
import Orders from "./pages/Orders/Orders.jsx";
import OrderDetails from "./pages/OrderDetails/OrderDetails.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Shop />} />
      <Route path="cart" element={<Cart />} />
      <Route path="orders" element={<Orders />} />
      <Route path="orders/:orderId" element={<OrderDetails />} />
      <Route path="details/:productId" element={<Details />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
