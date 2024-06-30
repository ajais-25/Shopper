import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";

const url = "https://fakestoreapi.com/products";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="products-container">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;