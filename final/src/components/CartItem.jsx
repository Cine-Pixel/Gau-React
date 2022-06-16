const CartItem = ({
  id,
  title,
  image,
  price,
  count,
  remove,
  increment,
  decrement,
}) => {
  return (
    <div>
      <h3>
        {title} - {count}
      </h3>
      <img src={image} alt={title} />
      <p>{price * count}</p>
      <button onClick={() => remove(id)}>Remove</button>
      <button onClick={() => increment(id)}>+</button>
      <button onClick={() => decrement(id)}>-</button>
    </div>
  );
};

export default CartItem;
