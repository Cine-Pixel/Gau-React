import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProducts,
  fetchProducts,
} from "../features/products/productSlice";

import Product from "./Product";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <h1>Products</h1>

      <br />
      {products &&
        products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}

      <br />
      <br />
      <br />

      {products.length === 0 ? "Loading..." : <h5>End Of Products</h5>}
    </>
  );
};

export default ProductList;
