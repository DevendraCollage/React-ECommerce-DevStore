import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMyCustomHook } from "./context/productcontext";

const API = "https://661bb1ed65444945d05012a9.mockapi.io/DevStore";

const SingleProduct = () => {
  const { id } = useParams();
  const { getSingleProducts, isSingleLoading, singleProduct } =
    useMyCustomHook();

  //? now destructure the single products items
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
  } = singleProduct;

  //? This will use for one time rendering the page
  useEffect(() => {
    getSingleProducts(`${API}?id=${id}`);
  }, [getSingleProducts, id]);

  return (
    <div>
      {name ? (
        <div>
          <h1>{name}</h1>
          {/* Render other product details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleProduct;
// <div>Single Product Page {name}</div>;
