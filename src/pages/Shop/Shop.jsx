import React, { useEffect, useState } from "react";
import ShopCard from "../../components/ShopCard/ShopCard.jsx";
import { url } from "../../constants.js";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="shop-products">
        <div className="products-container">
          {loading && <h1>Loading...</h1>}
          {products.map((product) => (
            <ShopCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
