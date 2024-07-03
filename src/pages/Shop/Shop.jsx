import React, { useEffect, useState } from "react";
import ShopCard from "../../components/ShopCard/ShopCard.jsx";
import { url } from "../../utils/constants.js";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="shop-products">
        <div className="products-container">
          {products.map((product) => (
            <ShopCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
