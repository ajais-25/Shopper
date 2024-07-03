import React from "react";
import ReactDOM from "react-dom/client";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Shop />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
