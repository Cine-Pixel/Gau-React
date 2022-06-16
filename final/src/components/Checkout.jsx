import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementCount,
  decrementCount,
  selectCartProducts,
} from "../features/cart/cartSlice";

import CartItem from "./CartItem";

const Checkout = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectCartProducts);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementCount(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementCount(id));
  };

  return (
    <>
      <h1>Products</h1>

      <br />
      {products &&
        products.map((product) => (
          <CartItem
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            count={product.count}
            remove={handleRemove}
            increment={handleIncrement}
            decrement={handleDecrement}
          />
        ))}

      <br />
      <br />
      <br />

      {products.length === 0 ? "Your Cart is Empty" : <h5>End Of Products</h5>}
    </>
  );
};

export default Checkout;
