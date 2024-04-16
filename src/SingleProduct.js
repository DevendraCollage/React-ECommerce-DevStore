import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useMyCustomHook from "./context/productcontext";

const API = "https://661bb1ed65444945d05012a9.mockapi.io/DevStore";

const SingleProduct = () => {
  const { id } = useParams();
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useMyCustomHook();

  //? now destructure the single products items
  const {
    is: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  return <div>Single Product Page</div>;
};

export default SingleProduct;
