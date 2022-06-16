import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";

const Product = ({ id, title, image, price }) => {
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(addToCart({ id, title, image, price, count: 1 }));
  };

  return (
    <div>
      <h3>
        <Link to={`product/${id}`}>{title}</Link>
      </h3>
      <img src={image} alt={title} />
      <p>{price}</p>
      <button onClick={handleCart}>Add To Card</button>
    </div>
  );
};

export default Product;
