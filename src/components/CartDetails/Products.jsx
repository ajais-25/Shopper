import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../../features/cart/cartItemSlice";

const Products = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Products</h1>
    </>
  );
};

export default Products;
