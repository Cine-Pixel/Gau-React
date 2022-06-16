import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {!loading ? (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} />
          <p>{product.price}</p>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default ProductDetail;
