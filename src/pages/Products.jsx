import React, { useContext } from "react";
import MainStore from "../context/MainStore";
import Loading from "./../components/Loading";

const Products = () => {
  const { products } = useContext(MainStore);
  return (
    <div className="text-center">
      <h1>Products</h1>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <h1>{product.name}</h1>
          </div>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Products;
