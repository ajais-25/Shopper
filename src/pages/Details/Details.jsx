import React, { useEffect, useState } from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
import { url } from "../..//constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartItemSlice";

const Details = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${url}/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [productId]);

  const addToCartHandler = () => {
    dispatch(addItem(product));
  };

  return (
    <>
      <div className="details-product">
        <div className="product-details-container">
          <div className="details-image">
            <img src={product.image} alt="product" />
          </div>
          <div className="details-right">
            <div className="details-title">{product.title}</div>
            <div className="details-description">{product.description}</div>
            <div className="details-bottom">
              <div className="details-price">${product.price}</div>
              <button
                onClick={addToCartHandler}
                className="details-add-to-cart-btn"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
